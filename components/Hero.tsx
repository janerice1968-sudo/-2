
import React from 'react';

const Hero: React.FC = () => {
  const EXTERNAL_LINK = "https://www.google.com/";

  return (
    <div id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden atmosphere-gradient">
      {/* Full screen background with subtle overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/S7NSTh5T/15a8a5f4-8130-4fb1-9bc6-fed5ec35c1a1.png" 
          alt="Intimate Background" 
          className="w-full h-full object-cover scale-110 object-center transition-transform duration-[10000ms] hover:scale-100 opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-lumina-charcoal via-transparent to-lumina-charcoal opacity-80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="overflow-hidden mb-6">
            <span className="block text-[10px] tracking-[0.8em] uppercase text-red-500 font-bold fade-in drop-shadow-md">
              Midnight Only · 1-on-1 Premium Private · Global Premiere
            </span>
          </div>
          <h1 className="font-serif text-7xl md:text-[120px] leading-[0.85] text-white mb-10 fade-in [animation-delay:200ms] tracking-tighter">
            Unleash <br />
            <span className="italic font-light text-red-600">Forbidden Desires</span>
          </h1>
          <p className="max-w-lg text-lg text-white/60 font-light leading-relaxed mb-12 fade-in [animation-delay:400ms] text-balance">
            Stop suppressing your soul. At <span className="text-white font-medium">softdesireroom.com</span>, every play of light and shadow moves for you, every whisper is meant only for your ears.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 fade-in [animation-delay:600ms]">
            <a 
              href={EXTERNAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-16 py-6 bg-white text-black text-[12px] tracking-[0.5em] font-bold uppercase transition-all duration-500 hover:bg-red-600 hover:text-white shadow-2xl overflow-hidden rounded-full text-center block"
            >
              <span className="relative z-10">Start Private</span>
            </a>
            
            <button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-[11px] tracking-[0.5em] font-medium text-white/40 hover:text-white transition-colors border-b border-white/10 pb-2 hover:border-white group"
            >
              PEEK INTO UNSEEN SCENES <span className="inline-block transform group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative fade-in [animation-delay:800ms] hidden lg:block">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_80px_150px_-20px_rgba(0,0,0,1)] border border-white/5 group glass-panel">
            <img 
              src="https://i.ibb.co/Q34hhhxL/c0449d6a-e83c-44f7-b398-8e5055b2837c.png" 
              alt="Live Model Preview" 
              className="w-full h-full object-cover transform transition-transform duration-[8000ms] group-hover:scale-110 grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all"
            />
            
            {/* Floating Status Card */}
            <div className="absolute -left-12 bottom-16 glass-panel p-8 shadow-2xl transform hover:-translate-y-2 transition-transform duration-500 max-w-[320px] rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>
                <span className="text-red-500 font-bold text-[9px] tracking-widest uppercase">Live Interaction</span>
              </div>
              <div className="font-serif italic text-2xl text-white mb-2 leading-snug">
                Tonight, I am yours.
              </div>
              <div className="w-12 h-px bg-red-900/40 mt-6"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-12 flex flex-col items-center space-y-4 z-10">
        <span className="text-[10px] tracking-[0.5em] uppercase text-white/40 font-bold animate-pulse">Scroll Down</span>
        <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
