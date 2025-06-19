
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center">
        {/* Custom loading animation */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-cyber-blue/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-cyber-blue border-t-transparent rounded-full animate-loading-spin"></div>
          <div className="absolute inset-4 border-4 border-cyber-purple/40 border-r-transparent rounded-full animate-loading-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
          <div className="absolute inset-8 border-4 border-cyber-pink/60 border-b-transparent rounded-full animate-loading-spin" style={{ animationDuration: '1.5s' }}></div>
        </div>
        
        <h2 className="text-2xl font-orbitron font-bold text-gradient mb-4">
          INITIALIZING SYSTEM
        </h2>
        
        <div className="w-64 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full animate-progress-fill" style={{ '--progress-width': '100%' } as React.CSSProperties}></div>
        </div>
        
        <p className="text-sm text-muted-foreground mt-4 font-mono">
          Loading Front-End Battle 2.0...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
