import { ScrollReveal } from './ScrollReveal';
import { ClipboardList, Stethoscope, Sparkles, Smile, User, Wand2, UserCheck, Zap, LayoutGrid, Baby, Bandage, ShieldPlus, ChevronRight } from 'lucide-react';

const services = [
    { icon: ClipboardList, title: "Dental Implants", desc: "Permanent solution for missing teeth with high-grade titanium implants." },
    { icon: Stethoscope, title: "Root Canal (RCT)", desc: "Expert nerve treatment to save damaged teeth and relieve pain instantly." },
    { icon: Sparkles, title: "Teeth Whitening", desc: "Professional bleaching for a brighter, sparkling smile in just one session." },
    { icon: Smile, title: "Braces & Aligners", desc: "Correct misalignment with traditional or invisible ceramic braces." },
    { icon: User, title: "Cosmetic Dentistry", desc: "Enhancing facial aesthetics through personalized dental adjustments." },
    { icon: Wand2, title: "Smile Makeover", desc: "Comprehensive transformation combining multiple aesthetic treatments." },
    { icon: UserCheck, title: "Oral Surgery", desc: "Safe wisdom tooth extractions and minor jaw surgeries." },
    { icon: Zap, title: "Laser Dentistry", desc: "Minimally invasive procedures for faster healing and less discomfort." },
    { icon: LayoutGrid, title: "Crowns & Bridges", desc: "Custom-made prosthetic devices to restore tooth function and form." },
    { icon: Baby, title: "Pediatric Care", desc: "Gentle dental treatments specifically designed for children's comfort." },
    { icon: Bandage, title: "Gum Treatment", desc: "Specialized care for gingivitis and advanced periodontal diseases." },
    { icon: ShieldPlus, title: "Teeth Cleaning", desc: "Professional scaling and polishing for optimal oral hygiene." }
];

export function Services() {
  return (
    <section className="bg-surface-container-low py-[120px]" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Expertise</span>
          <h2 className="text-3xl md:text-[32px] font-semibold text-on-surface mt-2">Comprehensive Dental Solutions</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((Service, idx) => (
            <ScrollReveal key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/30 hover:shadow-md transition-all group flex flex-col h-full">
              <Service.icon className="text-secondary mb-4 h-8 w-8" />
              <h3 className="font-bold text-lg mb-2 text-on-surface">{Service.title}</h3>
              <p className="text-sm text-on-surface-variant mb-6 flex-grow">{Service.desc}</p>
              <button suppressHydrationWarning className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More <ChevronRight className="h-4 w-4" />
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
