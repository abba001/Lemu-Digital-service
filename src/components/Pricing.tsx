import { useReveal } from '@/hooks/useReveal';

const pricingData = [
  {
    category: 'Registration Services',
    items: [
      { name: 'NYSC Registration', price: '₦3,000', note: 'Inclusive of service charge' },
      { name: 'WAEC Registration (May/June)', price: '₦18,000', note: 'Examination fee included' },
      { name: 'WAEC GCE Registration', price: '₦18,000', note: 'Examination fee included' },
      { name: 'NECO Registration (SSCE)', price: '₦15,000', note: 'Examination fee included' },
      { name: 'NECO GCE Registration', price: '₦16,000', note: 'Examination fee included' },
      { name: 'JAMB Registration', price: '₦6,500', note: 'Inclusive of service charge' },
    ],
  },
  {
    category: 'Printing & Copying',
    items: [
      { name: 'Black & White Printing', price: '₦50', note: 'per page' },
      { name: 'Color Printing', price: '₦150', note: 'per page' },
      { name: 'Photocopy (B&W)', price: '₦30', note: 'per page' },
      { name: 'Photocopy (Color)', price: '₦100', note: 'per page' },
      { name: 'Photo Printing (4×6)', price: '₦200', note: 'per copy' },
      { name: 'ID Card Printing', price: '₦500', note: 'per card' },
    ],
  },
  {
    category: 'Other Services',
    items: [
      { name: 'Scanning', price: '₦100', note: 'per page' },
      { name: 'Lamination (A4)', price: '₦200', note: 'per sheet' },
      { name: 'Spiral Binding', price: '₦500', note: 'per document' },
      { name: 'Internet Browsing', price: '₦200', note: 'per hour' },
      { name: 'Online Form Purchase', price: '₦500+', note: 'service charge' },
      { name: 'Document Typing', price: '₦300', note: 'per page' },
    ],
  },
  {
    category: 'AI & Web Services',
    items: [
      { name: 'AI Content Creation', price: '₦1,000+', note: 'per project' },
      { name: 'AI Training Session', price: '₦5,000', note: 'per session' },
      { name: 'Business Website', price: '₦50,000+', note: 'starting price' },
      { name: 'E-commerce Website', price: '₦100,000+', note: 'starting price' },
      { name: 'Web Dev Training', price: '₦20,000', note: 'per course' },
      { name: 'Social Media Graphics', price: '₦500+', note: 'per design' },
    ],
  },
];

export default function Pricing() {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <section id="pricing" className="py-24 bg-neutral-50 relative overflow-hidden">
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ${revealed ? 'revealed' : 'reveal'}`}
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 text-secondary-700 text-sm font-semibold mb-4">
            Our Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 leading-tight">
            Transparent & Affordable Rates
          </h2>
          <p className="mt-5 text-neutral-600 leading-relaxed text-lg">
            No hidden charges. Clear, competitive pricing on all our services.
            Prices may vary slightly for bulk or specialized jobs.
          </p>
        </div>

        {/* Pricing tables */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {pricingData.map((category, idx) => (
            <div
              key={category.category}
              className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-400"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="bg-gradient-to-r from-primary-600 to-primary-800 px-6 py-5">
                <h3 className="text-lg font-bold text-white">{category.category}</h3>
              </div>

              <div className="divide-y divide-neutral-100">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="px-6 py-4 flex items-center justify-between hover:bg-primary-50/50 transition-colors duration-200"
                  >
                    <div>
                      <div className="text-sm font-medium text-neutral-800">{item.name}</div>
                      <div className="text-xs text-neutral-400 mt-0.5">{item.note}</div>
                    </div>
                    <div className="text-base font-bold text-primary-700 font-sans flex-shrink-0 ml-4">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-500">
            Need something not listed here?{' '}
            <a href="#contact" className="text-primary-600 font-semibold hover:text-primary-700">
              Contact us
            </a>{' '}
            for a custom quote.
          </p>
        </div>
      </div>
    </section>
  );
}
