import { useState } from 'react';
import { Navbar } from '@/components/portfolio/Navbar';
import { Hero } from '@/components/portfolio/Hero';
import { About } from '@/components/portfolio/About';
import { Skills } from '@/components/portfolio/Skills';
import { Projects } from '@/components/portfolio/Projects';
import { Experience } from '@/components/portfolio/Experience';
import { Testimonials } from '@/components/portfolio/Testimonials';
import { Contact } from '@/components/portfolio/Contact';
import { Footer } from '@/components/portfolio/Footer';
import { Preloader } from '@/components/portfolio/Preloader';
import { ScrollProgress } from '@/components/portfolio/ScrollProgress';
import { ScrollToTop } from '@/components/portfolio/ScrollToTop';
import { GitHub } from '@/components/portfolio/Github';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {/* {isLoading && <Preloader onComplete={() => setIsLoading(false)} />} */}
      <main className={`bg-background text-foreground overflow-x-hidden ${isLoading ? 'overflow-hidden h-screen' : ''}`}>
        <ScrollProgress />
        <ScrollToTop />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHub/>
        <Experience />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
