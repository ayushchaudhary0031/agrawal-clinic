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
    <header className={`bg-white/80 backdrop-blur-xl sticky top-0 z-50 transition-all duration-300 border-b ${scrolled ? 'h-20 shadow-sm border-outline/10' : 'h-24 border-transparent'}`}>
      <nav className="flex justify-between items-center w-full px-6 max-w-7xl mx-auto h-full">
        <Link href="/" className="font-bold text-2xl flex items-center gap-2 group">
          <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
            <Stethoscope className="text-primary h-7 w-7" />
          </div>
          <span className="hidden lg:block leading-tight text-[1.35rem] bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">Dr. Agrawal&apos;s Dental Clinic</span>
          <span className="lg:hidden text-primary">Dr. Agrawal&apos;s</span>
        </Link>
        <div className="hidden md:flex gap-8 items-center font-medium">
          <Link href="#about" className="relative group text-on-surface font-semibold hover:text-primary transition-colors duration-200">About<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span></Link>
          <Link href="#services" className="relative group text-on-surface-variant font-medium hover:text-primary transition-colors duration-200">Services<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span></Link>
          <Link href="#implants" className="relative group text-on-surface-variant font-medium hover:text-primary transition-colors duration-200">Implants<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span></Link>
          <Link href="#doctor" className="relative group text-on-surface-variant font-medium hover:text-primary transition-colors duration-200">Doctor<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span></Link>
          <Link href="#reviews" className="relative group text-on-surface-variant font-medium hover:text-primary transition-colors duration-200">Reviews<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span></Link>
          <Link href="#faq" className="relative group text-on-surface-variant font-medium hover:text-primary transition-colors duration-200">FAQ<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span></Link>
        </div>
        <div className="flex gap-4 items-center">
          <a href="tel:+917906480031" className="hidden sm:flex items-center gap-2 text-primary font-semibold px-4 py-2 hover:bg-primary/5 transition-colors rounded-full">
            <Phone className="h-4 w-4" />
            <span className="tracking-wide">79064 80031</span>
          </a>
          <a href="#booking" className="bg-gradient-to-r from-primary to-primary/90 text-on-primary font-semibold px-6 py-2.5 rounded-full shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all">
            Book Visit
          </a>
        </div>
      </nav>
    </header>
  );
}
