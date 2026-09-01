import { Award, Users2, ShieldCheck } from "lucide-react";
import { benefits } from "../data/content";

const icons = [Award, Users2, ShieldCheck];

export default function Benefits() {
  return (
    <section className="bg-ivory py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-semibold text-gold-dark">
            Our Benefits
          </span>
          <h2 className="font-display font-medium text-4xl sm:text-5xl text-navy-900 mt-3">
            Why choose Rohitrise Realty
          </h2>
          <p className="text-navy-900/60 text-lg mt-5 leading-relaxed">
            With 7+ years of expertise and deep knowledge of real estate
            markets across Delhi, Noida, Gurugram, and Yamuna Expressway, we
            deliver trusted property solutions tailored to your needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-7">
          {benefits.map((b, i) => {
            const Icon = icons[i];
            return (
              <div
                key={b.id}
                className="bg-white rounded-2xl border border-navy-900/8 p-8 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-navy-900 grid place-items-center mb-6">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="font-display text-xl text-navy-900 mb-3">
                  {b.title}
                </h3>
                <p className="text-navy-900/60 text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
