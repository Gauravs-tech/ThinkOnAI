import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/60 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(61,90,254,0.08)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">

        {/* LOGO */}
        <Link to="/" className="text-xl font-bold tracking-tighter text-zinc-100 flex items-center gap-1 font-headline">
          <img className='h-10 w-10 p-0' src="/images/logo.png" alt="" />
          ThinkOnAI
        </Link>

        {/* DESKTOP MENU */}
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

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* DESKTOP SUBSCRIBE */}
          <button
            onClick={() => window.open("https://news.thinkonai.in/?modal=signup", "_blank")}
            className="hidden md:block bg-signature-gradient text-on-primary-fixed px-6 py-2 rounded-full font-semibold text-sm hover:backdrop-brightness-110 transition-all scale-95 active:scale-90 duration-200"
          >
            Subscribe
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900/95 backdrop-blur-lg px-8 py-6 flex flex-col gap-6 text-sm font-medium">

          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-zinc-300 hover:text-white"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-zinc-300 hover:text-white"
          >
            About
          </NavLink>

          <NavLink
            to="/sponsor"
            onClick={() => setIsOpen(false)}
            className="text-zinc-300 hover:text-white"
          >
            Sponsor Us
          </NavLink>

          {/* MOBILE SUBSCRIBE */}
          <button
            onClick={() => {
              window.open("https://news.thinkonai.in/?modal=signup", "_blank");
              setIsOpen(false);
            }}
            className="bg-signature-gradient text-white px-6 py-3 rounded-full font-semibold text-sm"
          >
            Subscribe
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;