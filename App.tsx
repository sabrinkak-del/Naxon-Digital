import React, { useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return <Hero onNavigate={setActivePage} />;
      case 'services':
        return <Services />;
      case 'projects':
        return <Projects />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden selection:bg-fuchsia-500 selection:text-white">
      {/* Background Layer */}
      <ParticleBackground />
      
      {/* UI Layer */}
      <div className="flex h-screen overflow-hidden">
        {/* Navigation */}
        <Sidebar activePage={activePage} onNavigate={setActivePage} />
        
        {/* Main Content Area */}
        <div className="flex-1 ml-16 overflow-y-auto h-full scroll-smooth">
          {renderContent()}
        </div>
      </div>
      
      {/* Decorative Gradient Overlay (Vignette) */}
      <div className="pointer-events-none fixed inset-0 bg-radial-gradient from-transparent to-black opacity-60 z-0" />
    </div>
  );
}

export default App;