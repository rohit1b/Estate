import { Sun } from "lucide-react";

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={15} height={15} {...props}>
      <path d="M13.5 21v-7.8h2.6l.4-3h-3v-1.9c0-.87.24-1.46 1.5-1.46H16.6V4.14C16.35 4.1 15.5 4 14.5 4c-2.1 0-3.5 1.28-3.5 3.63V10.2H8.4v3h2.6V21h2.5z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={15} height={15} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contact-us" className="bg-navy-950 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between flex-wrap gap-6 mb-12">
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-gold/15 border border-gold/40">
              <Sun size={18} className="text-gold" />
            </span>
            <span className="font-display text-xl tracking-tight text-white">
              Rohit<span className="text-gold">rise</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/50 text-sm">Follow Us:</span>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold hover:text-navy-900 grid place-items-center text-white transition-colors"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold hover:text-navy-900 grid place-items-center text-white transition-colors"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-10 border-t border-white/10 pt-12 pb-12">
          <div>
            <h4 className="text-white font-semibold mb-4">
              About Rohit Rise Realty
            </h4>
            <p className="text-white/50 text-sm leading-relaxed">
              Rohit Rise Realty is a well-established and trusted real estate
              consultancy based in Delhi NCR, offering comprehensive property
              solutions across Delhi, Noida, Gurugram and Yamuna Expressway.
              With 7+ years of experience, we specialize in residential,
              commercial, industrial and investment properties.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2.5 text-white/50 text-sm">
              <li>
                <a href="#properties" className="hover:text-gold transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about-us" className="hover:text-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact-us" className="hover:text-gold transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Our Company</h4>
            <ul className="space-y-2.5 text-white/50 text-sm">
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Terms of Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-white/35 text-xs border-t border-white/10 pt-8">
          © 2026 Rohit Rise Realty. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
