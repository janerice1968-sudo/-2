import React from 'react';

const Footer: React.FC = () => {
  const trackingLink = "https://www.google.com";

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-red-950/20 px-6 pt-40 pb-20 backdrop-blur-xl">
       <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-red-600/40 to-transparent"></div>
      
      <div className="mx-auto max-w-7xl">
        <div className="mb-32 grid grid-cols-1 gap-24 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-12 flex cursor-pointer items-center gap-4" onClick={() => window.location.href = trackingLink}>
              <span className="font-serif text-5xl font-bold text-red-500 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">D</span>
              <div className="flex flex-col leading-none opacity-60">
                <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-white">Soft Desire Room</span>
                <span className="mt-2 text-[8px] font-medium italic uppercase tracking-[0.7em] text-red-200">The Desire Unfolds</span>
              </div>
            </div>
            <p className="mb-16 max-w-sm font-serif text-base italic leading-relaxed text-white/60">
              "A whisper in the dark, a lingering touch on the skin. Soft Desire Room is the ultimate destination for those who seek the extraordinary in the ordinary."
            </p>
            <div className="flex gap-12 opacity-40">
               <a href={trackingLink} className="cursor-pointer text-[9px] font-bold uppercase tracking-[0.4em] text-white transition-all hover:text-red-400 hover:opacity-100">XT</a>
               <a href={trackingLink} className="cursor-pointer text-[9px] font-bold uppercase tracking-[0.4em] text-white transition-all hover:text-red-400 hover:opacity-100">IG</a>
               <a href={trackingLink} className="cursor-pointer text-[9px] font-bold uppercase tracking-[0.4em] text-white transition-all hover:text-red-400 hover:opacity-100">TG</a>
            </div>
          </div>
          
          <div>
            <h4 className="mb-12 text-[11px] font-bold uppercase tracking-[0.4em] text-white/70">The Entrance</h4>
            <ul className="space-y-8 text-[12px] font-medium uppercase tracking-[0.3em] text-white/40">
              <li className="cursor-pointer transition-colors hover:text-white/80"><a href={trackingLink}>Live Rooms</a></li>
              <li className="cursor-pointer transition-colors hover:text-white/80"><a href={trackingLink}>Forbidden Spaces</a></li>
              <li className="cursor-pointer transition-colors hover:text-white/80"><a href={trackingLink}>Curated Whispers</a></li>
              <li className="cursor-pointer transition-colors hover:text-white/80"><a href={trackingLink}>Shadow Events</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-12 text-[11px] font-bold uppercase tracking-[0.4em] text-white/70">The Veil</h4>
            <ul className="space-y-8 text-[12px] font-medium uppercase tracking-[0.3em] text-white/40">
              <li className="cursor-pointer transition-colors hover:text-white/80"><a href={trackingLink}>Discretion Vault</a></li>
              <li className="cursor-pointer transition-colors hover:text-white/80"><a href={trackingLink}>Guest Sanctuary</a></li>
              <li className="cursor-pointer transition-colors hover:text-white/80"><a href={trackingLink}>The Concierge</a></li>
              <li className="cursor-pointer transition-colors hover:text-white/80"><a href={trackingLink}>Ghost Identity</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-between gap-12 border-t border-white/10 pt-20 md:flex-row">
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/30">
            &copy; 2025 SOFT DESIRE ROOM CURATIONS. SURRENDER TO THE DESIRE.
          </p>
          <div className="flex items-center gap-12 opacity-30">
            <a href={trackingLink} className="text-[10px] font-bold uppercase tracking-[0.4em] text-white transition-colors hover:text-red-400">Ethical Expression</a>
            <a href={trackingLink} className="text-[10px] font-bold uppercase tracking-[0.4em] text-white transition-colors hover:text-red-400">18+ Discretion Required</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;