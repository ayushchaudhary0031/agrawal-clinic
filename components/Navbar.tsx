'use client';
import { useState, useEffect } from 'react';
import { Phone, Stethoscope } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-surface/90 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'h-16 shadow-md' : 'h-20 shadow-[0px_4px_20px_rgba(0,0,0,0.05)]'}`}>
      <nav className="flex justify-between items-center w-full px-6 max-w-7xl mx-auto h-full">
        <Link href="/" className="font-semibold text-2xl text-primary flex items-center gap-2">
          <Stethoscope className="text-secondary h-9 w-9" />
          <span className="hidden lg:block leading-tight text-[20px]">Dr. Agrawal&apos;s Dental Health Clinic</span>
          <span className="lg:hidden">Dr. Agrawal&apos;s</span>
        </Link>
        <div className="hidden md:flex gap-8 items-center font-medium">
          <Link href="#about" className="text-primary font-bold border-b-2 border-primary hover:text-primary transition-colors duration-200">About</Link>
          <Link href="#services" className="text-on-surface-variant hover:text-primary transition-colors duration-200">Services</Link>
          <Link href="#implants" className="text-on-surface-variant hover:text-primary transition-colors duration-200">Implants</Link>
          <Link href="#doctor" className="text-on-surface-variant hover:text-primary transition-colors duration-200">Doctor</Link>
          <Link href="#reviews" className="text-on-surface-variant hover:text-primary transition-colors duration-200">Reviews</Link>
          <Link href="#faq" className="text-on-surface-variant hover:text-primary transition-colors duration-200">FAQ</Link>
        </div>
        <div className="flex gap-3">
          <a href="tel:+917906480031" className="hidden sm:flex items-center gap-2 text-primary font-medium px-4 py-2 hover:bg-surface-container transition-all rounded-full">
            <Phone className="h-5 w-5" />
            Call Now
          </a>
          <a href="#booking" className="bg-primary text-on-primary font-medium px-6 py-2.5 rounded-full shadow-sm hover:scale-105 active:scale-95 transition-all">
            Book Appointment
          </a>
        </div>
      </nav>
    </header>
  );
}
