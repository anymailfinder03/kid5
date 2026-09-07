import Hero from '@/components/home/Hero';
import WhyILE from '@/components/home/WhyILE';
import Programs from '@/components/home/Programs';
import LearningJourney from '@/components/home/LearningJourney';
import Teachers from '@/components/home/Teachers';
import Results from '@/components/home/Results';
import Activities from '@/components/home/Activities';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import Contact from '@/components/home/Contact';
import FinalCTA from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyILE />
      <Programs />
      <LearningJourney />
      <Teachers />
      <Results />
      <Activities />
      <Testimonials />
      <FAQ />
      <Contact />
      <FinalCTA />
    </>
  );
}
