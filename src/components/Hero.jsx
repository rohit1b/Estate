import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end pb-24 pt-40 overflow-hidden bg-navy-900"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
          alt="Delhi NCR skyline"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-navy-900/30" />
        <div className="absolute inset-0 bg-sunrise" />
      </div>

      {/* Vertical inquire tab */}
      <a
        href="#contact-us"
        className="hidden md:flex items-center gap-2 fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-gold text-navy-900 font-semibold text-sm px-3 py-4 [writing-mode:vertical-rl] rounded-l-lg hover:pr-4 transition-all"
      >
        Inquire Now
      </a>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="max-w-3xl">
          <span className="inline-block text-xs tracking-[0.25em] font-semibold text-gold border border-gold/40 rounded-full px-4 py-2 mb-8">
            Rohitrise REALTY · DELHI NCR
          </span>

          <h1 className="font-display font-medium text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-white mb-7">
            Find your
            <br />
            perfect property.
          </h1>

          <p className="text-white/70 text-lg leading-relaxed max-w-xl mb-10">
            Your trusted real estate consultancy in Delhi NCR. We help you
            find the perfect property across Delhi, Noida and Gurugram —
            let's make your property dreams come true.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#properties"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy-900 font-semibold rounded-full px-7 py-4 transition-colors"
            >
              Explore Properties
              <ArrowUpRight size={18} />
            </a>
            <a
              href="#contact-us"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-gold text-white font-semibold rounded-full px-7 py-4 transition-colors"
            >
              <MessageCircle size={16} />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
