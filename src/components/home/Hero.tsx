

const Hero = () => {
  return (
    <section className="relative px-8 py-10 md:py-10 overflow-hidden max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 -right-24 w-[500px] h-[500px] bg-primary-container/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="flex-1 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-surface-container-highest mb-6 border border-outline-variant/15">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-[10px] uppercase tracking-widest font-bold text-tertiary">New Edition Live</span>
        </div>

        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-6 text-white">
          Stay Ahead <br /><span className="bg-gradient-to-r from-[#BBC3FF] to-[#3D5AFE] bg-clip-text text-transparent">in AI.</span>
        </h1>

        <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed">
          A smart platform that gives you only the most important updates in artificial intelligence, no unnecessary information, just useful insights to help you understand and stay ahead in the AI world.
        </p>

        <div className="flex justify-between">
          {/* ✅ NEW VALUE SECTION */}
          <div className="flex flex-col gap-4 mb-8 text-sm text-zinc-400">
            <p>⚡ Curated AI tools & frameworks</p>
            <p>🧠 Deep insights in simple language</p>
            <p>🚀 Stay ahead in just 5 minutes/day</p>
          </div>

          {/* ✅ CTA BUTTON */}
          <div className="flex justify-center items-center ">
            <a
              href="https://news.thinkonai.in/?modal=signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-signature-gradient text-on-primary-fixed px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all"
            >
              Join 100+ Readers
            </a>
          </div>

        </div>


        <p className="mt-4 text-xs text-zinc-500 font-label">Join the world's leading researchers, developers, and founders.</p>
      </div>

      <div className="flex-1 relative z-10 hidden md:block">
        <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-2xl shadow-primary/10 bg-surface-container-low">
          <img
            alt="Abstract AI Visualization"
            className="w-full h-full object-cover mix-blend-lighten"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWj-LDERS-BjWJ_JQiliB5KWKycujYpNLL2ZOSl6m9swi4Zj9aR2X3cNJhyVJQRLJBOIEaKHNapAPdfqgbe0jOQ16w5MeDOrVQkCK_Lv2LPEwmcFIiHu-FflIXd7WK4CXy4GbND6W5fWj0dt1mfqDCWCdyKMBLZCynN9hk8ob-QWUS_7jlyDupwBPe3c2K80jvMMl8gn6HgA66xRikMt9qCPpxOqxvljgFXrpYpSpKiPAhVZMe66OfPqYeR3PzDgK5crzsBwAQD8U"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 p-6 bg-surface-container-highest/60 backdrop-blur-md rounded-lg border border-outline-variant/15">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Latest Insight</span>
            </div>
            <p className="text-sm font-medium text-white italic">"Large Language Models are changing from simple tools into smarter systems that can think, adapt, and work with humans more naturally."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
