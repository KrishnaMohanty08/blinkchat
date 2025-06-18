import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import './globals.css';
export default function Home() {
  return (
    <>
      <Navbar />
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center flex-1 p-4">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to BlinkChat</h1>
        <p className="mt-2 text-lg text-gray-700">Your real-time chat solution.</p>
      </div>
      </main>
      <Footer />
      </>
  );
}
