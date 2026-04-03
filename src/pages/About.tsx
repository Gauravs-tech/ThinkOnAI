import PageTransition from '../components/common/PageTransition';
import { IoRocketSharp } from "react-icons/io5";
import { SlBookOpen } from "react-icons/sl";

const About = () => {
  return (
    <PageTransition>
      <main className="pt-16 pb-16">
        {/* Hero Section: Intentional Asymmetry */}
        <section className="max-w-7xl mx-auto px-8 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <span className="text-primary font-headline font-bold tracking-widest uppercase text-xs mb-4 block">Our Ethos</span>
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface mb-8 leading-[1.1]">
                Clear Signals <br /> in a  <span className="bg-gradient-to-r from-[#BBC3FF] to-[#3D5AFE] bg-clip-text text-transparent">Noisy World</span>
              </h1>
              <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
                ThinkOnAi was created with one simple idea: today we have endless information, but very little real insight.
                We focus on filtering out the noise and delivering only what truly matters clear, high-value intelligence for modern thinkers.
              </p>
            </div>
            <div className="lg:col-span-4 lg:pt-24">
              <div className="p-8 rounded-xl bg-surface-container-lowest border-l-2 border-primary-container">
                <p className="italic text-on-surface-variant font-medium leading-relaxed">
                  "We don’t just collect links we connect the dots and explain what matters, so you can better understand the future of technology and human potential."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision: Tonal Depth Cards */}
        <section className="bg-surface-container-low py-16 mb-16">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="w-20 h-12 rounded-lg bg-primary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">visibility</span>
                </div>
                <h2 className="text-3xl font-headline font-bold text-on-surface">Our Vision</h2>
                <p className="text-on-surface-variant leading-relaxed">
                  To become the go-to source for leaders, creators, and builders to understand the fast-changing world of AI. We aim to replace information overload with clear, curated insights that truly matter.
                </p>
              </div>
              <div className="space-y-6">
                <div className="w-32 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary"><IoRocketSharp className='h-7 w-10' />
                  </span>
                </div>
                <h2 className="text-3xl font-headline font-bold text-on-surface">Our Mission</h2>
                <p className="text-on-surface-variant leading-relaxed">
                  Our mission is to empower 1000+ thinkers with weekly insights that focus on what truly matters, not just trends. We cut through the noise to deliver clear and meaningful information.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Readers Gain: Bento Grid Inspired */}
        <section className="max-w-7xl mx-auto px-8 mb-16">
          <h2 className="text-4xl font-headline font-bold mb-16 text-center">ThinkOnAI Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 p-10 rounded-xl bg-surface-container hover:bg-surface-bright transition-colors duration-200 flex flex-col justify-between aspect-video md:aspect-auto">
              <div>
                <span className="bg-surface-container-highest text-tertiary px-3 py-1 rounded-sm text-[10px] uppercase font-bold tracking-widest mb-6 inline-block">Intelligence Badge</span>
                <h3 className="text-2xl font-headline font-bold mb-4">Depth over speed.
                </h3>
                <p className="text-on-surface-variant max-w-md">We do 10+ hours of research so you can learn everything important in just 10 minutes.</p>
              </div>
              <div className="mt-8">
                <span className="material-symbols-outlined text-primary text-5xl opacity-20"><SlBookOpen />
                </span>
              </div>
            </div>

            <div className="p-10 rounded-xl bg-surface-container hover:bg-surface-bright transition-colors duration-200">
              <div className="mb-8">
                <span className="material-symbols-outlined text-primary text-4xl">psychology</span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-4">Strategic Frameworks</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">We don't just tell you what happened; we explain why it matters and how to leverage it in your industry.</p>
            </div>

            <div className="p-10 rounded-xl bg-surface-container hover:bg-surface-bright transition-colors duration-200">
              <div className="mb-8">
                <span className="material-symbols-outlined text-primary text-4xl">Focus on what matters.
                </span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-4">No fluff. No unnecessary details.</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Just clear, practical insights to help you stay ahead and keep innovating.</p>
            </div>

            <div className="md:col-span-2 p-10 rounded-xl bg-surface-container hover:bg-surface-bright transition-colors duration-200 flex items-center gap-12">
              <div className="flex-1">
                <h3 className="text-2xl font-headline font-bold mb-4">Global Network</h3>
                <p className="text-on-surface-variant">Be part of a community of founders, engineers, and thinkers building the future of digital intelligence.</p>
              </div>
              <div className="hidden sm:block w-32 h-32 rounded-full border-4 border-outline-variant/15 overflow-hidden shrink-0">
                <img alt="Global Network" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBogoCx8eP8vMBdZFRoTEOGlNfOCysT0NrWYbPiJLdfqAs7zO8chNqs-P6PLjcmAmvr6VaU-0Udjek_aJIaWJFA25Yww_1ZB_RXKrfGfy5xVzGNfNytN_mOMTMHtzpOib1CSAPdNlHjSLISS8x0VYiQ3LEfIW11IY1AlyK-UCP1Rtyg4sGLnv4K4DjsiwEvEHMCEz6zfX9_7iPLW0o3YqUb4DeluUdEPnYZ8Jcq_wtp9upJFmjtva5bwNaBLa31IwsYvb1dc8t4vTA" />
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="max-w-4xl mx-auto px-8 mb-16 text-center">
          <div className="mb-12 inline-block">
            <div className="w-24 h-24 mx-auto rounded-full p-1 signature-gradient mb-6">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-background bg-surface-container-highest">
                <img alt="Elias Thorne" className="w-full h-full object-cover " src="./public/Profile.png" />
              </div>
            </div>
            <h2 className="text-3xl font-headline font-extrabold text-on-surface">Gaurav Shegekar</h2>
            <p className="text-primary font-label text-sm uppercase tracking-widest mt-1">Founder &amp; Chief Curator</p>
          </div>
          <p className="text-lg text-on-surface-variant leading-loose italic">
            ThinkOnAI started as a personal research project to track the fast-moving AI ecosystem. It soon became clear that many others were looking for a newsletter that respects their time. Today, we are a small but dedicated team committed to digital excellence.
          </p>
        </section>

        {/* Final CTA */}
        <section className="max-w-5xl mx-auto px-8">
          <div className="relative overflow-hidden p-16 rounded-2xl bg-surface-container-lowest text-center">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
            </div>
            <h2 className="text-4xl font-headline font-bold mb-6 relative z-10">Ready to sharpen your perspective?</h2>
            <p className="text-on-surface-variant mb-10 max-w-xl mx-auto relative z-10">Join 45,000+ subscribers receiving our curated intelligence every Tuesday morning.</p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10" onSubmit={e => e.preventDefault()}>
              <input className="bg-transparent border-0 border-b-2 border-outline-variant/40 focus:border-primary focus:ring-0 text-on-surface w-full sm:w-80 px-4 py-3 transition-all duration-200 outline-none" placeholder="Enter your email" type="email" required />
              <button type="submit" className="signature-gradient px-8 py-3 rounded-full font-bold text-on-primary-container hover:backdrop-brightness-110 transition-all">Join Aura</button>
            </form>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default About;
