import { ArrowUpRight } from "lucide-react";
import { services, stats } from "../data/content";

export default function Services() {
  return (
    <section id="about-us" className="bg-navy-900 py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[0.85fr_1.15fr] gap-16">
        <div>
          <span className="text-sm font-semibold text-gold">Our Services</span>
          <h2 className="font-display font-medium text-4xl sm:text-5xl text-white mt-3 mb-6">
            What we do
          </h2>
          <p className="text-white/60 leading-relaxed mb-10">
            We transform traditional property transactions into simplified,
            trustworthy experiences — guiding you through every step of your
            real estate journey across Delhi NCR's prime locations.
          </p>

          <div className="flex gap-10 border-t border-white/10 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl text-gold">
                  {s.value}
                </div>
                <div className="text-xs tracking-wide text-white/50 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div
              key={s.id}
              className={`bg-white/[0.04] border border-white/10 hover:border-gold/40 rounded-2xl p-7 transition-colors ${
                i === 2 ? "sm:col-start-1" : ""
              }`}
            >
              <img
                src={s.image}
                alt={s.title}
                className="w-11 h-11 rounded-lg object-cover mb-5"
              />
              <h3 className="font-display text-xl text-white mb-2.5">
                {s.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed mb-5">
                {s.description}
              </p>
              <a
                href="#properties"
                className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold"
              >
                Learn More <ArrowUpRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
