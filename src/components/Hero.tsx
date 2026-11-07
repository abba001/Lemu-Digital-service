import { ChevronDown, Printer, FileCheck, Users, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/17235421/pexels-photo-17235421.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Modern printer in office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/95 via-primary-900/90 to-primary-800/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 via-transparent to-transparent" />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl animate-pulse-slow" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-wide">
              Your Trusted Digital Services Center in Maiduguri
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight text-balance animate-fade-in-up">
            Fast, Reliable Digital Services
            <span className="block text-secondary-400 mt-2">
              & Exam Registration
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            From printing and photocopying to WAEC, NECO, NYSC registration, AI
            content creation, and website development — LEMU Digital Services
            handles it all with speed, accuracy, and professionalism in the
            heart of Maiduguri.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#services"
              className="px-7 py-3.5 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-xl shadow-lg shadow-secondary-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              View Our Services
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
            {[
              { icon: Printer, value: '500+', label: 'Documents Daily' },
              { icon: FileCheck, value: '5+', label: 'Registration Services' },
              { icon: Clock, value: 'Fast', label: 'Quick Turnaround' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-7 h-7 text-secondary-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white font-sans">{stat.value}</div>
                <div className="text-xs text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-primary-950/60 backdrop-blur-md border-t border-white/10 py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4 text-sm text-white/70 font-medium">
              <span>NYSC Registration</span>
              <span className="text-secondary-400">●</span>
              <span>WAEC Registration</span>
              <span className="text-secondary-400">●</span>
              <span>NECO Registration</span>
              <span className="text-secondary-400">●</span>
              <span>Printing & Photocopying</span>
              <span className="text-secondary-400">●</span>
              <span>AI Content Creation</span>
              <span className="text-secondary-400">●</span>
              <span>Website Development</span>
              <span className="text-secondary-400">●</span>
              <span>Internet Browsing</span>
              <span className="text-secondary-400">●</span>
              <span>CAC Company Registration</span>
              <span className="text-secondary-400">●</span>
              <span>Document Lamination</span>
              <span className="text-secondary-400">●</span>
              <span>NYSC Registration</span>
              <span className="text-secondary-400">●</span>
              <span>WAEC Registration</span>
              <span className="text-secondary-400">●</span>
              <span>NECO Registration</span>
              <span className="text-secondary-400">●</span>
              <span>Printing & Photocopying</span>
              <span className="text-secondary-400">●</span>
              <span>AI Content Creation</span>
              <span className="text-secondary-400">●</span>
              <span>Website Development</span>
              <span className="text-secondary-400">●</span>
              <span>Internet Browsing</span>
              <span className="text-secondary-400">●</span>
              <span>CAC Company Registration</span>
              <span className="text-secondary-400">●</span>
              <span>Document Lamination</span>
              <span className="text-secondary-400">●</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white transition-colors hidden lg:block"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-7 h-7 animate-bounce" />
      </a>
    </section>
  );
}
