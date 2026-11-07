import { useReveal } from '@/hooks/useReveal';
import { MapPin, Phone, Mail, Clock, MessageSquare, MessageCircle, Navigation, ExternalLink } from 'lucide-react';

export default function Contact() {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      lines: ['LEMU Digital Services', 'Maiduguri, Borno State', 'Nigeria'],
    },
    {
      icon: Phone,
      title: 'Call or WhatsApp',
      lines: ['+234 810 776 3299', '0810 776 3299'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      lines: ['lemudigital@gmail.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      lines: ['Mon – Fri: 8:00 AM – 7:00 PM', 'Saturday: 9:00 AM – 6:00 PM', 'Sunday: Closed'],
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${revealed ? 'revealed' : 'reveal'}`}
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 leading-tight">
            We're Here to Help
          </h2>
          <p className="mt-5 text-neutral-600 leading-relaxed text-lg">
            Have a question about our services? Need help with a registration?
            Reach out — we respond quickly and are always happy to assist.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info cards */}
          <div className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 hover:border-primary-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-sans font-semibold text-primary-900 text-base mb-2">{info.title}</h3>
                  {info.lines.map((line) => (
                    <p key={line} className="text-sm text-neutral-600 leading-relaxed">{line}</p>
                  ))}
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/2348107763299"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 bg-green-600 hover:bg-green-700 rounded-2xl p-6 shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-base">Chat with us on WhatsApp</div>
                  <div className="text-sm text-white/85">08107763299</div>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-white/80 group-hover:text-white group-hover:scale-110 transition-all flex-shrink-0" />
            </a>

            {/* Location card */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Maiduguri+Borno+State+Nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block bg-gradient-to-br from-primary-700 to-primary-900 rounded-2xl p-6 border border-primary-200 overflow-hidden h-64 hover:shadow-xl transition-all duration-300"
            >
              {/* Decorative grid pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
              />

              {/* Pulsing location marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-secondary-400/30 animate-ping" />
                  <div className="relative w-16 h-16 rounded-full bg-secondary-500 flex items-center justify-center shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Content overlay */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-white/90 text-xs font-semibold uppercase tracking-wider mb-1">
                      <Navigation className="w-3.5 h-3.5" />
                      Find Us
                    </div>
                    <h4 className="text-white font-bold text-lg">Maiduguri, Borno State</h4>
                  </div>
                  <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white group-hover:scale-110 transition-all" />
                </div>

                <div className="text-white/80 text-sm">
                  Click to open in Google Maps and get directions to our office.
                </div>
              </div>
            </a>
          </div>

          {/* Contact form */}
          <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-2">
              <MessageSquare className="w-6 h-6 text-secondary-400" />
              <h3 className="text-2xl font-bold text-white">Send Us a Message</h3>
            </div>
            <p className="text-white/60 text-sm mb-6">
              Tell us what you need and we'll get back to you as soon as possible.
            </p>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                form.reset();
                const msg = document.getElementById('contact-success');
                if (msg) {
                  msg.classList.remove('hidden');
                  setTimeout(() => msg.classList.add('hidden'), 5000);
                }
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm placeholder:text-white/40 focus:ring-2 focus:ring-secondary-400 focus:border-secondary-400 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="080..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm placeholder:text-white/40 focus:ring-2 focus:ring-secondary-400 focus:border-secondary-400 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm placeholder:text-white/40 focus:ring-2 focus:ring-secondary-400 focus:border-secondary-400 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">Service Needed</label>
                <select
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm focus:ring-2 focus:ring-secondary-400 focus:border-secondary-400 outline-none transition-all [&>option]:text-neutral-800"
                >
                  <option value="">Select a service</option>
                  <option>NYSC Registration</option>
                  <option>WAEC Registration</option>
                  <option>NECO Registration</option>
                  <option>Printing</option>
                  <option>Photocopying</option>
                  <option>Scanning</option>
                  <option>Internet Browsing</option>
                  <option>AI Content Creation</option>
                  <option>Website Development</option>
                  <option>CAC Company Registration</option>
                  <option>AI / Web Training</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us more about what you need..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm placeholder:text-white/40 focus:ring-2 focus:ring-secondary-400 focus:border-secondary-400 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-xl shadow-lg shadow-secondary-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                Send Message
              </button>

              <div
                id="contact-success"
                className="hidden p-4 rounded-xl bg-green-500/20 border border-green-400/30 text-green-300 text-sm text-center"
              >
                Thank you! Your message has been sent. We'll get back to you shortly.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
