import { locations } from "../data/content";

export default function Locations() {
  const large = locations.filter((l) => l.size === "large");
  const small = locations.filter((l) => l.size === "small");

  return (
    <section className="bg-ivory py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <span className="text-sm font-semibold text-gold-dark">
            Explore Cities
          </span>
          <h2 className="font-display font-medium text-4xl sm:text-5xl text-navy-900 mt-3">
            Our locations for you
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          {large.map((loc) => (
            <LocationCard key={loc.id} loc={loc} className="h-64" />
          ))}
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {small.map((loc) => (
            <LocationCard key={loc.id} loc={loc} className="h-52" />
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationCard({ loc, className }) {
  return (
    <a
      href="#properties"
      className={`relative group rounded-2xl overflow-hidden ${className}`}
    >
      <img
        src={loc.image}
        alt={loc.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/10 to-transparent" />
      <div className="absolute bottom-0 left-0 p-5">
        <h3 className="font-display text-xl text-white">{loc.name}</h3>
        <p className="text-gold text-xs font-semibold tracking-wide mt-1">
          {loc.count}
        </p>
      </div>
    </a>
  );
}
