import React from 'react';
import { Target, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="w-full min-h-screen p-8 md:p-16 relative z-10 flex flex-col items-center justify-center">
       <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeInUp 1s ease-out forwards;
          }
        `}
      </style>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Section */}
        <div className="text-right dir-rtl order-2 md:order-1" dir="rtl">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-fuchsia-500 uppercase bg-fuchsia-500/10 rounded-full animate-fade-in" style={{ animationDelay: '0.1s' }}>
            מי אנחנו
          </div>
          <h2 className="text-5xl font-black mb-6 text-white leading-tight opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            אנחנו <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600">Naxon</span>.
            <br />
            יוצרים את המחר.
          </h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            נקסון היא סוכנות דיגיטל הדור החדש. אנחנו משלבים טכנולוגיה עילית עם עיצוב פורץ דרך כדי לבנות מותגים שלא רק נראים טוב, אלא גם עובדים מצוין.
          </p>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            הצוות שלנו מורכב ממפתחים, מעצבים ואנשי שיווק שחיים ונושמים את הרשת. המטרה שלנו היא לקחת את העסק שלך צעד אחד קדימה אל עבר העתיד.
          </p>

          <div className="grid grid-cols-3 gap-4 border-t border-gray-800 pt-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-xs text-gray-500">פרויקטים</div>
            </div>
            <div className="text-center border-r border-gray-800">
              <div className="text-3xl font-bold text-white mb-1">12</div>
              <div className="text-xs text-gray-500">מומחים</div>
            </div>
            <div className="text-center border-r border-gray-800">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-xs text-gray-500">תמיכה</div>
            </div>
          </div>
        </div>

        {/* Visual Section */}
        <div className="relative order-1 md:order-2 flex justify-center opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="relative w-full max-w-sm aspect-square">
            {/* Abstract Shapes */}
            <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-600 to-purple-600 rounded-full blur-[80px] opacity-40 animate-pulse"></div>
            
            <div className="relative z-10 grid grid-cols-2 gap-4 h-full">
              <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 flex flex-col items-center justify-center transform translate-y-8 hover:border-fuchsia-500/50 transition-colors duration-300 group">
                <Target size={48} className="text-fuchsia-500 mb-4 drop-shadow-[0_0_10px_rgba(217,70,239,0.8)] group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white">דיוק</h3>
                <p className="text-xs text-gray-400 text-center mt-2">ירידה לפרטים הקטנים ביותר</p>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-yellow-400/50 transition-colors duration-300 group">
                <Zap size={48} className="text-yellow-400 mb-4 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)] group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white">מהירות</h3>
                <p className="text-xs text-gray-400 text-center mt-2">ביצועים ללא פשרות</p>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 flex flex-col items-center justify-center col-span-2 transform -translate-y-4 hover:border-cyan-400/50 transition-colors duration-300 group">
                 <Users size={48} className="text-cyan-400 mb-4 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white">שותפות</h3>
                <p className="text-xs text-gray-400 text-center mt-2">אנחנו איתך לאורך כל הדרך</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;