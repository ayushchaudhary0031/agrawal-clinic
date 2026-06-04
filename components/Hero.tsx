import { Phone, ArrowRight, Award, Microscope, Star, StarHalf } from 'lucide-react';
import Image from 'next/image';
import heroImg from '@/src/assets/images/hero_image_new.avif';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-32" style={{ backgroundColor: '#f7f9ff', backgroundImage: 'radial-gradient(at 0% 0%, rgba(103, 252, 198, 0.1) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(0, 86, 179, 0.05) 0px, transparent 50%)' }}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <div className="inline-flex items-center gap-2 bg-secondary-container/30 text-secondary font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
            <Award className="h-4 w-4" />
            Agra&apos;s Trusted Dental Experts
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[48px] lg:leading-[56px] font-bold text-on-surface mb-6 tracking-tight">
            Advanced Dental Care For A <span className="text-primary">Healthy & Beautiful</span> Smile
          </h1>
          <p className="text-lg text-on-surface-variant mb-10 max-w-xl">
            Expert Dental Implants, Root Canal Treatment, Braces, Cosmetic Dentistry & Complete Oral Care in Agra. Precision-driven healthcare for your family.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#booking" className="bg-primary text-on-primary px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:bg-primary-container transition-all flex items-center gap-3 group">
              Book Appointment
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:+917906480031" className="border-2 border-primary text-primary px-8 py-4 rounded-full font-medium text-lg hover:bg-primary/5 transition-all flex items-center gap-3">
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </div>
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-on-surface">Experienced Dentist</p>
                <p className="text-sm text-on-surface-variant">20+ Years Practice</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
                <Microscope className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-on-surface">Modern Equipment</p>
                <p className="text-sm text-on-surface-variant">Digital Diagnostics</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute -inset-4 bg-primary/5 rounded-3xl -rotate-2"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white h-[600px] w-full">
            <Image 
              src={heroImg}
              alt="Professional dentist in clinic"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
            <div className="flex flex-col">
              <div className="flex text-yellow-500 mb-1">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <StarHalf className="h-5 w-5 fill-current" />
              </div>
              <span className="font-bold text-on-surface">4.8/5 Rating</span>
              <span className="text-sm text-on-surface-variant">500+ Happy Patients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
