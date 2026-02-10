import React from 'react';
import { ExternalLink, ArrowUpRight, Layers } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Neon Commerce',
      category: 'E-Commerce',
      description: 'פלטפורמת סחר מתקדמת עם חווית קנייה תלת-ממדית וממשק משתמש עתידני המאפשרת לקונים לראות מוצרים ב-360 מעלות.',
      tags: ['React', 'Three.js', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Cyber Shield',
      category: 'SaaS Platform',
      description: 'מערכת ניהול ובקרה לאבטחת מידע ארגונית עם ויזואליזציית נתונים בזמן אמת וזיהוי איומים מבוסס AI.',
      tags: ['Vue.js', 'D3.js', 'Python'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'HealthTrack AI',
      category: 'Mobile App',
      description: 'אפליקציית בריאות חכמה המשתמשת בבינה מלאכותית לניתוח מדדים רפואיים ומתן המלצות אישיות למשתמש.',
      tags: ['React Native', 'TensorFlow', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
      color: 'from-emerald-400 to-green-600',
    },
    {
      title: 'Smart City Hub',
      category: 'Web App',
      description: 'מערכת שליטה ובקרה לניהול תשתיות עירוניות חכמות, חיסכון באנרגיה וניהול תנועה בזמן אמת.',
      tags: ['Next.js', 'IoT', 'Go'],
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
      color: 'from-orange-400 to-amber-500',
    },
     {
      title: 'Crypto Wallet Pro',
      category: 'Fintech',
      description: 'ארנק דיגיטלי מאובטח למסחר במטבעות קריפטוגרפיים עם אבטחה ביומטרית וממשק משתמש נוח ואינטואיטיבי.',
      tags: ['Flutter', 'Solidity', 'AWS'],
      image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=800',
      color: 'from-violet-500 to-purple-600',
    },
    {
      title: 'NeuroWrite',
      category: 'AI Tool',
      description: 'מערכת ליצירת תוכן שיווקי אוטומטי המבוססת על מודלי שפה מתקדמים, החוסכת זמן ומשאבים לצוותי קריאייטיב.',
      tags: ['OpenAI API', 'Next.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
      color: 'from-blue-600 to-indigo-600',
    }
  ];

  return (
    <div className="w-full min-h-screen p-8 md:p-12 relative z-10 flex flex-col items-center">
       <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeInUp 0.8s ease-out forwards;
          }
        `}
      </style>

      <div className="max-w-6xl w-full">
        {/* Header Section - Centered */}
        <div className="flex flex-col items-center text-center mb-10" dir="rtl">
             <h2 className="text-4xl md:text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-l from-white via-gray-200 to-gray-500 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              פרויקטים נבחרים
            </h2>
            <div className="h-1 w-24 bg-fuchsia-500 rounded-full animate-fade-in mb-5" style={{ animationDelay: '0.2s' }}></div>
             <p className="text-lg text-gray-400 max-w-2xl animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
              אנחנו הופכים רעיונות למציאות דיגיטלית. הנה טעימה מהפרויקטים האחרונים שעבדנו עליהם בשיתוף פעולה עם לקוחותינו.
            </p>
        </div>
       

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" dir="rtl">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-gray-900/40 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-500 opacity-0 animate-fade-in hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Image Area with Overlay */}
              <div className="h-44 w-full relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div>
                 <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-10 mix-blend-overlay`}></div>
                 <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                 />
                 
                 {/* Floating Badge */}
                 <div className="absolute top-3 right-3 z-20">
                     <span className="backdrop-blur-md bg-black/50 border border-white/10 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                        <Layers size={10} className="text-fuchsia-400" />
                        {project.category}
                     </span>
                 </div>
              </div>

              {/* Content Area */}
              <div className="p-5 relative z-20 -mt-8">
                <div className="mb-3">
                     <h3 className="text-xl font-bold text-white mb-2 group-hover:text-fuchsia-400 transition-colors duration-300 drop-shadow-md">{project.title}</h3>
                     <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors">
                        {project.description}
                     </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-medium text-gray-400 bg-black/40 px-2 py-1 rounded border border-gray-700 group-hover:border-gray-600 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-800/50">
                     <button className="flex-1 bg-white text-black font-bold py-1.5 rounded-lg text-xs hover:bg-fuchsia-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(217,70,239,0.4)]">
                        <span>צפה בפרויקט</span>
                        <ArrowUpRight size={14} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                     </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;