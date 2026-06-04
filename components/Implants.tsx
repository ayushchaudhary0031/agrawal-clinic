import { ScrollReveal } from './ScrollReveal';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export function Implants() {
  return (
    <section className="py-[120px] overflow-hidden" id="implants">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-on-primary grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative shadow-2xl">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
          
          <ScrollReveal>
            <span className="bg-secondary-container text-secondary px-4 py-1 rounded-full text-xs font-semibold mb-6 inline-block">Premium Specialization</span>
            <h2 className="text-4xl md:text-[48px] md:leading-[56px] font-bold mb-6">Agra&apos;s Leading Dental Implant Specialist</h2>
            <p className="text-lg mb-10 text-on-primary/80">Regain your confidence with permanent tooth replacements that look, feel, and function just like natural teeth. Dr. Agrawal specializes in complex implantology using advanced 3D planning.</p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <p className="text-4xl font-bold mb-1 text-secondary-fixed">98%</p>
                <p className="text-sm opacity-80">Success Rate</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-1 text-secondary-fixed">1500+</p>
                <p className="text-sm opacity-80">Implants Placed</p>
              </div>
            </div>
            
            <ul className="space-y-3 mb-10">
              <li className="flex items-center gap-3"><CheckCircle2 className="text-secondary-fixed h-5 w-5" /> Lifetime Durability</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-secondary-fixed h-5 w-5" /> Prevents Bone Loss</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-secondary-fixed h-5 w-5" /> Natural Aesthetics</li>
            </ul>
            
            <a href="#booking" className="inline-block bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-surface-variant transition-all">Free Implant Consultation</a>
          </ScrollReveal>

          <ScrollReveal className="relative">
            <div className="relative w-full h-[450px] shadow-xl rounded-2xl overflow-hidden">
                <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEslgWFKst8lfq_x35U3kBj1NmdE7RTvJtzpBYVrREtvHpf5JrbhMloY1f2HUPtYoCZcRQNKfSVgK44EQ_msWHTd29qKAjBE-ao6YfcW_hLjK0wArdYsRzTa-QclJkcOYlYF3ucpVZz5o0b_EsOVaBUqog3k4VDiQKI4_dTS7vHVfv30HNxvbdqBGdP-hi_o8mnF9v9yWe9ZYQjQY48ftGKcXTKnCgVTfg8M0rkC3d9ZEihAARn66vhUkkDz-mu6Vyp1nB24Hkfm78"
                alt="Dental Implant"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
                />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
