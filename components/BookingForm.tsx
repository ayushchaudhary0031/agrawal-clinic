'use client';
import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Headset, Lock, CheckCircle2 } from 'lucide-react';

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-[120px] bg-surface-container-low" id="booking">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="bg-white rounded-[32px] shadow-2xl flex flex-col lg:flex-row overflow-hidden">
          
          <div className="lg:w-2/5 bg-primary p-12 text-on-primary">
            <h2 className="text-[32px] md:text-3xl font-semibold mb-6">Book Your Visit</h2>
            <p className="opacity-80 mb-12">Take the first step towards a perfect smile. Fill out the form and our coordinator will call you back within 2 hours.</p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <Headset className="text-secondary-fixed h-6 w-6 mt-1" />
                <div>
                  <p className="font-bold">Priority Support</p>
                  <p className="text-sm opacity-70">Dedicated patient coordinator for all your queries.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Lock className="text-secondary-fixed h-6 w-6 mt-1" />
                <div>
                  <p className="font-bold">Confidential Care</p>
                  <p className="text-sm opacity-70">Your health data is protected and private.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5 p-8 md:p-12">
            {!submitted ? (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">Full Name</label>
                    <input suppressHydrationWarning className="w-full px-4 py-3 rounded-xl border border-outline hover:border-primary focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" required type="text" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">Mobile Number</label>
                    <input suppressHydrationWarning className="w-full px-4 py-3 rounded-xl border border-outline hover:border-primary focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" required type="tel" placeholder="+1 234 567 8900" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-on-surface mb-2">Email Address</label>
                  <input suppressHydrationWarning className="w-full px-4 py-3 rounded-xl border border-outline hover:border-primary focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" required type="email" placeholder="john@example.com" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">Required Treatment</label>
                    <select suppressHydrationWarning className="w-full px-4 py-3 rounded-xl border border-outline hover:border-primary focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none">
                      <option>Dental Implants</option>
                      <option>Root Canal Treatment</option>
                      <option>Braces & Aligners</option>
                      <option>Teeth Whitening</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">Preferred Date</label>
                    <input suppressHydrationWarning className="w-full px-4 py-3 rounded-xl border border-outline hover:border-primary focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" required type="date" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-on-surface mb-2">Your Message (Optional)</label>
                  <textarea suppressHydrationWarning className="w-full px-4 py-3 rounded-xl border border-outline hover:border-primary focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="Anything else we should know?" rows={3}></textarea>
                </div>
                
                <button suppressHydrationWarning className="w-full bg-secondary text-on-secondary py-4 rounded-xl font-bold text-lg hover:bg-on-secondary-container transition-all shadow-lg active:scale-95" type="submit">
                  Request Appointment
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-on-surface mb-2">Request Submitted!</h3>
                <p className="text-on-surface-variant">Your appointment request has been successfully submitted. We will contact you shortly.</p>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
