
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRipple } from '@/hooks/useRipple';

const VideoSection = () => {
  const { createRipple } = useRipple();
  const [currentTime, setCurrentTime] = useState(0);
  const videoDuration = 180; // 3 minutes in seconds

  const timelineMarkers = [
    { time: 0, label: 'Intro' },
    { time: 30, label: 'Features' },
    { time: 60, label: 'Demo' },
    { time: 120, label: 'Results' },
    { time: 180, label: 'End' }
  ];

  const handleMarkerClick = (time: number) => {
    setCurrentTime(time);
    // In a real implementation, this would seek the video to the specified time
    console.log(`Seeking to ${time} seconds`);
  };

  return (
    <section id="video" className="py-24 relative">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            WATCH THE <span className="text-gradient">FUTURE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience our revolutionary charging system in action through this immersive demonstration.
          </p>
        </div>

        {/* Video container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative glass-card rounded-2xl overflow-hidden group">
            {/* Video placeholder */}
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20"></div>
              
              {/* Play button */}
              <Button
                size="lg"
                className="ripple-container w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-110"
                onClick={createRipple}
              >
                <div className="w-0 h-0 border-l-8 border-r-0 border-t-6 border-b-6 border-l-white border-t-transparent border-b-transparent ml-1"></div>
              </Button>

              {/* Video overlay info */}
              <div className="absolute top-4 left-4 glass-card px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">LIVE DEMO</span>
                </div>
              </div>

              <div className="absolute top-4 right-4 glass-card px-4 py-2 rounded-lg">
                <span className="text-sm font-orbitron font-bold">4K UHD</span>
              </div>
            </div>

            {/* Video timeline */}
            <div className="p-6 bg-gray-900/50">
              <div className="video-timeline relative h-2 bg-gray-800 rounded-full mb-4 cursor-pointer">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full transition-all duration-300"
                  style={{ width: `${(currentTime / videoDuration) * 100}%` }}
                ></div>
                
                {/* Timeline markers */}
                {timelineMarkers.map((marker) => (
                  <div
                    key={marker.time}
                    className="timeline-marker cursor-pointer group"
                    style={{ left: `${(marker.time / videoDuration) * 100}%` }}
                    onClick={() => handleMarkerClick(marker.time)}
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 glass-card px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {marker.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Video controls */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <span className="font-orbitron">
                    {Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, '0')} / 
                    {Math.floor(videoDuration / 60)}:{(videoDuration % 60).toString().padStart(2, '0')}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="hover:bg-white/10"
                    onClick={createRipple}
                  >
                    🔄
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="hover:bg-white/10"
                    onClick={createRipple}
                  >
                    ⚙️
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="hover:bg-white/10"
                    onClick={createRipple}
                  >
                    ⛶
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Video info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-orbitron font-bold mb-2">High Speed</h3>
              <p className="text-sm text-muted-foreground">Ultra-fast charging up to 350kW</p>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-2xl mb-2">🛡️</div>
              <h3 className="font-orbitron font-bold mb-2">Secure</h3>
              <p className="text-sm text-muted-foreground">Enterprise-grade security</p>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-2xl mb-2">🌐</div>
              <h3 className="font-orbitron font-bold mb-2">Connected</h3>
              <p className="text-sm text-muted-foreground">IoT-enabled smart charging</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
