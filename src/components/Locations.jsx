import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const API_URL = "https://estate-backend-k3sh.onrender.com/api/cities";
const BACKEND_URL = "https://estate-backend-k3sh.onrender.com";

const CITY_OPTIONS = [
  "Gurugram",
  "Noida",
  "Greater Noida",
  "Ghaziabad",
  "Faridabad",
  "IndraPuram",
  "Yamuna Expressway",
  "Sohna Road",
  "New Delhi",
  "Dwarka",
  "Rohini",
  "Gurgaon Sector 150",
  "Manesar",
  "Sonipat",
  "Panipat",
  "Meerut",
  "Bareilly",
  "Lucknow",
  "Agra",
  "Chandigarh",
];

export default function Locations() {
  const { token, canEdit } = useAuth();
  const [cities, setCities] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [count, setCount] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchCities = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setCities(data);
    } catch (err) {
      console.error("Failed to load cities:", err);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !count) return;

    setLoading(true);
    setError("");
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("properties_count", count);
      if (image) formData.append("image", image);

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to add city");
      }

      setName("");
      setCount("");
      setImage(null);
      setShowModal(false);
      fetchCities();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this city?");
    if (!confirmDelete) return;

    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchCities();
    } catch (err) {
      console.error("Failed to delete city:", err);
    }
  };

  return (
    <section className="bg-ivory py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-gold-dark">
              Explore Cities
            </span>
            {canEdit && (
              <button
                onClick={() => setShowModal(true)}
                className="w-6 h-6 flex items-center justify-center rounded-full bg-navy-900 text-white text-sm font-bold hover:bg-gold transition-colors shrink-0"
                aria-label="Add city"
              >
                +
              </button>
            )}
          </div>
          <h2 className="font-display font-medium text-4xl sm:text-5xl text-navy-900 mt-3">
            Our locations for you
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <LocationCard
              key={city.id}
              city={city}
              onDelete={canEdit ? handleDelete : null}
            />
          ))}
        </div>
      </div>

      {showModal && canEdit && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md">
            <h3 className="font-display text-2xl text-navy-900 mb-6">
              Add Explore City
            </h3>

            {error && (
              <p className="bg-red-50 text-red-600 text-sm rounded-lg p-3 mb-4">{error}</p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-1">
                  Upload Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-1">
                  Select City
                </label>
                <select
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white"
                  required
                >
                  <option value="">-- Select a city --</option>
                  {CITY_OPTIONS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-1">
                  No of Properties
                </label>
                <input
                  type="text"
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                  placeholder="e.g. 150 Properties"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  required
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-2.5 rounded-full border border-gray-300 text-navy-900 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-2.5 rounded-full bg-gold text-navy-900 font-semibold disabled:opacity-60"
                >
                  {loading ? "Adding..." : "Add Explore City"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

function LocationCard({ city, onDelete }) {
  const imageSrc = city.image ? `${BACKEND_URL}${city.image}` : "";
  return (
    <div className="relative group rounded-2xl overflow-hidden h-56">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={city.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/10 to-transparent" />
      <div className="absolute bottom-0 left-0 p-5">
        <h3 className="font-display text-xl text-white">{city.name}</h3>
        <p className="text-gold text-xs font-semibold tracking-wide mt-1">
          {city.properties_count}
        </p>
      </div>
      {onDelete && (
        <button
          onClick={() => onDelete(city.id)}
          className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-black/60 text-white text-sm font-bold hover:bg-red-600 transition-colors"
          aria-label="Delete city"
        >
          ×
        </button>
      )}
    </div>
  );
}