
import React from 'react';
import { Button } from '@/components/ui/button';
import { useRipple } from '@/hooks/useRipple';

const Footer = () => {
  const { createRipple } = useRipple();

  const footerLinks = {
    Product: ['Features', 'Pricing', 'API', 'Documentation'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Support: ['Help Center', 'Contact', 'Status', 'Security'],
    Legal: ['Privacy', 'Terms', 'Cookies', 'Licenses']
  };

  return (
    <footer className="relative py-24 border-t border-gray-800">
      <div className="container-max section-padding">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-orbitron font-bold text-xl">F</span>
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-bold text-gradient">Front-End Battle</h3>
                <p className="text-xs text-muted-foreground">2.0 Competition</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Building the future of electric vehicle charging with cutting-edge technology and innovative design.
            </p>
            <div className="flex space-x-4">
              {['📘', '🐦', '📷', '💼', '🎮'].map((icon, index) => (
                <Button
                  key={index}
                  size="icon"
                  variant="ghost"
                  className="ripple-container w-10 h-10 rounded-full hover:bg-white/10 transition-all duration-300"
                  onClick={createRipple}
                >
                  {icon}
                </Button>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-orbitron font-semibold mb-4 text-foreground">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-cyber-blue transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="glass-card p-8 rounded-2xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-orbitron font-bold mb-2 text-gradient">
                Stay Updated
              </h3>
              <p className="text-muted-foreground">
                Get the latest updates on our charging system and Front-End Battle 2.0.
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyber-blue focus:border-transparent transition-all duration-200"
              />
              <Button
                className="ripple-container px-6 bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-pink transition-all duration-300"
                onClick={createRipple}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 Front-End Battle 2.0. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
              <span className="text-muted-foreground">All systems operational</span>
            </div>
            <div className="text-muted-foreground">
              Built with ❤️ for the competition
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent"></div>
    </footer>
  );
};

export default Footer;
