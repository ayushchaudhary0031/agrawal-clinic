import { Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-surface-container-highest">
      <div className="w-full py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="text-[20px] font-bold text-primary mb-6">Dr. Agrawal&apos;s Dental Health Clinic & Implant Centre</div>
            <p className="text-on-surface-variant max-w-sm mb-8">Agra&apos;s premier dental clinic specialized in high-end implants and restorative dentistry. Committed to excellence and patient comfort since 2004.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-4 font-medium text-sm">
              <li><Link href="#" className="text-on-surface-variant hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-on-surface-variant hover:text-secondary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-on-surface-variant hover:text-secondary transition-colors">Patient Rights</Link></li>
              <li><Link href="#" className="text-on-surface-variant hover:text-secondary transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-4 font-medium text-sm">
              <li><Link href="#implants" className="text-on-surface-variant hover:text-secondary transition-colors">Dental Implants</Link></li>
              <li><Link href="#services" className="text-on-surface-variant hover:text-secondary transition-colors">Root Canal</Link></li>
              <li><Link href="#services" className="text-on-surface-variant hover:text-secondary transition-colors">Braces</Link></li>
              <li><Link href="#services" className="text-on-surface-variant hover:text-secondary transition-colors">Smile Designing</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-outline-variant pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-on-surface-variant">
          <p>© 2024 Dr. Agrawal&apos;s Dental Health Clinic & Implant Centre. All rights reserved.</p>
          <p>Designed with <span className="text-red-500">❤</span> for Health</p>
        </div>
      </div>
    </footer>
  );
}
