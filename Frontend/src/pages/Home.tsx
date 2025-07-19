import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Templates from '../components/Templates/Templates';
import Testimonials from '../components/Testimonials/Testimonials';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Templates />
      <Testimonials />
    </>
  );
}
