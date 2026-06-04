'use client';
import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ChevronDown } from 'lucide-react';

const faqs = [
    { q: "Are dental implants painful?", a: "The procedure is typically performed under local anesthesia, making it virtually painless. Post-operative discomfort is minimal and easily managed with prescribed medication." },
    { q: "How long does a root canal take?", a: "Most root canal treatments can be completed in just one or two sittings of 45-60 minutes each, thanks to our advanced rotary endodontics technology." },
    { q: "What is the best age for dental braces?", a: "While orthodontic treatment can start as early as age 7, we offer effective solutions for both teenagers and adults, including invisible aligners." },
    { q: "How often should I get professional teeth cleaning?", a: "We recommend a professional cleaning and check-up every 6 months to maintain optimal oral health and prevent future complications." },
    { q: "Do you offer emergency dental services?", a: "Yes, we prioritize emergency cases such as severe toothaches or accidental dental injuries. Please call us immediately for priority slots." }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-[120px]" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-[32px] md:text-3xl font-semibold">Frequently Asked Questions</h2>
        </ScrollReveal>
        
        <div className="space-y-4">
          {faqs.map((f, i) => (
             <ScrollReveal key={i} className="border border-outline-variant/50 rounded-2xl overflow-hidden bg-white">
               <button suppressHydrationWarning onClick={() => toggleFaq(i)} className="w-full p-6 text-left flex justify-between items-center hover:bg-surface-variant/20 transition-all focus:outline-none">
                 <span className="font-bold text-on-surface">{f.q}</span>
                 <ChevronDown className={`h-5 w-5 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
               </button>
               <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-40' : 'max-h-0'}`}>
                 <div className="p-6 pt-0 text-on-surface-variant text-sm border-t border-outline-variant/20">
                   {f.a}
                 </div>
               </div>
             </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
