import { useState, useEffect } from "react";
import { ArrowUpRight, Check, MapPin } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const API_URL = "https://estate-backend-k3sh.onrender.com/api/properties";
const BACKEND_URL = "https://estate-backend-k3sh.onrender.com";

export default function Properties() {
  const { token, canEdit } = useAuth();
  const [properties, setProperties] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [tag, setTag] = useState("");
  const [highlight, setHighlight] = useState("");
  const [features, setFeatures] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProperties = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProperties(data);
    } catch (err) {
      console.error("Failed to load properties:", err);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !location) return;

    setLoading(true);
    setError("");
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("location", location);
      formData.append("tag", tag);
      formData.append("highlight", highlight);
      formData.append("features", features);
      if (image) formData.append("image", image);

      const res = await fetch(API_URL, { method: "POST", headers: { Authorization: `Bearer ${token}` }, body: formData });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to add property");
      }

      setName("");
      setLocation("");
      setTag("");
      setHighlight("");
      setFeatures("");
      setImage(null);
      setShowModal(false);
      fetchProperties();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this property?");
    if (!confirmDelete) return;

    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } });
      fetchProperties();
    } catch (err) {
      console.error("Failed to delete property:", err);
    }
  };

  return (
    <section id="properties" className="bg-ivory py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-gold-dark">Our Portfolio</span>
            {canEdit && (
              <button onClick={() => setShowModal(true)} className="w-6 h-6 flex items-center justify-center rounded-full bg-navy-900 text-white text-sm font-bold hover:bg-gold transition-colors shrink-0" aria-label="Add property">
                +
              </button>
            )}
          </div>
          <h2 className="font-display font-medium text-4xl sm:text-5xl text-navy-900 mt-3">Exclusive real estate portfolio</h2>
          <p className="text-navy-900/60 text-lg mt-5 leading-relaxed">Handpicked luxury residences and premium investments across Noida and Gurugram.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((p) => (
            <article key={p.id} className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-navy-900/8 hover:border-gold/40 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-300">
              {canEdit && (
                <button onClick={() => handleDelete(p.id)} className="absolute top-3 right-3 z-10 w-7 h-7 flex items-center justify-center rounded-full bg-black/60 text-white text-sm font-bold hover:bg-red-600 transition-colors" aria-label="Delete property">
                  ×
                </button>
              )}
              <div className="relative h-56 overflow-hidden">
                {p.image && (
                  <img src={`${BACKEND_URL}${p.image}`} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                )}
                {p.tag && (
                  <span className="absolute top-4 left-4 bg-navy-900/90 text-gold text-[11px] font-semibold tracking-wide uppercase rounded-full px-3 py-1.5">
                    {p.tag}
                  </span>
                )}
              </div>

              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-display text-2xl text-navy-900">{p.name}</h3>
                <div className="flex items-center gap-1.5 text-navy-900/50 text-sm mt-1.5 mb-4">
                  <MapPin size={14} />
                  {p.location}
                </div>

                <p className="text-sm font-semibold text-navy-900 mb-3">{p.highlight}</p>

                <ul className="space-y-2 mb-7 flex-1">
                  {(p.features || []).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-navy-900/65">
                      <Check size={15} className="text-gold-dark mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#contact-us" className="inline-flex items-center justify-center gap-2 bg-navy-900 group-hover:bg-gold group-hover:text-navy-900 text-white text-sm font-semibold rounded-full py-3.5 transition-colors">
                  Know More
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <a href="#properties" className="inline-flex items-center gap-2 border border-navy-900/15 hover:border-gold hover:bg-navy-900 hover:text-white font-semibold rounded-full px-7 py-3.5 transition-colors">
            View All Properties
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {showModal && canEdit && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h3 className="font-display text-2xl text-navy-900 mb-6">Add Property</h3>

            {error && <p className="bg-red-50 text-red-600 text-sm rounded-lg p-3 mb-4">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-1">Upload Image</label>
                <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} className="w-full border border-gray-300 rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-1">Property Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. The Grand Crest" className="w-full border border-gray-300 rounded-lg px-3 py-2" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-1">Location</label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g. Sector 150, Noida" className="w-full border border-gray-300 rounded-lg px-3 py-2" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-1">Tag</label>
                <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} placeholder="e.g. Ultra Luxury" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-1">Highlight</label>
                <input type="text" value={highlight} onChange={(e) => setHighlight(e.target.value)} placeholder="e.g. Low-density project" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-1">Features (comma se separate karein)</label>
                <textarea value={features} onChange={(e) => setFeatures(e.target.value)} placeholder="e.g. 3 BHK, Modular kitchen, Servant room" className="w-full border border-gray-300 rounded-lg px-3 py-2" rows="3" />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-2.5 rounded-full border border-gray-300 text-navy-900 font-semibold">
                  Cancel
                </button>
                <button type="submit" disabled={loading} className="flex-1 py-2.5 rounded-full bg-gold text-navy-900 font-semibold disabled:opacity-60">
                  {loading ? "Adding..." : "Add Property"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}