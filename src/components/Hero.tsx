
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useRipple } from '@/hooks/useRipple';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { createRipple } = useRipple();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="parallax-element absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="parallax-element absolute top-1/3 right-1/4 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="parallax-element absolute bottom-1/4 left-1/3 w-48 h-48 bg-cyber-pink/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-max section-padding text-center relative z-10" ref={heroRef}>
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="scroll-animate text-5xl md:text-7xl font-orbitron font-black mb-6 leading-tight">
            <span className="text-gradient">ONLINE</span>
            <br />
            <span className="text-foreground">CHARGING</span>
            <br />
            <span className="text-gradient-purple">SYSTEM</span>
          </h1>

          {/* Subtitle */}
          <p className="scroll-animate text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Experience the future of electric vehicle charging with our cutting-edge platform designed for the Front-End Battle 2.0 competition.
          </p>

          {/* CTA Buttons */}
          <div className="scroll-animate flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="ripple-container px-8 py-4 text-lg font-semibold bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-pink transition-all duration-300 transform hover:scale-105"
              onClick={createRipple}
            >
              Start Charging
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="ripple-container px-8 py-4 text-lg font-semibold border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10 transition-all duration-300"
              onClick={createRipple}
            >
              Learn More
            </Button>
          </div>

          {/* Statistics */}
          <div className="scroll-animate grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto" style={{ animationDelay: '0.6s' }}>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-3xl font-orbitron font-bold text-cyber-blue mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-3xl font-orbitron font-bold text-cyber-purple mb-2">50K+</div>
              <div className="text-muted-foreground">Charging Sessions</div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-3xl font-orbitron font-bold text-cyber-pink mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyber-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyber-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
