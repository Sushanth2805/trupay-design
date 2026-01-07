
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DashboardMockup from './components/DashboardMockup';
import GridBackground from './components/GridBackground';
import { Layers, Zap, Shield, MousePointer2, Globe, Code } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <GridBackground />
      <Header />

      <main className="relative z-10">
        <Hero />
        
        {/* Dashboard Showcase Section */}
        <section className="relative px-4 pt-4 pb-24">
          <div className="max-w-6xl mx-auto">
             <div className="relative animate-float">
                <DashboardMockup />
             </div>
          </div>
        </section>

        {/* Features Grid Section */}
        <section className="py-24 px-6 relative bg-black/40 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className="font-mono text-[10px] text-gray-500 tracking-[0.3em] uppercase block mb-4">Core Infrastructure</span>
              <h2 className="text-3xl md:text-4xl font-orbitron font-black tracking-tighter mb-6 uppercase">Built for Speed.</h2>
              <div className="w-16 h-1 bg-white" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
              <FeatureCard 
                icon={<Zap className="w-5 h-5" />}
                title="LUDICROUS PERFORMANCE"
                description="Engineered with Next.js 16 and zero-runtime CSS for sub-100ms load times worldwide."
              />
              <FeatureCard 
                icon={<Layers className="w-5 h-5" />}
                title="ADVANCED LAYERS"
                description="Complex visual hierarchies simplified into a powerful component architecture."
              />
              <FeatureCard 
                icon={<Shield className="w-5 h-5" />}
                title="SECURE BY DEFAULT"
                description="Enterprise-grade security protocols protecting every byte of your personal data."
              />
              <FeatureCard 
                icon={<MousePointer2 className="w-5 h-5" />}
                title="FLUID UX"
                description="Micro-interactions that respond to user intent with predictive animation systems."
              />
              <FeatureCard 
                icon={<Globe className="w-5 h-5" />}
                title="GLOBAL EDGE"
                description="Deploy to 100+ edge locations simultaneously for local speeds in every continent."
              />
              <FeatureCard 
                icon={<Code className="w-5 h-5" />}
                title="DEV ORIENTED"
                description="First-class TypeScript support and a command-line interface designed for power users."
              />
            </div>
          </div>
        </section>

        {/* Pricing/Closing Section */}
        <section className="py-32 px-6 text-center border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-orbitron font-black tracking-tighter mb-8 headline-glow uppercase">Ready to Ascend?</h2>
            <p className="text-gray-400 text-lg mb-10 font-light">
              Join 15,000+ top-tier creators already building on Cilivo.
            </p>
            <button className="px-10 py-4 bg-white text-black font-mono font-black text-base tracking-[0.2em] rounded-sm hover:scale-105 transition-transform">
              CLAIM YOUR SPACE
            </button>
            <p className="mt-8 font-mono text-[9px] text-gray-600 tracking-widest uppercase">Starting at $0/month — no credit card required</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-16 px-6 relative z-10 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-white rotate-45 flex items-center justify-center">
                <div className="w-4 h-4 bg-black rotate-45" />
              </div>
              <span className="font-orbitron font-black text-2xl tracking-tighter">CILIVO</span>
            </div>
            <p className="text-gray-500 max-w-xs font-mono text-[10px] leading-relaxed">
              Engineering the future of personal branding. A modular platform for the modern elite professional.
            </p>
          </div>
          <div>
            <h4 className="font-mono text-[10px] font-bold text-white tracking-[0.2em] mb-6 uppercase">Platform</h4>
            <ul className="space-y-3 font-mono text-[9px] text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors uppercase">Components</a></li>
              <li><a href="#" className="hover:text-white transition-colors uppercase">Themes</a></li>
              <li><a href="#" className="hover:text-white transition-colors uppercase">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors uppercase">Enterprise</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-[10px] font-bold text-white tracking-[0.2em] mb-6 uppercase">Connect</h4>
            <ul className="space-y-3 font-mono text-[9px] text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors uppercase">X / Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors uppercase">Discord</a></li>
              <li><a href="#" className="hover:text-white transition-colors uppercase">Github</a></li>
              <li><a href="#" className="hover:text-white transition-colors uppercase">Linkedin</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] text-gray-600 font-mono tracking-widest uppercase">© 2024 Cilivo Technologies Inc.</p>
          <div className="flex gap-6 text-[9px] font-mono text-gray-600">
            <a href="#" className="hover:text-white uppercase">Privacy</a>
            <a href="#" className="hover:text-white uppercase">Terms</a>
            <a href="#" className="hover:text-white uppercase">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-black p-8 hover:bg-white/[0.02] transition-colors group">
    <div className="mb-6 text-white group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <h3 className="font-orbitron font-bold text-base mb-3 tracking-tighter uppercase">{title}</h3>
    <p className="text-gray-500 text-xs leading-relaxed font-light">{description}</p>
  </div>
);

export default App;
