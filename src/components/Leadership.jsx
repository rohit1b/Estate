import { Building2, Target, Quote } from "lucide-react";
import { founder } from "../data/content";

export default function Leadership() {
  return (
    <section className="bg-navy-900 py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div className="relative">
            <img
              src={founder.image}
              alt={founder.name}
              className="w-full h-[520px] object-cover rounded-2xl"
            />
            <div className="absolute bottom-6 left-6 bg-gold text-navy-900 rounded-xl px-6 py-5 max-w-[220px]">
              <div className="font-display text-3xl">
                {founder.badge.value}
              </div>
              <div className="text-xs font-semibold mt-1 leading-snug">
                {founder.badge.label}
              </div>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold text-gold">
              Leadership &amp; Vision
            </span>
            <h2 className="font-display font-medium text-4xl text-white mt-3 mb-1">
              {founder.name}
            </h2>
            <p className="text-white/50 text-sm mb-8">{founder.role}</p>

            <div className="flex gap-3 mb-8">
              <Quote size={28} className="text-gold shrink-0" />
              <p className="font-display italic text-xl text-white/90 leading-snug">
                {founder.quote}
              </p>
            </div>

            <div className="space-y-4 mb-10">
              {founder.bio.map((p, i) => (
                <p key={i} className="text-white/60 text-sm leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4 text-white font-semibold text-sm">
                  <Building2 size={16} className="text-gold" />
                  Areas of Work
                </div>
                <ul className="space-y-2">
                  {founder.areasOfWork.map((a) => (
                    <li
                      key={a}
                      className="text-white/55 text-sm flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4 text-white font-semibold text-sm">
                  <Target size={16} className="text-gold" />
                  Vision
                </div>
                <p className="text-white/55 text-sm leading-relaxed">
                  {founder.vision}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
