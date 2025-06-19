import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Contactus from '@/components/Contactus';
import './globals.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen flex flex-col justify-start items-stretch overflow-x-hidden">
        <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
          {/* Green blurred shape */}
          <div className="absolute top-[-12%] left-[-10%] w-[120vw] h-[60vh] rounded-full bg-green-700 opacity-40 blur-[120px]" />
          {/* Optional: add more blurred shapes for depth */}
          <div className="absolute bottom-[-10%] right-[-10%] w-[80vw] h-[40vh] rounded-full bg-green-500 opacity-20 blur-[100px]" />
        </div>
        <HeroSection />
        <Contactus />
      </div>
      <Footer />
    </>
  );
}
