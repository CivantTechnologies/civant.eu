import React from 'react';

export default function RadarVisualization() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Radar rings */}
      <div className="relative w-full max-w-md aspect-square">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border border-[#00C4C4]/20 animate-pulse" style={{ animationDuration: '4s' }} />
        
        {/* Middle ring */}
        <div className="absolute inset-[15%] rounded-full border border-[#00C4C4]/30 animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
        
        {/* Inner ring */}
        <div className="absolute inset-[30%] rounded-full border border-[#00C4C4]/40 animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '1s' }} />
        
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00C4C4]/60" />
        
        {/* Signal dots */}
        <div className="absolute top-[20%] right-[25%] w-2 h-2 rounded-full bg-[#00C4C4]/50 animate-pulse" style={{ animationDuration: '2s' }} />
        <div className="absolute bottom-[30%] left-[20%] w-2 h-2 rounded-full bg-[#00C4C4]/50 animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.3s' }} />
        <div className="absolute top-[35%] left-[15%] w-2 h-2 rounded-full bg-[#00C4C4]/50 animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.6s' }} />
        <div className="absolute bottom-[20%] right-[30%] w-2 h-2 rounded-full bg-[#00C4C4]/50 animate-pulse" style={{ animationDuration: '2.8s', animationDelay: '0.9s' }} />
      </div>
    </div>
  );
}