import React from 'react';
import { Home, MessageSquare, Layout, User, Briefcase } from 'lucide-react';

interface SidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, onNavigate }) => {
  return (
    <aside className="fixed left-0 top-0 h-full w-16 bg-[#0a0a0a]/80 backdrop-blur-md border-r border-gray-800 flex flex-col items-center py-6 z-50 text-gray-400">
      <nav className="flex-1 flex flex-col gap-6 w-full items-center justify-start pt-10">
        <SidebarIcon 
          icon={<Home size={20} />} 
          label="ראשי"
          active={activePage === 'home'} 
          onClick={() => onNavigate('home')} 
        />
        <SidebarIcon 
          icon={<User size={20} />} 
          label="אודות"
          active={activePage === 'about'} 
          onClick={() => onNavigate('about')} 
        />
        <SidebarIcon 
          icon={<Layout size={20} />} 
          label="שירותים"
          active={activePage === 'services'} 
          onClick={() => onNavigate('services')} 
        />
        <SidebarIcon 
          icon={<Briefcase size={20} />} 
          label="פרויקטים"
          active={activePage === 'projects'} 
          onClick={() => onNavigate('projects')} 
        />
        <SidebarIcon 
          icon={<MessageSquare size={20} />} 
          label="צור קשר"
          active={activePage === 'contact'} 
          onClick={() => onNavigate('contact')} 
        />
      </nav>
    </aside>
  );
};

interface SidebarIconProps {
  icon: React.ReactNode;
  active?: boolean;
  color?: string;
  label?: string;
  onClick: () => void;
}

const SidebarIcon: React.FC<SidebarIconProps> = ({ icon, active, color, label, onClick }) => (
  <button 
    onClick={onClick}
    title={label}
    className={`p-2 relative group rounded-lg transition-all duration-300 hover:bg-white/10 ${active ? 'text-white bg-white/10 border-l-2 border-fuchsia-500 rounded-l-none' : ''} ${color || ''}`}
  >
    {icon}
    {active && (
      <span className="absolute left-full ml-2 px-2 py-1 bg-fuchsia-600 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
        {label}
      </span>
    )}
  </button>
);

export default Sidebar;