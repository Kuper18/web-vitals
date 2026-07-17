import About from '@/components/about';
import Expertise from '@/components/expertise';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Testimonials from '@/components/testimonials';
import Vision from '@/components/vision';

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Expertise />
        <Services />
        <Testimonials />
        <Vision />
      </main>
      <Footer />
    </>
  );
}
