import { Printer, MapPin, Phone, Mail, Facebook, Twitter, Instagram, MessageCircle } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  { label: 'NYSC Registration', href: '#services' },
  { label: 'WAEC Registration', href: '#services' },
  { label: 'NECO Registration', href: '#services' },
  { label: 'Printing & Photocopying', href: '#services' },
  { label: 'AI Content Creation', href: '#services' },
  { label: 'Website Development', href: '#services' },
  { label: 'CAC Company Registration', href: '#services' },
  { label: 'Internet Browsing', href: '#services' },
  { label: 'Scanning & Lamination', href: '#services' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-400 via-secondary-500 to-secondary-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-secondary-500 flex items-center justify-center">
                <Printer className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">LEMU DIGITAL</div>
                <div className="text-[10px] uppercase tracking-widest text-secondary-400">Services & Registration</div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Your trusted digital services center in Maiduguri. From exam
              registrations and printing to AI content creation and website
              development — we handle it all with speed and professionalism.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Twitter, Instagram, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-secondary-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Social media link"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sans font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-secondary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans font-semibold text-white mb-4 text-sm uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-sm text-white/60 hover:text-secondary-400 transition-colors duration-200"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/60">Maiduguri, Borno State, Nigeria</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/60">+234 810 776 3299</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/60">lemudigital@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} LEMU Digital Services. All rights reserved.
          </p>
          <p className="text-sm text-white/50">
            Proudly serving Maiduguri, Borno State.
          </p>
        </div>
      </div>
    </footer>
  );
}
