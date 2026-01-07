
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Badge from the image */}
        <div className="inline-flex items-center mb-8 border border-white/10 bg-white/5 rounded-sm overflow-hidden">
          <div className="bg-white px-3 py-1">
            <span className="text-black text-[10px] font-bold font-mono uppercase tracking-tighter">New</span>
          </div>
          <div className="px-4 py-1 flex items-center gap-2">
            <span className="text-[10px] font-mono text-gray-300 tracking-tight">Check out the team dashboard</span>
            <span className="text-gray-400 text-xs">→</span>
          </div>
        </div>

        {/* Headline adjusted to 2 lines and smaller size */}
        <h1 className="font-orbitron font-black text-3xl sm:text-5xl lg:text-7xl tracking-tighter leading-[1.1] mb-10 headline-glow text-white uppercase">
          <span className="block whitespace-nowrap">A Personal Website Built</span>
          <span className="block whitespace-nowrap">To Win Opportunities</span>
        </h1>

        {/* Subtext adjusted */}
        <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          For designers, developers, and creators who want a personal site that looks 
          professional and feels personal. PersonaForge makes it happen.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto px-10 py-4 bg-white text-black font-mono font-black text-xs tracking-[0.2em] rounded-sm transition-all hover:bg-gray-200 active:scale-95 shadow-xl shadow-white/5">
            START BUILDING
          </button>
          
          <button className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/20 text-white font-mono font-bold text-xs tracking-[0.2em] rounded-sm hover:bg-white/5 transition-colors">
            SEE EXAMPLES
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
