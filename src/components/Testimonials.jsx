import { useState } from "react";
import { Quote } from "lucide-react";
import { testimonials } from "../data/content";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-navy-900 py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-sm font-semibold text-gold">
            Our Testimonials
          </span>
          <h2 className="font-display font-medium text-4xl sm:text-5xl text-white mt-3">
            What our clients say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              onMouseEnter={() => setActive(i)}
              className={`rounded-2xl p-8 border transition-colors duration-300 ${
                active === i
                  ? "bg-white/[0.06] border-gold/40"
                  : "bg-white/[0.02] border-white/10"
              }`}
            >
              <Quote size={22} className="text-gold mb-5" />
              <p className="text-white/70 text-sm leading-relaxed italic mb-7">
                "{t.quote}"
              </p>
              <div className="border-t border-white/10 pt-4">
                <div className="text-white font-semibold text-sm">
                  {t.name}
                </div>
                <div className="text-white/45 text-xs tracking-wide mt-0.5">
                  {t.role.toUpperCase()}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                active === i ? "w-8 bg-gold" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
