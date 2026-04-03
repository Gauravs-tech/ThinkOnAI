import PageTransition from '../components/common/PageTransition';
import { IoRocketSharp } from "react-icons/io5";

const Sponsor = () => {
  return (
    <PageTransition>
      <main className="pt-16 pb-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-surface-container-highest text-tertiary text-[10px] uppercase tracking-widest font-bold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
              Partnership Opportunities 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter mb-8 leading-[0.95] text-on-surface">
              Connect with the <span className="bg-gradient-to-r from-[#BBC3FF] to-[#3D5AFE] bg-clip-text text-transparent">Architects</span> of Tomorrow.
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              ThinkOnAI reaches a focused audience of AI researchers, tech leaders, and digital creators who prefer valuable insights over unnecessary noise.            </p>
            <div className="flex flex-wrap gap-4">
              <a className="signature-gradient px-8 py-4 rounded-full font-bold text-on-primary-fixed hover:backdrop-brightness-120 transition-all" href="#contact">
                Contact for Sponsorship
              </a>
              <a className="px-8 py-4 rounded-full font-bold border border-outline-variant/30 text-on-surface hover:bg-surface-container-high transition-all" href="#stats">
                View Audience Deck
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-surface-container-lowest border border-outline-variant/10 shadow-2xl">
              <img alt="Abstract digital network" className="w-full h-full object-cover opacity-60 mix-blend-lighten" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_isAH2_ZeguE1cGXE216Us21nZ2aADHEX7hp6qmcYiBczRTHigWOytVv8SKXdEvjzxd_Dnb593Bww94-HnfKMZZWneNs389D3j6dmuF12NXPegtPkAvFSvQF9w-4x5x_z8gDcxlDKUozxF-PHFpISdCxIeGBSgNOGLsPRhaACymirHAvTW7x4CAyywL8cp1XltEmq5FT5Byx-k2keVWjebh84TeAcvHTlO3B5wJWPuws649JigDizwcxxJcBCRIosoduwK85huGg" />
            </div>
            <div className="absolute -bottom-6 -left-6 p-6 bg-surface-container-high glass-effect rounded-xl border border-outline-variant/20 shadow-xl max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary">trending_up</span>
                <span className="text-xs font-bold tracking-widest text-tertiary uppercase">High Signal</span>
              </div>
              <p className="text-sm text-on-surface-variant italic">"The most engaged tech community I've partnered with in a decade."</p>
            </div>
          </div>
        </section>

        {/* Audience Stats: Bento Grid */}
        <section className="max-w-7xl mx-auto px-8 mb-16" id="stats">
          <h2 className="text-3xl font-headline font-bold mb-12 text-center">Audience Reach &amp; Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-2xl border border-outline-variant/5 flex flex-col justify-between">
              <div>
                <span className="text-primary-fixed-dim text-sm font-bold uppercase tracking-widest block mb-2">Total Reach</span>
                <div className="text-6xl font-headline font-extrabold text-on-surface mb-4">1k+</div>
              </div>
              <p className="text-on-surface-variant">Active monthly readers across newsletter and platform ecosystem.</p>
            </div>

            <div className="bg-surface-container p-10 rounded-2xl border border-outline-variant/5">
              <span className="text-tertiary text-sm font-bold uppercase tracking-widest block mb-2">Open Rate</span>
              <div className="text-4xl font-headline font-extrabold text-on-surface mb-4">42.8%</div>
              <p className="text-xs text-on-surface-variant leading-relaxed">2x Industry average for technology newsletters.</p>
            </div>

            <div className="bg-surface-container p-10 rounded-2xl border border-outline-variant/5">
              <span className="text-secondary text-sm font-bold uppercase tracking-widest block mb-2">CTR</span>
              <div className="text-4xl font-headline font-extrabold text-on-surface mb-4">8.4%</div>
              <p className="text-xs text-on-surface-variant leading-relaxed">High intent clicks on curated recommendations.</p>
            </div>

            <div className="md:col-span-4 bg-surface-container-high p-10 rounded-2xl border border-outline-variant/5 grid md:grid-cols-3 gap-8">
              <div className="flex gap-4">
                <div className="w-16 h-12 rounded-lg bg-surface-variant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">school</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-on-surface">Decision Makers</div>
                  <p className="text-sm text-on-surface-variant">65% of audience are VP-level or higher in tech.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-surface-variant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary"><IoRocketSharp />
                  </span>
                </div>
                <div>
                  <div className="text-lg font-bold text-on-surface">Early Adopters</div>
                  <p className="text-sm text-on-surface-variant">80% identify as professional technologists.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-surface-variant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">public</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-on-surface">Global Focus</div>
                  <p className="text-sm text-on-surface-variant">Top regions: US (45%), UK (15%), Germany (12%).</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsorship Formats */}
        <section className="bg-surface-container-lowest py-16 mb-16 flex justify-center items-center">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16 flex flex-col justify-center items-center">
              <h2 className="text-4xl flex justify-center items-center font-headline font-bold mb-4">Ad Formats</h2>
              <p className="text-on-surface-variant max-w-2xl">We offer high-integration placements designed to provide value to our readers while delivering results for your brand.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              <div className="bg-background p-8 rounded-xl border border-outline-variant/10 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-4xl font-bold mb-2">Starter Plan</h3>

                  <span className="material-symbols-outlined text-primary text-xl mb-8">Starter Plan</span>


                  <ul className="text-sm text-on-surface-variant space-y-2 mt-4">
                    <li>• Your product shown in our newsletter</li>
                    <li>• Short description with your link</li>
                    <li>• Reach AI audience</li>
                  </ul>

                </div>

                <div className="mt-auto pt-4 border-t border-outline-variant/10">
                  <div className="text-xs text-on-surface-variant mb-1 uppercase tracking-tighter">
                    Investment Starting At
                  </div>

                  <div className="text-2xl font-headline font-bold text-primary mb-4">
                    $250 <span className="text-sm font-normal text-on-surface-variant">/ issue</span>
                  </div>

                  <button
                    onClick={() => window.open("https://news.thinkonai.in/?modal=signup", "_blank")}
                    className="w-full py-2 rounded-lg bg-signature-gradient text-white text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all"
                  >
                    Book Starter Plan
                  </button>
                </div>
              </div>

              <div className="bg-background p-8 rounded-xl border border-outline-variant/10 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-4xl font-bold mb-2">Growth Plan</h3>

                  <span className="material-symbols-outlined text-primary text-xl mb-8">trending_up</span>

                  <ul className="text-sm text-on-surface-variant space-y-2 mt-4">
                    <li>• Top section placement in newsletter</li>
                    <li>• Bigger feature with more details</li>
                    <li>• Logo + strong call-to-action</li>
                  </ul>
                </div>

                <div className="mt-auto pt-4 border-t border-outline-variant/10">
                  <div className="text-xs text-on-surface-variant mb-1 uppercase tracking-tighter">
                    Investment Starting At
                  </div>

                  <div className="text-2xl font-headline font-bold text-primary mb-4">
                    $500 <span className="text-sm font-normal text-on-surface-variant">/ issue</span>
                  </div>

                  <button
                    onClick={() => window.open("https://news.thinkonai.in/?modal=signup", "_blank")}
                    className="w-full py-2 rounded-lg bg-signature-gradient text-white text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all"
                  >
                    Book Growth Plan
                  </button>
                </div>
              </div>

              <div className="bg-background p-8 rounded-xl border border-outline-variant/10 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-4xl font-bold mb-2">Pay Per Click</h3>

                  <span className="material-symbols-outlined text-primary text-xl mb-8">ads_click</span>


                  <ul className="text-sm text-on-surface-variant space-y-2 mt-4">
                    <li>• Real AI audience (builders & founders)</li>
                    <li>• No wasted money on views</li>
                    <li>• Pay only for actual results</li>
                  </ul>


                </div>

                <div className="mt-auto pt-4 border-t border-outline-variant/10">
                  <div className="text-xs text-on-surface-variant mb-1 uppercase tracking-tighter">
                    Pricing
                  </div>

                  <div className="text-2xl font-headline font-bold text-primary mb-4">
                    $2 <span className="text-sm font-normal text-on-surface-variant">/ click</span>
                  </div>

                  <button
                    onClick={() => window.open("https://news.thinkonai.in/?modal=signup", "_blank")}
                    className="w-full py-2 rounded-lg bg-signature-gradient text-white text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all"
                  >
                    Start Campaign ($2/click)
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-7xl mx-auto px-8" id="contact">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="bg-background/60 backdrop-blur-xl border border-outline-variant/10 rounded-2xl p-8 md:p-12 shadow-lg">

              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6 text-white leading-tight">
                Let’s Build a <span className="text-primary">High-Signal Partnership</span>
              </h2>

              <p className="text-on-surface-variant text-base md:text-lg mb-10 max-w-xl leading-relaxed">
                Reach creators and builders shaping the future of AI. Tell us about your product and goals we’ll help you get in front of the right audience.
              </p>

              {/* FEATURES */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* CARD 1 */}
                <div className=" gap-4 p-5 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all">
                  <div className=" h-10 w-full mb-4 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="flex justify-center items-center material-symbols-outlined">verified</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Curated Fit</h4>
                    <p className="text-sm text-on-surface-variant">
                      We only work with brands that truly add value to our audience.
                    </p>
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="gap-4 p-5 rounded-xl border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container transition-all">
                  <div className="h-10 w-full mb-4 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">monitoring</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Transparent Reporting</h4>
                    <p className="text-sm text-on-surface-variant">
                      Get full analytics and performance insights after every campaign.
                    </p>
                  </div>
                </div>

              </div>

              {/* CTA */}
              <div className="mt-10 flex justify-center items-center">
                <button
                  onClick={() => window.open("https://news.thinkonai.in/?modal=signup", "_blank")}
                  className="bg-signature-gradient px-8 py-3 rounded-full text-white font-semibold text-sm hover:scale-105 active:scale-95 transition-all"
                >
                  Start Partnership
                </button>
              </div>

            </div>

            <div className="bg-surface-container p-8 md:p-12 rounded-2xl border border-outline-variant/10 shadow-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Name</label>
                    <input className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-2 text-on-surface placeholder:text-outline-variant transition-all outline-none" placeholder="Alex Chen" type="text" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Company</label>
                    <input className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-2 text-on-surface placeholder:text-outline-variant transition-all outline-none" placeholder="Nexus AI" type="text" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Business Email</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-2 text-on-surface placeholder:text-outline-variant transition-all outline-none" placeholder="alex@nexus.ai" type="email" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Interested In</label>
                  <select className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-2 text-on-surface appearance-none transition-all outline-none">
                    <option className="bg-surface-container">Deep Dive Feature</option>
                    <option className="bg-surface-container">Prime Shoutout</option>
                    <option className="bg-surface-container">Tool Spotlight</option>
                    <option className="bg-surface-container">Custom Package</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Message</label>
                  <textarea className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-2 text-on-surface placeholder:text-outline-variant transition-all resize-none outline-none" placeholder="Tell us about your campaign goals..." rows={4}></textarea>
                </div>
                <button className="w-full signature-gradient py-4 rounded-full font-bold text-on-primary-fixed hover:backdrop-brightness-110 shadow-lg transition-all" type="submit">
                  Submit Partnership Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Sponsor;
