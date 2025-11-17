import { useEffect, useState } from "react";

type LayoutProps = {
  children: React.ReactNode;
  onNavHome?: () => void;
  onNavPaper?: () => void;
  onNavCitation?: () => void;
};

export default function Layout({
  children,
  onNavHome,
  onNavPaper,
  onNavCitation,
}: LayoutProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // go to home + scroll to section id (about, ideas, contact)
  const goSection = (id: "about" | "ideas" | "contact") => {
    if (onNavHome) onNavHome();
    setOpen(false);
    setTimeout(() => {
      window.location.hash = `#${id}`;
    }, 0);
  };

  const goHome = () => {
    if (onNavHome) onNavHome();
    setOpen(false);
    setTimeout(() => {
      window.location.hash = "#home";
    }, 0);
  };

  const goPaper = () => {
    if (onNavPaper) onNavPaper();
    setOpen(false);
  };

  const goCitation = () => {
    if (onNavCitation) onNavCitation();
    setOpen(false);
  };

  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo → home */}
            <button
              type="button"
              onClick={goHome}
              className="flex items-center gap-3"
            >
              <img
                src="/logo.png"
                alt="Superasymmetry"
                className="h-9 w-9 rounded-full"
              />
              <span className="text-lg md:text-xl font-bold text-slate-800">
                Superasymmetric Multiverse
              </span>
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              <button
                type="button"
                onClick={goPaper}
                className="nav-link font-medium text-slate-700 hover:text-blue-600"
              >
                Paper
              </button>
              <button
                type="button"
                onClick={() => goSection("about")}
                className="nav-link font-medium text-slate-700 hover:text-blue-600"
              >
                About
              </button>
              <button
                type="button"
                onClick={() => goSection("ideas")}
                className="nav-link font-medium text-slate-700 hover:text-blue-600"
              >
                Key Ideas
              </button>
              <button
                type="button"
                onClick={() => goSection("contact")}
                className="nav-link font-medium text-slate-700 hover:text-blue-600"
              >
                Contact
              </button>
              <button
                type="button"
                onClick={goCitation}
                className="nav-link font-medium text-slate-700 hover:text-blue-600"
              >
                Citation
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden text-slate-700 hover:text-blue-600"
              aria-label="Menu"
            >
              <svg
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <button
              type="button"
              onClick={goPaper}
              className="block w-full text-left px-4 py-3 hover:bg-blue-50"
            >
              Paper
            </button>
            <button
              type="button"
              onClick={() => goSection("about")}
              className="block w-full text-left px-4 py-3 hover:bg-blue-50"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => goSection("ideas")}
              className="block w-full text-left px-4 py-3 hover:bg-blue-50"
            >
              Key Ideas
            </button>
            <button
              type="button"
              onClick={() => goSection("contact")}
              className="block w-full text-left px-4 py-3 hover:bg-blue-50"
            >
              Contact
            </button>
            <button
              type="button"
              onClick={goCitation}
              className="block w-full text-left px-4 py-3 hover:bg-blue-50"
            >
              Citation
            </button>
          </div>
        )}
      </nav>

      {children}

      <footer className="border-t mt-16 py-8 text-sm bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Kevin Depeauw</div>
          <div className="flex gap-4">
            <a className="underline" href="/paper.pdf" download>
              Download PDF
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
