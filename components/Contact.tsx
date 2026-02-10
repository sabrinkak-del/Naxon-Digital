import React from 'react';
import { Mail, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="w-full min-h-screen p-8 md:p-16 relative z-10 flex flex-col items-center justify-center">
        <style>
        {`
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-slide-in {
            animation: slideInRight 0.8s ease-out forwards;
          }
        `}
      </style>
      
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div className="text-right dir-rtl order-2 md:order-1 opacity-0 animate-slide-in" style={{ animationDelay: '0.2s' }} dir="rtl">
          <h2 className="text-4xl font-black mb-6 text-white">בואו נדבר.</h2>
          <p className="text-gray-400 mb-12 text-lg">
            מוכנים להתחיל את הפרויקט הבא שלכם? יש לכם שאלה?
            <br />
            השאירו פרטים ונחזור אליכם בהקדם.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 flex-row-reverse group">
              <div className="w-16 h-16 rounded-2xl bg-gray-900/60 border border-gray-700 flex items-center justify-center text-fuchsia-500 shadow-[0_0_15px_rgba(217,70,239,0.1)] group-hover:shadow-[0_0_20px_rgba(217,70,239,0.4)] group-hover:border-fuchsia-500/50 transition-all duration-300">
                <Mail size={28} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500 mb-1">מייל</div>
                <div className="text-xl font-bold text-white group-hover:text-fuchsia-400 transition-colors">sabrikdigital@gmail.com</div>
              </div>
            </div>

            <div className="flex items-center gap-6 flex-row-reverse group">
              <div className="w-16 h-16 rounded-2xl bg-gray-900/60 border border-gray-700 flex items-center justify-center text-fuchsia-500 shadow-[0_0_15px_rgba(217,70,239,0.1)] group-hover:shadow-[0_0_20px_rgba(217,70,239,0.4)] group-hover:border-fuchsia-500/50 transition-all duration-300">
                <Phone size={28} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500 mb-1">טלפון</div>
                <div className="text-xl font-bold text-white group-hover:text-fuchsia-400 transition-colors">054-472-2893</div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-gray-900/40 backdrop-blur-md border border-gray-800 p-8 rounded-3xl relative order-1 md:order-2 opacity-0 animate-slide-in" style={{ animationDelay: '0.4s' }} dir="rtl">
           {/* Glow Effect */}
           <div className="absolute -top-10 -right-10 w-40 h-40 bg-fuchsia-600 rounded-full blur-[100px] opacity-20"></div>

          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-400">שם פרטי</label>
                <input type="text" className="w-full bg-black/50 border-b border-gray-700 focus:border-fuchsia-500 p-3 outline-none transition-colors rounded-t-md text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">שם משפחה</label>
                <input type="text" className="w-full bg-black/50 border-b border-gray-700 focus:border-fuchsia-500 p-3 outline-none transition-colors rounded-t-md text-white" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400">אימייל</label>
              <input type="email" className="w-full bg-black/50 border-b border-gray-700 focus:border-fuchsia-500 p-3 outline-none transition-colors rounded-t-md text-white" />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400">סוג השירות</label>
              <select className="w-full bg-black/50 border-b border-gray-700 focus:border-fuchsia-500 p-3 outline-none transition-colors rounded-t-md text-white appearance-none">
                <option>פיתוח אתר</option>
                <option>אפליקציה</option>
                <option>עיצוב</option>
                <option>שיווק</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400">הודעה</label>
              <textarea rows={4} className="w-full bg-black/50 border-b border-gray-700 focus:border-fuchsia-500 p-3 outline-none transition-colors rounded-t-md text-white resize-none"></textarea>
            </div>

            <button type="button" className="w-full bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(217,70,239,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group">
              <span>שלח הודעה</span>
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;