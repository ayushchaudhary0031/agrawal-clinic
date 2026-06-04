import { MapPin, PhoneCall, Clock, ShieldCheck } from 'lucide-react';

export function QuickInfo() {
  return (
    <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
      <div className="bg-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-outline-variant p-2">
        <div className="p-6 flex items-start gap-4">
          <MapPin className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
          <div>
            <p className="font-bold text-on-surface">Address</p>
            <p className="text-sm text-on-surface-variant mt-1">Shop No. 16, Vishav Karma Complex, Agra</p>
          </div>
        </div>
        <div className="p-6 flex items-start gap-4">
          <PhoneCall className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
          <div>
            <p className="font-bold text-on-surface">Phone</p>
            <p className="text-sm text-on-surface-variant mt-1">+91 79064 80031</p>
          </div>
        </div>
        <div className="p-6 flex items-start gap-4">
          <Clock className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
          <div>
            <p className="font-bold text-on-surface">Timings</p>
            <p className="text-sm text-on-surface-variant mt-1">Mon-Sat: 10:00-2:30, 5:30-8:30</p>
          </div>
        </div>
        <div className="p-6 flex items-start gap-4 bg-primary/5 rounded-b-2xl md:rounded-b-none md:rounded-r-2xl">
          <ShieldCheck className="text-secondary mt-1 h-6 w-6 flex-shrink-0" />
          <div>
            <p className="font-bold text-on-surface">Patient Rating</p>
            <div className="flex items-center gap-1 mt-1">
              <span className="font-bold text-primary">4.8/5</span>
              <span className="text-sm text-on-surface-variant">Google Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
