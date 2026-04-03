import { FaArrowRight } from "react-icons/fa";
import Card from '../common/Card';

const FeaturedContent = () => {
  return (
    <section className="py-16 px-8 max-w-7xl mx-auto" id="latest-issues">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-2">Latest Newsletters</h2>
          <p className="text-zinc-500 text-sm">The newest AI tools and frameworks shaping the future.</p>
        </div>
      </div>

      <Card />

      <div className="mt-16 text-center">
        <a className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest hover:gap-3 transition-all" href="https://news.thinkonai.in/" target="_blank" rel="noopener noreferrer">
          Show more <span className="material-symbols-outlined text-sm"><FaArrowRight />
          </span>
        </a>
      </div>
    </section>
  );
};

export default FeaturedContent;
