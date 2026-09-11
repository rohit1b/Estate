import { useState, useEffect } from "react";
import { Award, Users2, ShieldCheck, Star, ThumbsUp, Heart, TrendingUp, CheckCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const API_URL = "https://estate-backend-k3sh.onrender.com/api/benefits";

const ICON_MAP = {
  Award: Award,
  Users2: Users2,
  ShieldCheck: ShieldCheck,
  Star: Star,
  ThumbsUp: ThumbsUp,
  Heart: Heart,
  TrendingUp: TrendingUp,
  CheckCircle: CheckCircle,
};

const ICON_OPTIONS = Object.keys(ICON_MAP);

export default function Benefits() {
  const { token, canEdit } = useAuth();
  const [benefits, setBenefits] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("Award");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchBenefits = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setBenefits(data);
    } catch (err) {
      console.error("Failed to load benefits:", err);
    }
  };

  useEffect(() => {
    fetchBenefits();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) return;

    setLoading(true);
    setError("");
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ title, description, icon }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to add benefit");
      }

      setTitle("");
      setDescription("");
      setIcon("Award");
      setShowModal(false);
      fetchBenefits();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this benefit?");
    if (!confirmDelete) return;

    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } });
      fetchBenefits();
    } catch (err) {
      console.error("Failed to delete benefit:", err);
    }
  };

  return (
    <section className="bg-ivory py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-gold-dark">Our Benefits</span>
            {canEdit && (
              <button onClick={() => setShowModal(true)} className="w-6 h-6 flex items-center justify-center rounded-full bg-navy-900 text-white text-sm font-bold hover:bg-gold transition-colors shrink-0" aria-label="Add benefit">
                +
              </button>
            )}
          </div>
          <h2 className="font-display font-medium text-4xl sm:text-5xl text-navy-900 mt-3">Why choose Rohitrise Realty</h2>
          <p className="text-navy-900/60 text-lg mt-5 leading-relaxed">
            With 7+ years of expertise and deep knowledge of real estate markets across Delhi, Noida, Gurugram, and Yamuna Expressway, we deliver trusted property solutions tailored to your needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-7">
          {benefits.map((b) => {
            const Icon = ICON_MAP[b.icon] || Award;
            return (
              <div key={b.id} className="relative bg-white rounded-2xl border border-navy-900/8 p-8 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-300">
                {canEdit && (
                  <button onClick={() => handleDelete(b.id)} className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-black/10 text-navy-900 text-sm font-bold hover:bg-red-600 hover:text-white transition-colors" aria-label="Delete benefit">
                    ×
                  </button>
                )}
                <div className="w-12 h-12 rounded-full bg-navy-900 grid place-items-center mb-6">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="font-display text-xl text-navy-900 mb-3">{b.title}</h3>
                <p className="text-navy-900/60 text-sm leading-relaxed">{b.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {showModal && canEdit && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md">
            <h3 className="font-display text-2xl text-navy-900 mb-6">Add Benefit</h3>

            {error && <p className="bg-red-50 text-red-600 text-sm rounded-lg p-3 mb-4">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-1">Icon</label>
                <select value={icon} onChange={(e) => setIcon(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white">
                  {ICON_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-1">Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Proven Expertise" className="w-full border border-gray-300 rounded-lg px-3 py-2" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-1">Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Short description..." className="w-full border border-gray-300 rounded-lg px-3 py-2" rows="4" required />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-2.5 rounded-full border border-gray-300 text-navy-900 font-semibold">
                  Cancel
                </button>
                <button type="submit" disabled={loading} className="flex-1 py-2.5 rounded-full bg-gold text-navy-900 font-semibold disabled:opacity-60">
                  {loading ? "Adding..." : "Add Benefit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}