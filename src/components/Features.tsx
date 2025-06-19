
import React, { useEffect, useRef } from 'react';
import { useRipple } from '@/hooks/useRipple';

const Features = () => {
  const { createRipple } = useRipple();
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      title: 'Real-time Monitoring',
      description: 'Track your charging session with live updates and detailed analytics.',
      icon: '⚡',
      color: 'from-cyber-blue to-cyan-400'
    },
    {
      title: 'Smart Scheduling',
      description: 'AI-powered scheduling optimizes charging times for cost efficiency.',
      icon: '🧠',
      color: 'from-cyber-purple to-violet-400'
    },
    {
      title: 'Mobile Integration',
      description: 'Seamless mobile app integration for charging on the go.',
      icon: '📱',
      color: 'from-cyber-pink to-rose-400'
    },
    {
      title: 'Green Energy',
      description: 'Prioritize renewable energy sources for sustainable charging.',
      icon: '🌱',
      color: 'from-cyber-green to-emerald-400'
    },
    {
      title: 'Payment Solutions',
      description: 'Multiple payment options with secure transaction processing.',
      icon: '💳',
      color: 'from-cyber-orange to-amber-400'
    },
    {
      title: 'Network Access',
      description: 'Access thousands of charging stations across the network.',
      icon: '🌐',
      color: 'from-indigo-500 to-blue-400'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in-up');
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.feature-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-24 relative" ref={sectionRef}>
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="text-gradient">SYSTEM</span> FEATURES
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the advanced capabilities that make our charging system the most innovative solution in the market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card floating-card glass-card p-8 rounded-2xl ripple-container group cursor-pointer"
              onClick={createRipple}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-orbitron font-bold mb-4 text-foreground group-hover:text-cyber-blue transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyber-blue/0 to-cyber-purple/0 group-hover:from-cyber-blue/5 group-hover:to-cyber-purple/5 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional interactive elements */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 glass-card px-8 py-4 rounded-full">
            <div className="w-3 h-3 bg-cyber-green rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">All systems operational</span>
            <div className="w-3 h-3 bg-cyber-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
