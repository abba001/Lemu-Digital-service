import { useEffect, useState } from 'react';
import { Menu, X, Printer } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
              scrolled ? 'bg-primary-600' : 'bg-white/20 backdrop-blur-md'
            }`}
          >
            <Printer className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className={`font-display font-bold text-lg transition-colors duration-300 ${
                scrolled ? 'text-primary-800' : 'text-white'
              }`}
            >
              LEMU DIGITAL
            </span>
            <span
              className={`text-[10px] uppercase tracking-widest font-sans font-medium transition-colors duration-300 ${
                scrolled ? 'text-secondary-600' : 'text-white/80'
              }`}
            >
              Services & Registration
            </span>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-primary-50 ${
                  scrolled
                    ? 'text-neutral-700 hover:text-primary-700'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 ${
              scrolled
                ? 'bg-secondary-500 text-white hover:bg-secondary-600'
                : 'bg-white text-primary-700 hover:bg-white/90'
            }`}
          >
            Visit Us
          </a>
        </div>

        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-primary-800' : 'text-white'
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="bg-white mx-4 mt-2 rounded-2xl shadow-xl p-4">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm font-medium text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center px-5 py-3 rounded-xl text-sm font-semibold bg-secondary-500 text-white hover:bg-secondary-600 transition-colors"
              >
                Visit Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
