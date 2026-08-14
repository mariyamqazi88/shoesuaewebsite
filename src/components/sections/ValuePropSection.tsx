import React from 'react';
import { Leaf, ShieldCheck, Truck, Recycle } from 'lucide-react';

export const ValuePropSection: React.FC = () => {
  const benefits = [
    {
      icon: Leaf,
      title: 'Sustainable Materials',
      description: 'Ethically sourced Tuscan leathers and recycled organic cotton linings crafted to reduce environmental impact.',
    },
    {
      icon: ShieldCheck,
      title: 'Warranty Included',
      description: 'Every pair comes with our comprehensive 2-year craftsmanship and structural integrity guarantee.',
    },
    {
      icon: Truck,
      title: 'Delivery & Shipping',
      description: 'Complimentary 24-hour express courier dispatch across all 7 Emirates in the UAE.',
    },
    {
      icon: Recycle,
      title: 'Eco-Friendly Fabrics',
      description: 'Zero-waste production techniques utilizing plant-tanned suede and biodegradable rubber soles.',
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-zinc-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-5 rounded-2xl bg-brand-card/70 border border-zinc-100 hover:border-brand-accent/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white text-brand-dark flex items-center justify-center mb-4 shadow-sm group-hover:bg-brand-dark group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h3 className="text-sm font-bold text-brand-dark mb-1.5 font-sans">
                  {item.title}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
