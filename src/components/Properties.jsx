import { ArrowUpRight, Check, MapPin } from "lucide-react";
import properties from "../data/properties";

export default function Properties() {
  return (
    <section id="properties" className="bg-ivory py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-semibold text-gold-dark">
            Our Portfolio
          </span>
          <h2 className="font-display font-medium text-4xl sm:text-5xl text-navy-900 mt-3">
            Exclusive real estate portfolio
          </h2>
          <p className="text-navy-900/60 text-lg mt-5 leading-relaxed">
            Handpicked luxury residences and premium investments across
            Noida and Gurugram.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-navy-900/8 hover:border-gold/40 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-navy-900/90 text-gold text-[11px] font-semibold tracking-wide uppercase rounded-full px-3 py-1.5">
                  {p.tag}
                </span>
              </div>

              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-display text-2xl text-navy-900">
                  {p.name}
                </h3>
                <div className="flex items-center gap-1.5 text-navy-900/50 text-sm mt-1.5 mb-4">
                  <MapPin size={14} />
                  {p.location}
                </div>

                <p className="text-sm font-semibold text-navy-900 mb-3">
                  {p.highlight}
                </p>

                <ul className="space-y-2 mb-7 flex-1">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-navy-900/65"
                    >
                      <Check
                        size={15}
                        className="text-gold-dark mt-0.5 shrink-0"
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact-us"
                  className="inline-flex items-center justify-center gap-2 bg-navy-900 group-hover:bg-gold group-hover:text-navy-900 text-white text-sm font-semibold rounded-full py-3.5 transition-colors"
                >
                  Know More
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <a
            href="#properties"
            className="inline-flex items-center gap-2 border border-navy-900/15 hover:border-gold hover:bg-navy-900 hover:text-white font-semibold rounded-full px-7 py-3.5 transition-colors"
          >
            View All Properties
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
