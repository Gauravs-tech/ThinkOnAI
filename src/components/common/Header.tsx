import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/60 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(61,90,254,0.08)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-bold tracking-tighter text-zinc-100 flex items-center gap-1 font-headline">
          <img className='h-10 w-10 p-0' src="./public/logo.png" alt="" />
          <span className="material-symbols-outlined p-0 text-[#3D5AFE]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}></span>
          ThinkOnAI
        </Link>
        <div className="hidden md:flex items-center gap-8 font-headline text-sm tracking-tight font-medium">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? 'text-[#bbc3ff] font-semibold'
                : 'text-zinc-400 hover:text-zinc-100 transition-colors'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-[#bbc3ff] font-semibold'
                : 'text-zinc-400 hover:text-zinc-100 transition-colors'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/sponsor"
            className={({ isActive }) =>
              isActive
                ? 'text-[#bbc3ff] font-semibold'
                : 'text-zinc-400 hover:text-zinc-100 transition-colors'
            }
          >
            Sponsor Us
          </NavLink>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => window.open("https://news.thinkonai.in/?modal=signup", "_blank")}
            className="bg-signature-gradient text-on-primary-fixed px-6 py-2 rounded-full font-semibold text-sm hover:backdrop-brightness-110 transition-all scale-95 active:scale-90 duration-200"
          >
            Subscribe
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
