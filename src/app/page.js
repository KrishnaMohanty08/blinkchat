import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import Feature from '@/components/Feature';
import Contactus from '@/components/Contactus';
export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: '#090b0a', color: '#f4f9f7', fontFamily: 'Inter, sans-serif', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '2rem' }}>
        {/* Your main content */}
      </main>
      <div className="grow"><Feature/></div>
      <div className="w-auto"><Contactus/></div>
      <Footer />
    </div>
  );
}

