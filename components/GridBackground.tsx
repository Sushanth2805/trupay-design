
import React from 'react';

const GridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* The actual dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      
      {/* Depth and Vignetting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.9)_100%)]" />
      
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-white/[0.03] blur-[120px] rounded-full" />
    </div>
  );
};

export default GridBackground;
