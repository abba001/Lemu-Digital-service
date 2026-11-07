import { useReveal } from '@/hooks/useReveal';
import {
  Zap,
  ShieldCheck,
  Users,
  Smile,
  Award,
  Headset,
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast Service',
    text: 'We understand your time is valuable. Most jobs are completed within minutes, not hours.',
  },
  {
    icon: ShieldCheck,
    title: 'Accurate & Reliable',
    text: 'Our experienced staff ensures every registration and document is done right the first time.',
  },
  {
    icon: Users,
    title: 'Friendly, Helpful Staff',
    text: "We guide you through every process — no confusing forms or technical jargon to worry about.",
  },
  {
    icon: Award,
    title: 'Years of Experience',
    text: 'Over 5 years serving Maiduguri with a proven track record of customer satisfaction.',
  },
  {
    icon: Smile,
    title: 'Affordable Prices',
    text: 'Competitive rates that give you the best value without compromising on quality.',
  },
  {
    icon: Headset,
    title: 'Always Available',
    text: 'Open six days a week with flexible hours to fit your schedule. Walk-ins welcome.',
  },
];

export default function WhyChooseUs() {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <section
      id="why-us"
      className="py-24 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 relative overflow-hidden"
    >
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ${revealed ? 'revealed' : 'reveal'}`}
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-secondary-400 text-sm font-semibold mb-4 border border-white/10">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            The LEMU Digital Difference
          </h2>
          <p className="mt-5 text-white/70 leading-relaxed text-lg">
            We go beyond just getting the job done — we make sure you leave
            satisfied, every single time.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="group bg-white/5 backdrop-blur-md rounded-2xl p-7 border border-white/10 hover:bg-white/10 hover:border-secondary-400/30 transition-all duration-400 hover:-translate-y-1"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-white/65 leading-relaxed">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-xl shadow-lg shadow-secondary-500/20 transition-all duration-300 hover:scale-105"
          >
            Come Visit Us Today
          </a>
        </div>
      </div>
    </section>
  );
}
