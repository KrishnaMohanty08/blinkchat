import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Contactus from '@/components/Contactus';
import './globals.css';

export default function Home() {
  return (
    <>
      <Navbar />
        <HeroSection/>
        <Contactus/>
      <Footer />
      </>
  );
}
