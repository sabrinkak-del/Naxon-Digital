import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random increment to simulate real loading data
        const increment = Math.floor(Math.random() * 3) + 1; 
        return Math.min(prev + increment, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full relative z-10 px-4">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>

      {/* Central Content */}
      <div className="text-center transform -translate-y-12">
        
        {/* Logo */}
        <div className="animate-float">
          <h1 className="text-8xl md:text-9xl font-black tracking-tighter mb-2 relative inline-block">
            <span 
              className="text-white"
              style={{ 
                textShadow: '0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(217, 70, 239, 0.2)'
              }}
            >
              Naxon
            </span>
            <span className="text-fuchsia-500 drop-shadow-[0_0_15px_rgba(217,70,239,0.8)]">.</span>
          </h1>
        </div>

        {/* Hebrew Subtitle */}
        <div className="mt-6 mb-12">
          <p className="text-2xl md:text-3xl text-gray-200 font-light max-w-2xl mx-auto leading-normal">
            מלווים את העסק שלך
          </p>
          <p className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-purple-600 mt-2">
            יד ביד לעולם הדיגיטלי החדש
          </p>
        </div>

        {/* Loading Bar Container */}
        <div className="w-full max-w-md mx-auto mt-16 relative">
          <div className="flex justify-between items-end mb-2 text-fuchsia-500 font-mono font-bold">
            <span className="text-xl">{progress}%</span>
            <span className="text-sm opacity-80 animate-pulse">
                {progress < 100 ? '...טוען' : 'מוכן'}
            </span>
          </div>
          
          {/* Progress Bar Background */}
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700">
            {/* Active Progress */}
            <div 
              className="h-full bg-gradient-to-r from-purple-600 to-fuchsia-500 rounded-full shadow-[0_0_15px_rgba(217,70,239,0.7)] transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            >
                {/* Leading glow effect */}
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]" style={{ left: `${progress}%` }}></div>
            </div>
          </div>
        </div>
        
        {/* Activate System Message (Mockup based on screenshot bottom left) */}
        <div className="absolute bottom-10 left-10 text-left opacity-30 hidden md:block" dir="ltr">
           <h4 className="text-lg font-semibold text-gray-400">Activate Windows</h4>
           <p className="text-sm text-gray-500">Go to Settings to activate Windows.</p>
        </div>

      </div>
    </main>
  );
};

export default Hero;