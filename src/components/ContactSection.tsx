
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRipple } from '@/hooks/useRipple';

const ContactSection = () => {
  const { createRipple } = useRipple();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            GET IN <span className="text-gradient">TOUCH</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to revolutionize your charging experience? Contact our team for more information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact form */}
          <div className="glass-card p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyber-blue focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyber-blue focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyber-blue focus:border-transparent transition-all duration-200 resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="ripple-container w-full py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-pink transition-all duration-300"
                onClick={createRipple}
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-orbitron font-bold mb-4 text-gradient">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center">
                    📧
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">info@chargingsystem.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-cyber-purple/20 rounded-lg flex items-center justify-center">
                    📞
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-cyber-pink/20 rounded-lg flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-muted-foreground">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-orbitron font-bold mb-4 text-gradient">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {['📘', '🐦', '📷', '💼'].map((icon, index) => (
                  <Button
                    key={index}
                    size="icon"
                    variant="ghost"
                    className="ripple-container w-12 h-12 rounded-full hover:bg-white/10 transition-all duration-300"
                    onClick={createRipple}
                  >
                    {icon}
                  </Button>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-orbitron font-bold mb-4 text-gradient">
                System Status
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">API Status</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
                    <span className="text-xs text-cyber-green">Operational</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Network</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
                    <span className="text-xs text-cyber-green">Online</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Support</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyber-blue rounded-full animate-pulse"></div>
                    <span className="text-xs text-cyber-blue">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
