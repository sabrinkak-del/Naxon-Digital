import React, { useState } from 'react';
import { Mail, Phone, Send, Loader2, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          service: formData.service,
          message: formData.message
        })
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus('success');

        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          service: '',
          message: ''
        });

        setTimeout(() => setStatus('idle'), 4000);
      } else {
        console.error('Submission failed:', result);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }

    } catch (error) {
      console.error('Error sending form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="w-full min-h-screen p-8 md:p-16 relative z-10 flex flex-col items-center justify-start pt-24">
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
      
      <div className="max-w-5xl w-full flex flex-col gap-10">
        
        {/* Header Section - Moved above grid */}
        <div className="text-right dir-rtl opacity-0 animate-slide-in" style={{ animationDelay: '0.2s' }} dir="rtl">
          <h2 className="text-4xl font-black mb-6 text-white">בואו נדבר.</h2>
          <p className="text-gray-400 text-lg">
            מוכנים להתחיל את הפרויקט הבא שלכם? יש לכם שאלה?
            <br />
            השאירו פרטים ונחזור אליכם בהקדם.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Contact Info Icons */}
            <div className="text-right dir-rtl opacity-0 animate-slide-in flex flex-col justify-start space-y-8 pt-4" style={{ animationDelay: '0.3s' }} dir="rtl">
                 <div className="flex items-center gap-6 flex-row-reverse group">
                  <div className="w-16 h-16 rounded-2xl bg-gray-900/60 border border-gray-700 flex items-center justify-center text-fuchsia-500 shadow-[0_0_15px_rgba(217,70,239,0.1)] group-hover:shadow-[0_0_20px_rgba(217,70,239,0.4)] group-hover:border-fuchsia-500/50 transition-all duration-300">
                    <Mail size={28} className="group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">מייל</div>
                    <div className="text-xl font-bold text-white group-hover:text-fuchsia-400 transition-colors">naxondigital@gmail.com</div>
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

            {/* Form */}
            <div className="bg-gray-900/40 backdrop-blur-md border border-gray-800 p-8 rounded-3xl relative opacity-0 animate-slide-in" style={{ animationDelay: '0.4s' }} dir="rtl">
              {/* Glow Effect */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-fuchsia-600 rounded-full blur-[100px] opacity-20"></div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">שם פרטי</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border-b border-gray-700 focus:border-fuchsia-500 p-3 outline-none transition-colors rounded-t-md text-white placeholder-gray-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">שם משפחה</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border-b border-gray-700 focus:border-fuchsia-500 p-3 outline-none transition-colors rounded-t-md text-white placeholder-gray-600" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400">אימייל</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border-b border-gray-700 focus:border-fuchsia-500 p-3 outline-none transition-colors rounded-t-md text-white placeholder-gray-600" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400">סוג השירות</label>
                  <div className="relative">
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className={`w-full bg-black/50 border-b border-gray-700 focus:border-fuchsia-500 p-3 outline-none transition-colors rounded-t-md appearance-none cursor-pointer ${formData.service ? 'text-white' : 'text-gray-500'}`}
                    >
                      <option value="" disabled>בחר שירות</option>
                      <option value="פיתוח אתר" className="bg-gray-900 text-white">פיתוח אתר</option>
                      <option value="אפליקציה" className="bg-gray-900 text-white">אפליקציה</option>
                      <option value="עיצוב" className="bg-gray-900 text-white">עיצוב</option>
                      <option value="שיווק" className="bg-gray-900 text-white">שיווק</option>
                    </select>
                    <div className="absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none text-gray-400">
                      <ChevronDown size={18} />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400">הודעה</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4} 
                    className="w-full bg-black/50 border-b border-gray-700 focus:border-fuchsia-500 p-3 outline-none transition-colors rounded-t-md text-white resize-none placeholder-gray-600"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading' || status === 'success'}
                  className={`w-full font-bold py-4 rounded-xl transition-all transform flex items-center justify-center gap-2 group relative overflow-hidden
                    ${status === 'success' ? 'bg-green-600 text-white' : 
                      status === 'error' ? 'bg-red-600 text-white' : 
                      'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white hover:shadow-[0_0_20px_rgba(217,70,239,0.4)] hover:-translate-y-1'
                    }
                  `}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>שולח...</span>
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle size={18} />
                      <span>ההודעה נשלחה!</span>
                    </>
                  ) : status === 'error' ? (
                    <>
                      <AlertCircle size={18} />
                      <span>שגיאה, נסה שוב</span>
                    </>
                  ) : (
                    <>
                      <span>שלח הודעה</span>
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;