import { ScrollReveal } from './ScrollReveal';
import { Settings, Banknote, SmilePlus, Droplets, Stethoscope, AlertCircle } from 'lucide-react';

export function About() {
  return (
    <section className="py-[120px] px-6 max-w-7xl mx-auto" id="about">
      <ScrollReveal className="text-center mb-16">
        <h2 className="text-3xl md:text-[32px] font-semibold text-on-surface mb-4">Why Choose Dr. Agrawal&apos;s Dental Health Clinic?</h2>
        <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ScrollReveal className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all border-b-4 border-transparent hover:border-secondary group">
          <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Settings className="text-secondary h-8 w-8" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Modern Tech</h3>
          <p className="text-on-surface-variant">Equipped with the latest dental technologies including digital X-rays and pain-free treatment modules.</p>
        </ScrollReveal>

        <ScrollReveal className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all border-b-4 border-transparent hover:border-secondary group">
          <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Banknote className="text-secondary h-8 w-8" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Affordable</h3>
          <p className="text-on-surface-variant">Premium healthcare made accessible with transparent pricing and multiple payment options for everyone.</p>
        </ScrollReveal>

        <ScrollReveal className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all border-b-4 border-transparent hover:border-secondary group">
          <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <SmilePlus className="text-secondary h-8 w-8" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Patient Satisfaction</h3>
          <p className="text-on-surface-variant">We prioritize your comfort above all else, ensuring a relaxed environment for anxiety-free dental visits.</p>
        </ScrollReveal>

        <ScrollReveal className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all border-b-4 border-transparent hover:border-secondary group">
          <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Droplets className="text-secondary h-8 w-8" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Strict Sterilization</h3>
          <p className="text-on-surface-variant">Gold-standard hygiene protocols following international medical safety guidelines for every procedure.</p>
        </ScrollReveal>

        <ScrollReveal className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all border-b-4 border-transparent hover:border-secondary group">
          <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Stethoscope className="text-secondary h-8 w-8" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Complete Care</h3>
          <p className="text-on-surface-variant">From simple checkups to complex surgeries, we provide end-to-end oral health solutions under one roof.</p>
        </ScrollReveal>

        <ScrollReveal className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all border-b-4 border-transparent hover:border-secondary group">
          <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <AlertCircle className="text-secondary h-8 w-8" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Emergency Ready</h3>
          <p className="text-on-surface-variant">Quick response and priority slots for urgent dental pain or injuries when you need us most.</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
