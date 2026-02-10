import React from 'react';
import { Home, MessageSquare, Layout, Edit, Gamepad2, Settings, HelpCircle, Facebook, Activity, X } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-16 bg-[#0a0a0a]/80 backdrop-blur-md border-r border-gray-800 flex flex-col items-center py-6 z-50 text-gray-400">
      <div className="mb-8">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-fuchsia-600 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
          N
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-6 w-full items-center">
        <SidebarIcon icon={<Home size={20} />} active />
        <SidebarIcon icon={<MessageSquare size={20} />} />
        <SidebarIcon icon={<Layout size={20} />} />
        <SidebarIcon icon={<Edit size={20} />} />
        <SidebarIcon icon={<Gamepad2 size={20} />} />
        <SidebarIcon icon={<Activity size={20} />} />
      </nav>

      <div className="flex flex-col gap-6 w-full items-center mb-4">
        <SidebarIcon icon={<Facebook size={20} />} color="text-blue-500" />
        <div className="text-purple-500 font-bold text-lg">Y!</div>
        <SidebarIcon icon={<Settings size={20} />} />
        <SidebarIcon icon={<HelpCircle size={20} />} />
      </div>
    </aside>
  );
};

interface SidebarIconProps {
  icon: React.ReactNode;
  active?: boolean;
  color?: string;
}

const SidebarIcon: React.FC<SidebarIconProps> = ({ icon, active, color }) => (
  <button 
    className={`p-2 rounded-lg transition-all duration-300 hover:bg-white/10 ${active ? 'text-white bg-white/10 border-l-2 border-fuchsia-500 rounded-l-none' : ''} ${color || ''}`}
  >
    {icon}
  </button>
);

export default Sidebar;