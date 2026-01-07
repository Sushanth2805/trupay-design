
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 flex items-center justify-center relative group cursor-pointer">
             <div className="absolute inset-0 bg-white rotate-45 transition-transform group-hover:rotate-90 duration-500" />
             <div className="absolute inset-1.5 bg-black rotate-45 transition-transform group-hover:rotate-0 duration-500" />
             <div className="absolute inset-2.5 bg-white rotate-45 transition-transform group-hover:rotate-90 duration-500" />
          </div>
          <span className="font-orbitron font-black text-2xl tracking-tighter text-white">CILIVO</span>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-14">
          {['PLATFORM', 'SOLUTIONS', 'DESIGN', 'DOCS'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-mono font-bold tracking-[0.3em] text-gray-500 hover:text-white transition-all hover:translate-y-[-1px]"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-8">
           <a href="#" className="hidden sm:block text-[10px] font-mono text-gray-500 hover:text-white transition-colors tracking-widest uppercase">Sign In</a>
           <button className="px-6 py-2.5 bg-white text-black rounded-sm text-[10px] font-mono font-black tracking-[0.2em] hover:bg-gray-200 transition-all active:scale-95">
            GET STARTED
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
