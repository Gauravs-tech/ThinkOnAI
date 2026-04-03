const CTA = () => {
  return (
    <section className="py-16 px-8">
      <div className="max-w-4xl mx-auto bg-signature-gradient p-12 md:p-20 rounded-4xl text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-zinc-950/20 backdrop-blur-[2px]"></div>
        <div className="relative z-10">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-primary-fixed mb-6 tracking-tight">The future is being written in code.</h2>
          <p className="text-on-primary-fixed/80 text-lg mb-10 max-w-xl mx-auto">Join the intelligence circle today and never miss a critical development in the AI revolution.</p>

          <button
            onClick={() => window.open("https://news.thinkonai.in/?modal=signup", "_blank")}
            className="bg-white text-primary-container px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-zinc-100 transition-all"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
