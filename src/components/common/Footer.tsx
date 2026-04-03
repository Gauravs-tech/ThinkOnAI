import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0e0e10] w-full py-12 flex justify-center items-center border-t border-zinc-800/20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8  max-w-7xl mx-auto font-body text-xs text-zinc-500">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="text-lg font-bold flex text-zinc-200 font-headline justify-center items-center gap-1"><img className='h-10 w-10' src="./public/logo.png" alt="" /> ThinkOnAI</div>
          <p className="max-w-xs leading-relaxed">The high-end editorial newsletter for the AI era. <br /> strategic, and direct.</p>
          <div className="text-zinc-500 mt-4">© 2024 Aura Intelligence. The Digital Curator.</div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="text-zinc-300 font-bold uppercase tracking-widest text-[10px]">Ecosystem</div>
          <div className="flex flex-col gap-2  justify-center items-center">
            <Link to="/" className="hover:text-[#bbc3ff] transition-colors">Privacy</Link>
            <Link to="/" className="hover:text-[#bbc3ff] transition-colors">Terms</Link>
            <Link to="/" className="hover:text-[#bbc3ff] transition-colors">Newsletter Archive</Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="text-zinc-300 font-bold uppercase tracking-widest text-[10px]">Social</div>
          <div className="flex flex-col gap-2  justify-center items-center">
            <Link to="https://www.linkedin.com/in/gaurav-shegekar" className="hover:text-[#bbc3ff] transition-colors">LinkedIn</Link>
            <Link to="https://www.instagram.com/gauravs_141?igsh=aGhmdmFpMno4b244" className="hover:text-[#bbc3ff] transition-colors">Instagram</Link>
            <Link to="https://x.com/GShegekar84152" className="hover:text-[#bbc3ff] transition-colors">Twitter (X)</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
