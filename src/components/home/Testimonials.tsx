const Testimonials = () => {
  return (
    <section className="py-16 bg-surface-container-low/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold mb-4">Trusted by the best</h2>
          <p className="text-zinc-500">From solo hackers to Fortune 500 executives.</p>
        </div>

        <div className="flex justify-center items-center">
          <div className="p-8 rounded-xl bg-surface-container border border-outline-variant/5">
            <div className="flex gap-1 text-primary mb-4">
              {[1, 2, 3, 4, 5].map(i => (
                <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <p className="text-on-surface-variant italic mb-6 leading-relaxed">"Aura is my secret weapon. I don't follow anyone else anymore. The signal-to-noise ratio is unbeatable."</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden">
                <img alt="Subscriber Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALkO5aOj2kqA23vM3W74vC_SJlPStzja5KTQWIxTETXqSnJ0yECwDgPM-xEZ-E7SFluI7RlJDFn9Ux-how2EVNduR3w-hLJ95gMv3eoU6_S0MPThFOwsykxnZXO8HoeJWM1Mw45xPpHBPUd_rhKMtk80106RumkFP0dgUoHd8Ak3M-zvk0YPs-el8vT2nEnm_sJj0uNdw7vQQMhif-PlRPDLn1M7FZEnTZFusLaCdUG_-q8gJav5SLbufgpuf6wdAELBsmURMzOMA" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-white">David K.</h5>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Lead Engineer @ TechFlow</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Testimonials;
