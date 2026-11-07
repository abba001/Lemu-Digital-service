import { useReveal } from '@/hooks/useReveal';
import {
  Printer,
  Copy,
  GraduationCap,
  FileText,
  Wifi,
  Scan,
  CreditCard,
  Sparkles,
  Code,
  Building2,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: GraduationCap,
    name: 'NYSC Registration',
    description:
      'Complete NYSC online registration, mobilization, and relocation services with expert guidance.',
    features: ['Online registration', 'Mobilization support', 'Relocation assistance', 'Correction of data'],
    badge: 'Popular',
  },
  {
    icon: FileText,
    name: 'WAEC Registration',
    description:
      'Register for WAEC examinations — May/June and GCE — quickly and accurately with our experienced staff.',
    features: ['May/June registration', 'GCE registration', 'Result checking', 'Certificate printing'],
    badge: 'Popular',
  },
  {
    icon: FileText,
    name: 'NECO Registration',
    description:
      'NECO SSCE internal and external registration, result checking, and all related services.',
    features: ['SSCE registration', 'BECE registration', 'Result checking', 'Data correction'],
    badge: null,
  },
  {
    icon: Printer,
    name: 'Printing Services',
    description:
      'High-quality black & white and color printing for documents, photos, ID cards, and more.',
    features: ['B&W printing', 'Color printing', 'Photo printing', 'ID card printing'],
    badge: null,
  },
  {
    icon: Copy,
    name: 'Photocopying',
    description:
      'Fast, clear, and affordable photocopying services for all document types and sizes.',
    features: ['Bulk copying', 'Double-sided', 'Enlargement', 'Reduced size'],
    badge: null,
  },
  {
    icon: Scan,
    name: 'Scanning & Document Services',
    description:
      'Document scanning to email or USB, lamination, binding, and spiral binding services.',
    features: ['Scan to email', 'Scan to USB', 'Lamination', 'Spiral binding'],
    badge: null,
  },
  {
    icon: Wifi,
    name: 'Internet Browsing',
    description:
      'High-speed internet access for research, online forms, applications, and general browsing.',
    features: ['Fast browsing', 'Online applications', 'Research', 'Email services'],
    badge: null,
  },
  {
    icon: CreditCard,
    name: 'Online Payments & Forms',
    description:
      'Assistance with online payments, form purchases, job applications, and e-government services.',
    features: ['Online payments', 'Job applications', 'E-government forms', 'Visa applications'],
    badge: null,
  },
  {
    icon: Sparkles,
    name: 'AI Content Creation',
    description:
      'Professional AI-powered content creation — blog posts, social media graphics, business copy, and more. We also teach you how to use AI tools effectively.',
    features: ['AI-generated content', 'Social media graphics', 'Business copywriting', 'AI training & tutorials'],
    badge: 'New',
  },
  {
    icon: Code,
    name: 'Website Development',
    description:
      'Custom website design and development for businesses, schools, and organizations. We also offer hands-on training to help you build your own sites.',
    features: ['Business websites', 'School portals', 'E-commerce setup', 'Web dev training'],
    badge: 'New',
  },
  {
    icon: Building2,
    name: 'CAC Company Registration',
    description:
      'Register your business or company with the Corporate Affairs Commission, from name search to certificate collection, handled end to end.',
    features: ['Business name search', 'Limited liability company', 'Business name registration', 'Certificate collection'],
    badge: 'New',
  },
];

export default function Services() {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="py-24 bg-neutral-50 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-100/50 rounded-full blur-3xl" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ${revealed ? 'revealed' : 'reveal'}`}
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 leading-tight">
            All Your Digital Needs Under One Roof
          </h2>
          <p className="mt-5 text-neutral-600 leading-relaxed text-lg">
            Whether you need exam registration, printing, photocopying, or online
            services — we deliver fast, reliable, and affordable solutions.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={service.name}
              className="group bg-white rounded-2xl border-2 border-neutral-200 p-6 hover:shadow-2xl hover:border-primary-300 transition-all duration-400 hover:-translate-y-2 relative"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              {service.badge && (
                <span className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-secondary-500 text-white text-[10px] font-bold uppercase tracking-wider">
                  {service.badge}
                </span>
              )}

              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-lg font-bold text-primary-900 mb-2">{service.name}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                {service.description}
              </p>

              <ul className="space-y-1.5 mb-4">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-xs text-neutral-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-500 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 hover:gap-3 transition-all duration-200"
              >
                Inquire
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
