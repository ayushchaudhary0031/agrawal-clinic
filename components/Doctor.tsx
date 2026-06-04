import { ScrollReveal } from './ScrollReveal';
import Image from 'next/image';
import { GraduationCap, Users, ScrollText } from 'lucide-react';
import doctorImg from '@/src/assets/images/doctor_image_new.avif';

export function Doctor() {
  return (
    <section className="py-[120px] bg-surface" id="doctor">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal className="order-2 lg:order-1">
            <h2 className="text-[32px] md:text-3xl font-semibold mb-6">Meet Dr. Agrawal</h2>
            <h3 className="text-2xl text-primary font-bold mb-4">BDS, MDS - Dental Implant Specialist</h3>
            <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">
              With over two decades of clinical excellence, Dr. Agrawal is a pioneer in advanced implantology and restorative dentistry in Agra. His commitment to continuing education ensures that patients receive the most modern and effective treatments available globally.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-outline-variant/30">
                <GraduationCap className="text-primary h-6 w-6" />
                <p className="text-on-surface font-medium">Gold Medalist in Implantology</p>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-outline-variant/30">
                <Users className="text-primary h-6 w-6" />
                <p className="text-on-surface font-medium">Member of International Congress of Oral Implantologists</p>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-outline-variant/30">
                <ScrollText className="text-primary h-6 w-6" />
                <p className="text-on-surface font-medium">Published 20+ Research Papers in Dental Science</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-secondary-container/50 rounded-full blur-3xl"></div>
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5] w-full max-w-md mx-auto lg:max-w-full">
                <Image 
                  src={doctorImg}
                  alt="Dr. Agrawal"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
