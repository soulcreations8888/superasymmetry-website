import { useEffect } from "react";
import Layout from "./components/Layout";

function useHashScroll() {
  useEffect(() => {
    const go = () => {
      const id = window.location.hash.replace("#", "");
      if (!id) return;
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    go();
    window.addEventListener("hashchange", go);
    return () => window.removeEventListener("hashchange", go);
  }, []);
}

export default function App() {
  useHashScroll();

  return (
    <Layout>
      {/* HERO */}
      <section id="home" className="hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <img
            src="/logo.png"
            alt="Superasymmetry logo"
            className="mx-auto h-20 w-20 rounded-full shadow mb-5"
          />
          <h1 className="text-4xl md:text-5xl font-bold">
            The Superasymmetric Multiverse
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mt-4 opacity-95">
            A structural physics framework by{" "}
            <span className="font-semibold">Kevin Depeauw</span>.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#paper"
              className="bg-white text-blue-700 hover:bg-slate-100 font-semibold py-3 px-6 rounded-lg"
            >
              Read Paper
            </a>
            <a
              href="/paper.pdf"
              download
              className="bg-blue-800 hover:bg-blue-900 font-semibold py-3 px-6 rounded-lg"
            >
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* PAPER */}
      <section id="paper" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Paper</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-3" />
          </div>
          <div className="bg-slate-50 rounded-xl p-6 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-5">
              <div>
                <h3 className="text-2xl font-semibold">
                  The Superasymmetric Multiverse
                </h3>
                <p className="text-slate-600 mt-1">v1 • 2025 • Single author</p>
              </div>
              <div className="flex gap-3">
                <a
                  href="/paper.pdf"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
                >
                  Open PDF
                </a>
                <a
                  href="/paper.pdf"
                  download
                  className="bg-slate-200 hover:bg-slate-300 text-slate-900 font-medium py-2 px-4 rounded-lg"
                >
                  Download
                </a>
              </div>
            </div>
            <div className="w-full h-[70vh] md:h-[80vh] border rounded-lg overflow-hidden">
              <iframe
                title="Paper"
                src="/paper.pdf#view=FitH&toolbar=1"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">About the Author</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-3" />
          </div>
          <div className="mx-auto max-w-3xl text-slate-700 leading-relaxed">
            <p>
              I’m <strong>Kevin Depeauw</strong>, an independent researcher.
              Superasymmetry positions
              <em> asymmetry </em> as the generative substrate of physical law,
              unifying coherence, geometry, and conservation through an
              antisymmetric field with stable, well-posed dynamics.
            </p>
            <p className="mt-4">
              This site hosts the canonical PDF and citation. For collaboration
              or questions, see contact below.
            </p>
          </div>
        </div>
      </section>

      {/* KEY IDEAS */}
      <section id="ideas" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Key Ideas</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-slate-50 border">
              <div className="font-semibold">Asymmetry Field</div>
              <p className="text-slate-700 mt-2 text-sm">
                An antisymmetric tensor drives emergence and coherence.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-slate-50 border">
              <div className="font-semibold">Stability & Causality</div>
              <p className="text-slate-700 mt-2 text-sm">
                Hyperbolic, positive-energy regime; well-posed evolution.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-slate-50 border">
              <div className="font-semibold">Observer Interface</div>
              <p className="text-slate-700 mt-2 text-sm">
                Coherence links information, measurement, and geometry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Contact</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-3" />
          </div>
          <div className="mx-auto max-w-xl text-center">
            <p className="text-slate-700">Email:</p>
            <p className="mt-2">
              <a
                className="font-semibold text-blue-700 underline"
                href="mailto:contact@your-domain.example"
              >
                contact@your-domain.example
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
