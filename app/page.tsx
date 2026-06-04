import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { QuickInfo } from '@/components/QuickInfo';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Implants } from '@/components/Implants';
import { Doctor } from '@/components/Doctor';
import { Reviews } from '@/components/Reviews';
import { Gallery } from '@/components/Gallery';
import { BookingForm } from '@/components/BookingForm';
import { Faq } from '@/components/Faq';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuickInfo />
        <About />
        <Services />
        <Implants />
        <Doctor />
        <Reviews />
        <Gallery />
        <BookingForm />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
