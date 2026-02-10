import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden selection:bg-fuchsia-500 selection:text-white">
      {/* Background Layer */}
      <ParticleBackground />
      
      {/* UI Layer */}
      <div className="flex">
        {/* Navigation */}
        <Sidebar />
        
        {/* Main Content Area */}
        <div className="flex-1 ml-16">
          <Hero />
        </div>
      </div>
      
      {/* Decorative Gradient Overlay (Vignette) */}
      <div className="pointer-events-none fixed inset-0 bg-radial-gradient from-transparent to-black opacity-60 z-0" />
    </div>
  );
}

export default App;