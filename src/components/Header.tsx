
import React, { useState, useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Statistics', href: '#stats' },
    { label: 'Video', href: '#video' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'glass-card backdrop-blur-xl' : ''}`}>
      <nav className="container-max section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-orbitron font-bold text-xl">F</span>
            </div>
            <div>
              <h1 className="text-xl font-orbitron font-bold text-gradient">Front-End Battle</h1>
              <p className="text-xs text-muted-foreground">2.0 Competition</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-cyber-blue transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-cyber-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </a>
            ))}
          </div>

          {/* Theme toggle */}
          <Button
            onClick={toggleTheme}
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-white/10 transition-colors"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
