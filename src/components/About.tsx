import { useReveal } from '@/hooks/useReveal';
import { Target, Eye, Heart, Zap, ShieldCheck, Clock } from 'lucide-react';

export default function About() {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-secondary-100/40 rounded-full blur-3xl" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ${revealed ? 'revealed' : 'reveal'}`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/8297818/pexels-photo-8297818.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Printing documents"
                  className="rounded-2xl shadow-xl w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
                <img
                  src="https://images.pexels.com/photos/3791246/pexels-photo-3791246.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Photocopying"
                  className="rounded-2xl shadow-xl w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.pexels.com/photos/5058917/pexels-photo-5058917.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Working at computer"
                  className="rounded-2xl shadow-xl w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                />
                <img
                  src="https://images.pexels.com/photos/6149781/pexels-photo-6149781.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Smiling professional"
                  className="rounded-2xl shadow-xl w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-5 flex items-center gap-4 animate-float">
              <div className="w-12 h-12 rounded-xl bg-secondary-500 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-800 font-sans">5+</div>
                <div className="text-xs text-neutral-500">Years Serving Maiduguri</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 leading-tight">
              Your One-Stop Digital Services Center in Maiduguri
            </h2>
            <p className="mt-6 text-neutral-600 leading-relaxed text-lg">
              LEMU Digital Services has been serving the people of Maiduguri with
              reliable, affordable, and professional digital services. From exam
              registrations and printing to AI content creation and website
              development, we make digital tasks simple and hassle-free.
            </p>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Our experienced staff understands the requirements of WAEC, NECO,
              NYSC, and other registrations, ensuring every application is done
              right the first time. We also create AI-powered content and build
              professional websites — and we teach you how to do it too. We
              combine modern technology with friendly service to give you the
              best experience possible.
            </p>

            {/* Values */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                { icon: Target, title: 'Our Mission', text: 'To provide fast, accurate, and affordable digital services to everyone in Maiduguri.' },
                { icon: Eye, title: 'Our Vision', text: 'To be the most trusted and reliable digital services center in Borno State.' },
                { icon: Heart, title: 'Our Promise', text: 'Quality service, fair prices, and a friendly smile on every visit — guaranteed.' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-neutral-50 rounded-xl p-5 border border-neutral-200 hover:shadow-md hover:border-primary-200 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="font-sans font-semibold text-primary-800 text-sm">{item.title}</h3>
                  <p className="mt-1.5 text-xs text-neutral-500 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent-600" />
                <span className="text-sm font-medium text-neutral-700">Trusted & Reliable</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent-600" />
                <span className="text-sm font-medium text-neutral-700">Fast Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent-600" />
                <span className="text-sm font-medium text-neutral-700">Modern Equipment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
