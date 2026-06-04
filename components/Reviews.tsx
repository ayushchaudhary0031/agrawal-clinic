import { ScrollReveal } from './ScrollReveal';
import { Star } from 'lucide-react';

export function Reviews() {
  return (
    <section className="py-[120px] bg-surface-container-high overflow-hidden" id="reviews">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-[32px] md:text-3xl font-semibold">What Our Patients Say</h2>
        </ScrollReveal>
        
        <div className="flex flex-nowrap md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
          <ScrollReveal className="min-w-[300px] w-full bg-white p-8 rounded-2xl shadow-sm snap-center">
            <div className="flex text-yellow-500 mb-4">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
            <p className="text-lg text-on-surface mb-6 italic">&quot;Dr. Agrawal is very friendly and skilled. I was terrified of dental work, but they made it so easy. Great place for dental implants!&quot;</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">R</div>
              <div>
                <p className="font-bold text-sm">Rahul Sharma</p>
                <span className="bg-secondary/10 text-secondary text-[10px] px-2 py-0.5 rounded-full font-bold">Verified Patient</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="min-w-[300px] w-full bg-white p-8 rounded-2xl shadow-sm snap-center">
            <div className="flex text-yellow-500 mb-4">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
            <p className="text-lg text-on-surface mb-6 italic">&quot;Excellent work. The root canal was completely painless. The clinic is spotless and the staff is very professional.&quot;</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">P</div>
              <div>
                <p className="font-bold text-sm">Priya Singh</p>
                <span className="bg-secondary/10 text-secondary text-[10px] px-2 py-0.5 rounded-full font-bold">Verified Patient</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="min-w-[300px] w-full bg-white p-8 rounded-2xl shadow-sm snap-center">
            <div className="flex text-yellow-500 mb-4">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
            <p className="text-lg text-on-surface mb-6 italic">&quot;Best dental clinic in Agra. They explained everything clearly and the pricing was very fair. Highly recommended for kids too.&quot;</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">M</div>
              <div>
                <p className="font-bold text-sm">Mohit Verma</p>
                <span className="bg-secondary/10 text-secondary text-[10px] px-2 py-0.5 rounded-full font-bold">Verified Patient</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
