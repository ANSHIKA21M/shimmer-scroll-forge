
import React, { useEffect, useRef, useState } from 'react';

const Statistics = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { label: 'Energy Efficiency', value: 98, unit: '%', color: 'cyber-green' },
    { label: 'User Satisfaction', value: 96, unit: '%', color: 'cyber-blue' },
    { label: 'Network Coverage', value: 89, unit: '%', color: 'cyber-purple' },
    { label: 'Response Time', value: 92, unit: '%', color: 'cyber-pink' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="py-24 relative" ref={sectionRef}>
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            PERFORMANCE <span className="text-gradient">METRICS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time data showcasing our system's exceptional performance and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="glass-card p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-300">
              {/* Circular progress */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                  {/* Background circle */}
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="12"
                    fill="none"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    stroke={`rgb(var(--${stat.color}))`}
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 54}`}
                    strokeDashoffset={`${2 * Math.PI * 54 * (1 - (isVisible ? stat.value / 100 : 0))}`}
                    className="transition-all duration-2000 ease-out"
                    style={{ 
                      filter: 'drop-shadow(0 0 10px rgba(var(--cyber-blue), 0.5))',
                      transitionDelay: `${index * 200}ms`
                    }}
                  />
                </svg>
                
                {/* Value display */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div>
                    <div className="text-3xl font-orbitron font-bold text-foreground">
                      {isVisible ? stat.value : 0}{stat.unit}
                    </div>
                  </div>
                </div>
              </div>

              {/* Label */}
              <h3 className="text-lg font-orbitron font-semibold text-foreground group-hover:text-cyber-blue transition-colors duration-300">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>

        {/* Additional metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-muted-foreground">Current Load</span>
              <span className="text-cyber-green">●</span>
            </div>
            <div className="text-2xl font-orbitron font-bold mb-2">1,247 kW</div>
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyber-green to-cyber-blue transition-all duration-2000 ease-out"
                style={{ width: isVisible ? '73%' : '0%' }}
              ></div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-muted-foreground">Active Sessions</span>
              <span className="text-cyber-blue">●</span>
            </div>
            <div className="text-2xl font-orbitron font-bold mb-2">342</div>
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple transition-all duration-2000 ease-out"
                style={{ width: isVisible ? '86%' : '0%', transitionDelay: '400ms' }}
              ></div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-muted-foreground">Revenue Today</span>
              <span className="text-cyber-purple">●</span>
            </div>
            <div className="text-2xl font-orbitron font-bold mb-2">$18,492</div>
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyber-purple to-cyber-pink transition-all duration-2000 ease-out"
                style={{ width: isVisible ? '94%' : '0%', transitionDelay: '800ms' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
