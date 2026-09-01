import { useEffect, useState } from "react";
import { Phone, Sun, Menu, X } from "lucide-react";

const links = ["Home", "About Us", "Properties", "Contact Us"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center w-9 h-9 rounded-full bg-gold/15 border border-gold/40 group-hover:bg-gold/25 transition-colors">
            <Sun size={18} className="text-gold" />
          </span>
          <span className="font-display text-xl tracking-tight text-white">
            Rohit<span className="text-gold">rise</span>
            <span className="block -mt-1 text-[10px] tracking-[0.3em] text-white/50 font-body font-medium">
              REALTY
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
              className="text-sm font-medium text-white/80 hover:text-gold transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="tel:+918954188201"
          className="hidden lg:flex items-center gap-2 rounded-full border border-white/20 hover:border-gold/60 px-4 py-2.5 text-sm font-semibold text-white transition-colors"
        >
          <Phone size={15} className="text-gold" />
          +91 8954188201
        </a>

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-navy-900 border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
              className="text-white/85 text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="tel:+918954188201"
            className="flex items-center gap-2 text-gold text-sm font-semibold"
          >
            <Phone size={15} /> +91 8954188201
          </a>
        </div>
      )}
    </header>
  );
}
