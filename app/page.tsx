"use client";

import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import Tools from '@/components/tools';
import Projects from '@/components/projects';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Tools />
        <Projects />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}