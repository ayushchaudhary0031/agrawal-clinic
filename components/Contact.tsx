import { ScrollReveal } from './ScrollReveal';
import { MapPin, Clock, Navigation } from 'lucide-react';

export function Contact() {
  return (
    <section className="pb-[120px] px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-[32px] overflow-hidden bg-white shadow-xl">
          
          <div className="p-8 md:p-12">
            <h2 className="text-[32px] md:text-3xl font-semibold mb-8">Visit Our Clinic</h2>
            <div className="space-y-6 mb-12">
              <div className="flex gap-4">
                <MapPin className="text-primary h-6 w-6" />
                <div>
                  <p className="font-bold">Our Location</p>
                  <p className="text-on-surface-variant mt-1">Shop No. 16, Vishav Karma Complex, Opp. Civil Courts, Agra, Uttar Pradesh</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="text-primary h-6 w-6" />
                <div>
                  <p className="font-bold">Business Hours</p>
                  <p className="text-on-surface-variant mt-1">Mon - Sat: 10:00 AM - 02:30 PM</p>
                  <p className="text-on-surface-variant">Mon - Sat: 05:30 PM - 08:30 PM</p>
                  <p className="text-red-500 font-medium">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="https://api.whatsapp.com/send?phone=917906480031&text=Hello%20Dr.%20Agrawal,%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-all">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.892-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.417 0 6.556-5.333 11.891-11.893 11.891-2.01 0-3.991-.51-5.747-1.477l-6.345 1.68zm6.19-3.216l.359.213c1.47.873 3.176 1.335 4.939 1.335 5.176 0 9.389-4.212 9.389-9.39 0-2.512-.979-4.872-2.756-6.65-1.778-1.778-4.137-2.757-6.65-2.757-5.178 0-9.39 4.212-9.39 9.39 0 2.036.529 4.025 1.534 5.768l.233.403-1.011 3.693 3.793-.995z"></path></svg>
                WhatsApp Us
              </a>
              <a href="https://maps.google.com/?q=Civil+Courts,Agra,Uttar+Pradesh" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-primary-container transition-all">
                <Navigation className="h-5 w-5" />
                Get Directions
              </a>
            </div>
          </div>
          
          <div className="h-[400px] lg:h-auto bg-surface-variant relative">
            <div className="absolute inset-0 grayscale opacity-40 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Agra+Civil+Courts,Agra,Uttar+Pradesh&zoom=14&size=600x600&scale=2&maptype=roadmap&style=element:geometry%7Ccolor:0x242f3e&style=element:labels.text.stroke%7Ccolor:0x242f3e&style=element:labels.text.fill%7Ccolor:0x746855&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xd59563')] bg-cover bg-center"></div>
            <div className="absolute inset-0 flex items-center justify-center p-8 text-center bg-primary/10">
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <MapPin className="text-primary h-10 w-10 mx-auto mb-2" />
                <p className="font-bold">Dr. Agrawal&apos;s Dental Clinic</p>
                <p className="text-sm text-on-surface-variant">Near Civil Courts, Agra</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
