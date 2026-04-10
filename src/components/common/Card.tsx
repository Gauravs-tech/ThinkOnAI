import { useEffect, useState, forwardRef } from 'react';
import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import { FaArrowRight } from 'react-icons/fa';

export const CardWrapper = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "bg-surface-container-low rounded-2xl p-7 transition-all duration-300 border border-outline-variant/10 flex flex-col h-full card-hover hover:bg-surface-container",
        className
      )}
      {...props}
    />
  )
);
CardWrapper.displayName = 'CardWrapper';

interface FeedItem {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  description: string;
  enclosure?: string;
  categoryNode?: string;
}

export default function Card() {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ FILTER STATE
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await fetch('https://rss.beehiiv.com/feeds/k7WuwDf1hn.xml');
        const text = await response.text();
        const parser = new window.DOMParser();
        const xmlDoc = parser.parseFromString(text, 'text/xml');
        const itemNodes = xmlDoc.querySelectorAll('item');

        const feedItems = Array.from(itemNodes).map((node, index) => {
          const title = node.querySelector('title')?.textContent || 'No title';
          const description = node.querySelector('description')?.textContent || 'No description';

          let categoryNode = 'General';
          const categoryEl = node.getElementsByTagName('category')[0];
          if (categoryEl && categoryEl.textContent) {
            categoryNode = categoryEl.textContent.trim();
          }

          let enclosure = '';
          const enclosureNode = node.getElementsByTagName('enclosure')[0];
          if (enclosureNode) {
            enclosure = enclosureNode.getAttribute('url') || '';
          }

          const link = node.querySelector('link')?.textContent || '#';
          const pubDate = node.querySelector('pubDate')?.textContent || '';

          const date = pubDate ? new Date(pubDate).toLocaleDateString('en-US', {
            month: 'short', day: 'numeric', year: 'numeric'
          }) : 'Unknown Date';

          return {
            id: String(index),
            enclosure,
            title,
            link,
            pubDate: date,
            description,
            categoryNode
          };
        });

        setItems(feedItems.slice(0, 20)); // more items for filtering
      } catch (error) {
        console.error("Error fetching RSS feed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, []);

  // ✅ FILTER LOGIC
  const filteredItems = items.filter(item => {
    if (activeFilter === 'All') return true;

    return item.categoryNode?.toLowerCase() === activeFilter.toLowerCase();
  });

  if (loading) {
    return <div className="text-center py-12 text-zinc-400 font-headline">Loading latest issues...</div>;
  }

  return (
    <>
      {/* ✅ FILTER BUTTONS */}
      <div className="flex flex-wrap gap-3 mb-8 justify-start">
        {['All', 'Ai Tool', 'Ai Framework', 'Ai News'].map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all",
              activeFilter === filter
                ? "bg-primary text-white border-primary"
                : "bg-surface-container-low text-zinc-400 border-outline-variant/20 hover:bg-surface-container"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* ✅ GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300">
        {filteredItems.map(item => (
          <CardWrapper key={item.id} className="group">
            <div className="flex justify-between items-start mb-6">
              <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border bg-blue-500/10 text-blue-400 border-blue-500/20">
                {item.categoryNode}
              </span>
              <span>{item.pubDate}</span>
            </div>

            {item.enclosure && (
              <img
                src={item.enclosure}
                alt={item.title}
                className="w-full h-44 object-cover rounded-xl mb-5"
              />
            )}

            <div className="grow">
              <h3 className="font-headline flex justify-center items-center text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-zinc-500 flex justify-center items-center text-sm leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <div className=" border-t border-outline-variant/10 flex flex-col gap-4 mt-auto">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 rounded-lg bg-surface-container-high text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300"
              >
                Read More <FaArrowRight />
              </a>
            </div>
          </CardWrapper>
        ))}
      </div>
    </>
  );
}