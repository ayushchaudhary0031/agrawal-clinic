import { ScrollReveal } from './ScrollReveal';
import Image from 'next/image';
import whiteningImg from '@/src/assets/images/gallery_1_new.jpg';
import implantImg from '@/src/assets/images/gallery_2_new.jpg';

export function Gallery() {
  return (
    <section className="py-[120px]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-[32px] md:text-3xl font-semibold">Smile Transformations</h2>
          <p className="text-on-surface-variant mt-4">Real results from our dental experts</p>
        </ScrollReveal>
        
        <div className="flex justify-center gap-4 mb-12">
          <button suppressHydrationWarning className="px-6 py-2 rounded-full bg-primary text-on-primary font-bold shadow-sm">Implants</button>
          <button suppressHydrationWarning className="px-6 py-2 rounded-full border border-outline-variant hover:bg-surface-variant transition-all font-medium">Whitening</button>
          <button suppressHydrationWarning className="px-6 py-2 rounded-full border border-outline-variant hover:bg-surface-variant transition-all font-medium">Braces</button>
        </div>
        
        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group cursor-pointer overflow-hidden rounded-3xl h-80 w-full">
            <Image 
              src={whiteningImg}
              alt="Teeth whitening before and after"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-primary">Case Study #012</div>
          </div>
          
          <div className="relative group cursor-pointer overflow-hidden rounded-3xl h-80 w-full">
            <Image 
              src={implantImg}
              alt="Implant before and after"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-primary">Case Study #045</div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
