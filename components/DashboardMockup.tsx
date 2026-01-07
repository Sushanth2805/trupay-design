
import React from 'react';
import { 
  Search, Sun, Bell, User, Layout, Package, ShoppingCart, 
  Users, BarChart3, Activity, ArrowUpRight, CheckCircle2 
} from 'lucide-react';

const DashboardMockup: React.FC = () => {
  return (
    <div className="relative group">
      {/* Corner Accents */}
      <div className="absolute -top-1 -left-1 w-2 h-2 bg-white z-20" />
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-white z-20" />
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white z-20" />
      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white z-20" />

      {/* Frame */}
      <div className="glass-panel rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-black">
        {/* Browser Top Bar */}
        <div className="h-12 bg-white/5 border-b border-white/10 flex items-center px-4 justify-between">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
          </div>
          <div className="bg-black/40 px-3 py-1 rounded text-[10px] font-mono text-gray-500 border border-white/5">
            https://cilivo.app/dashboard
          </div>
          <div className="w-12" />
        </div>

        <div className="flex h-[600px] overflow-hidden">
          {/* Sidebar */}
          <aside className="w-64 border-r border-white/5 bg-black/40 flex flex-col">
            <div className="p-6 border-b border-white/5 flex items-center gap-2">
              <div className="w-5 h-5 bg-white rotate-45" />
              <span className="font-orbitron font-bold text-sm">Cilivo</span>
            </div>
            
            <div className="p-4 space-y-6">
              <div>
                <p className="text-[10px] font-mono text-gray-600 mb-4 tracking-widest uppercase">Favorites</p>
                <div className="space-y-1">
                  <NavItem icon={<Layout className="w-4 h-4" />} label="Overview" active />
                  <NavItem icon={<Package className="w-4 h-4" />} label="Projects" />
                </div>
              </div>

              <div>
                <p className="text-[10px] font-mono text-gray-600 mb-4 tracking-widest uppercase">Dashboards</p>
                <div className="space-y-1">
                  <NavItem icon={<Activity className="w-4 h-4" />} label="Analytics" />
                  <NavItem icon={<ShoppingCart className="w-4 h-4" />} label="Ecommerce" />
                  <NavItem icon={<Users className="w-4 h-4" />} label="Customers" />
                </div>
              </div>
            </div>

            <div className="mt-auto p-4 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 overflow-hidden">
                  <img src="https://picsum.photos/100/100" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs font-medium">Alex Rivera</p>
                  <p className="text-[10px] text-gray-500">Pro Plan</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 flex flex-col bg-[#050505]">
            {/* Nav */}
            <header className="h-16 border-b border-white/5 flex items-center justify-between px-6">
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="text-gray-500">DASHBOARDS</span>
                <span className="text-gray-700">/</span>
                <span className="text-white">OVERVIEW</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-1.5 text-xs focus:outline-none focus:border-white/20 w-48"
                  />
                </div>
                <button className="p-2 hover:bg-white/5 rounded-lg transition-colors"><Sun className="w-4 h-4 text-gray-400" /></button>
                <button className="p-2 hover:bg-white/5 rounded-lg transition-colors relative">
                  <Bell className="w-4 h-4 text-gray-400" />
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full" />
                </button>
              </div>
            </header>

            {/* Dashboard Stats */}
            <div className="p-6 flex-1 overflow-auto">
              <div className="grid grid-cols-4 gap-4 mb-8">
                <StatCard label="Views" value="7,265" change="+11.01%" />
                <StatCard label="Visits" value="3,671" change="+0.03%" />
                <StatCard label="New Users" value="256" change="+15.03%" />
                <StatCard label="Active Users" value="2,318" change="+6.08%" />
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 glass-panel p-6 rounded-xl border-white/5">
                   <div className="flex items-center justify-between mb-8">
                     <h3 className="text-sm font-semibold">User Activity</h3>
                     <div className="flex gap-4 text-[10px] font-mono">
                        <span className="flex items-center gap-1.5 text-white"><div className="w-1.5 h-1.5 bg-white rounded-full"/> Current Year</span>
                        <span className="flex items-center gap-1.5 text-gray-600"><div className="w-1.5 h-1.5 bg-gray-600 rounded-full"/> Last Year</span>
                     </div>
                   </div>
                   <div className="h-48 flex items-end justify-between gap-1">
                      {[40, 65, 30, 85, 45, 90, 55, 75, 60, 95, 40, 70].map((h, i) => (
                        <div key={i} className="flex-1 group relative">
                           <div 
                             className="w-full bg-white/10 group-hover:bg-white/30 transition-all duration-300 rounded-t-sm"
                             style={{ height: `${h}%` }}
                           />
                           {i % 2 === 0 && <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-mono text-gray-600">M{i+1}</span>}
                        </div>
                      ))}
                   </div>
                </div>

                <div className="glass-panel p-6 rounded-xl border-white/5 flex flex-col">
                  <h3 className="text-sm font-semibold mb-6">Recent Notifications</h3>
                  <div className="space-y-4">
                     <NotificationItem 
                       title="You fixed a bug." 
                       time="Just now" 
                       icon={<CheckCircle2 className="w-4 h-4 text-white" />}
                     />
                     <NotificationItem 
                       title="New user registered." 
                       time="59 minutes ago" 
                       icon={<User className="w-4 h-4 text-white" />}
                     />
                     <NotificationItem 
                       title="You fixed a bug." 
                       time="12 hours ago" 
                       icon={<CheckCircle2 className="w-4 h-4 text-white" />}
                     />
                     <NotificationItem 
                       title="Andi Lane subscribed." 
                       time="Today, 11:59 AM" 
                       icon={<Users className="w-4 h-4 text-white" />}
                     />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

const NavItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean }> = ({ icon, label, active }) => (
  <div className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs transition-colors cursor-pointer ${active ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}>
    {icon}
    <span>{label}</span>
  </div>
);

const StatCard: React.FC<{ label: string; value: string; change: string }> = ({ label, value, change }) => (
  <div className="glass-panel p-4 rounded-xl border-white/5">
    <p className="text-[10px] font-mono text-gray-500 mb-2 uppercase tracking-tight">{label}</p>
    <div className="flex items-end justify-between">
      <h4 className="text-xl font-orbitron font-bold tracking-tight">{value}</h4>
      <div className="flex items-center gap-0.5 text-[10px] text-white font-mono">
        {change}
        <ArrowUpRight className="w-3 h-3" />
      </div>
    </div>
  </div>
);

const NotificationItem: React.FC<{ title: string; time: string; icon: React.ReactNode }> = ({ title, time, icon }) => (
  <div className="flex gap-3">
    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-[11px] font-medium leading-tight">{title}</p>
      <p className="text-[9px] text-gray-600 mt-0.5">{time}</p>
    </div>
  </div>
);

export default DashboardMockup;
