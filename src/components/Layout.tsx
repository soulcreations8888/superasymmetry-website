import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <a href="#home" className="flex items-center gap-3">
              <img src="/logo.png" alt="Superasymmetry" className="h-9 w-9 rounded-full" />
              <span className="text-lg md:text-xl font-bold text-slate-800">Superasymmetric Multiverse</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#paper" className="nav-link font-medium text-slate-700 hover:text-blue-600">Paper</a>
              <a href="#about" className="nav-link font-medium text-slate-700 hover:text-blue-600">About</a>
              <a href="#ideas" className="nav-link font-medium text-slate-700 hover:text-blue-600">Key Ideas</a>
              <a href="#contact" className="nav-link font-medium text-slate-700 hover:text-blue-600">Contact</a>
            </div>
            <button onClick={() => setOpen(v => !v)} className="md:hidden text-slate-700 hover:text-blue-600" aria-label="Menu">
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden bg-white border-t border-slate-200">
            {["paper","about","ideas","contact"].map(id => (
              <a key={id} href={`#${id}`} className="block px-4 py-3 hover:bg-blue-50">
                {id[0].toUpperCase()+id.slice(1)}
              </a>
            ))}
          </div>
        )}
      </nav>

      {children}

      <footer className="border-t mt-16 py-8 text-sm bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Kevin Depeauw</div>
          <div className="flex gap-4">
            <a className="underline" href="/paper.pdf" download>Download PDF</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
