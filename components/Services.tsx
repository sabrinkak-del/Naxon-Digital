import React from 'react';
import { Smartphone, Globe, PenTool, Database, BarChart, Cpu } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe />,
      title: 'פיתוח אתרים',
      description: 'בניית אתרים מתקדמים בטכנולוגיות החדשות ביותר, מותאמים אישית לצרכי העסק.',
      color: 'from-blue-500 to-cyan-400',
      shadowColor: 'rgba(56, 189, 248, 0.5)'
    },
    {
      icon: <Smartphone />,
      title: 'אפליקציות מובייל',
      description: 'פיתוח אפליקציות iOS ו-Android עם חווית משתמש חלקה וביצועים מהירים.',
      color: 'from-purple-500 to-pink-500',
      shadowColor: 'rgba(217, 70, 239, 0.5)'
    },
    {
      icon: <PenTool />,
      title: 'עיצוב UI/UX',
      description: 'עיצוב ממשקים מרהיבים ששמים את המשתמש במרכז ומגדילים המרות.',
      color: 'from-orange-400 to-red-500',
      shadowColor: 'rgba(251, 146, 60, 0.5)'
    },
    {
      icon: <BarChart />,
      title: 'שיווק דיגיטלי',
      description: 'אסטרטגיות שיווק מבוססות נתונים להגדלת החשיפה והמכירות.',
      color: 'from-green-400 to-emerald-600',
      shadowColor: 'rgba(74, 222, 128, 0.5)'
    },
    {
      icon: <Database />,
      title: 'פתרונות ענן',
      description: 'ארכיטקטורת שרתים וניהול דאטה בטוח, סקיילבילי ויעיל.',
      color: 'from-indigo-500 to-blue-600',
      shadowColor: 'rgba(99, 102, 241, 0.5)'
    },
    {
      icon: <Cpu />,
      title: 'אוטומציה ו-AI',
      description: 'הטמעת בינה מלאכותית ואוטומציות לייעול תהליכים עסקיים.',
      color: 'from-fuchsia-500 to-purple-600',
      shadowColor: 'rgba(217, 70, 239, 0.5)'
    }
  ];

  return (
    <div className="w-full min-h-screen p-8 md:p-16 relative z-10 flex flex-col items-center">
       <style>
        {`
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-up {
            animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}
      </style>

      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400 text-right animate-slide-up" style={{ animationDelay: '0.1s' }}>
          השירותים שלנו
        </h2>
        <p className="text-xl text-gray-400 mb-12 text-right max-w-2xl ml-auto opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          אנחנו מספקים מעטפת דיגיטלית מלאה לעסקים שרוצים להוביל.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" dir="rtl">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-gray-900/40 backdrop-blur-md border border-gray-800 p-8 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-500 hover:-translate-y-2 opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Hover Gradient Background (Subtle) */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* New Icon Design: Floating & Glowing */}
              <div className="mb-6 relative w-20 h-20 flex items-center justify-center">
                 {/* Glow Blob */}
                 <div className={`absolute inset-0 bg-gradient-to-br ${service.color} blur-2xl opacity-20 group-hover:opacity-60 transition-opacity duration-500 rounded-full`}></div>
                 
                 {/* The Icon */}
                 <div className="relative z-10 text-white transform group-hover:scale-110 transition-transform duration-500">
                    {React.cloneElement(service.icon as React.ReactElement, { 
                        size: 48, 
                        className: "drop-shadow-lg",
                        style: { filter: `drop-shadow(0 0 10px ${service.shadowColor})` }
                    })}
                 </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                {service.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed text-lg">
                {service.description}
              </p>

              <div className={`absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -rotate-45 group-hover:rotate-0`}>
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;