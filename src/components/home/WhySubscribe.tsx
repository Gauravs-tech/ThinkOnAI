const WhySubscribe = () => {
  return (
    <section className="py-16 bg-surface-container-low/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl font-bold mb-4">Why Subscribe?</h2>
            <p className="text-zinc-500">Our intelligence filter ensures you spend less time scrolling and more time building.</p>
          </div>
          <div className="h-px flex-1 bg-outline-variant/20 mx-12 hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-6">
            <div className="p-8 h-48 rounded-xl bg-surface-container border border-outline-variant/5">
              <div className="w-full h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary border px-10 border-outline-variant/50">
                <span className="material-symbols-outlined">Curated Insights</span>
              </div>

              <p className="text-zinc-500 text-sm pt-5 leading-relaxed">We sift through thousands of papers, repositories, and tweets to bring you only the top 1% of high-signal movements.</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="p-8 h-48 rounded-xl bg-surface-container border border-outline-variant/5">
              <div className="w-full h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary border px-10 border-outline-variant/10">
                <span className="material-symbols-outlined">Daily Updates</span>
              </div>

              <p className="text-zinc-500 text-sm leading-relaxed pt-5">AI moves fast. Get a quick, 5-minute daily brief to stay updated without wasting hours scrolling.</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="p-8 h-48 rounded-xl bg-surface-container border border-outline-variant/5">
              <div className="w-full h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary border px-10 border-outline-variant/50">
                <span className="material-symbols-outlined">Practical Alpha</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed pt-5">Discover tools and frameworks you can actually use to build faster, work smarter, and stay competitive.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySubscribe;
