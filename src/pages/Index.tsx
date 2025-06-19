
import React, { useEffect, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Statistics from '@/components/Statistics';
import VideoSection from '@/components/VideoSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Add parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const elements = document.querySelectorAll('.parallax-element');
      
      elements.forEach((element, index) => {
        const speed = (index + 1) * 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? '' : '[data-theme="light"]'} custom-cursor`} data-theme={theme}>
      <CustomCursor />
      <ScrollProgress />
      
      {/* Background grid */}
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none" />
      
      {/* Main content */}
      <Header />
      <main className="relative">
        <Hero />
        <Features />
        <Statistics />
        <VideoSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
