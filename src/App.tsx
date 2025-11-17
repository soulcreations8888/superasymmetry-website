import { useEffect, useState } from "react";
import Layout from "./components/Layout";

type View = "home" | "paper";

/** Smooth scrolling for anchor links on the home view */
function useHashScroll(enable: boolean) {
  useEffect(() => {
    if (!enable) return;

    const go = () => {
      const id = window.location.hash.replace("#", "");
      if (!id) return;
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    go();
    window.addEventListener("hashchange", go);
    return () => window.removeEventListener("hashchange", go);
  }, [enable]);
}

/** HOME / ONE-PAGER VIEW (hero + about + ideas + contact) */
function HomeView({ onReadPaper }: { onReadPaper: () => void }) {
  return (
    <>
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
            <button
              onClick={onReadPaper}
              className="bg-white text-blue-700 hover:bg-slate-100 font-semibold py-3 px-6 rounded-lg"
            >
              Read Paper
            </button>
            <a
              href="/paper.pdf"
              download
              className="bg-blue-800 hover:bg-blue-900 font-semibold py-3 px-6 rounded-lg inline-flex items-center justify-center text-white"
            >
              Download PDF
            </a>
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

          <div className="mx-auto max-w-3xl text-slate-700 leading-relaxed space-y-4">
            <p>
              Kevin Depeauw approaches theoretical work from a place of clarity,
              intuitive structure-sense, and a natural ability to recognize
              patterns that hold truth and coherence. He is not trained as a
              physicist or mathematician in the academic tradition; instead, his
              strength lies in perceiving fundamental relationships directly —
              the way ideas, fields, and asymmetries “fit together” at the
              deepest structural level.
            </p>

            <p>
              This intuitive orientation has shaped Superasymmetry from the
              beginning. Rather than starting from established theories, Kevin
              focuses on what is internally consistent, logically unavoidable,
              and aligned with the underlying architecture of reality as he
              perceives it. He works by following coherence, removing
              contradictions, and refining the model until only the essential
              framework remains.
            </p>

            <p>
              In daily life, Kevin is someone people come to for clarity,
              grounding, and energetic alignment. His ability to feel when
              something is true or structurally off has always guided his work,
              both personally and conceptually. This same internal compass is
              what allowed him to build a unified framework like Superasymmetry
              without relying on academic conventions.
            </p>

            <p>
              The model presented here reflects Kevin’s completed formulation of
              the framework. Further exploration or extension of its
              implications may arise naturally when questions, dialogue, or
              collaboration invite deeper examination of specific aspects of the
              theory.
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
            {/* IDEA 1 */}
            <div className="p-6 rounded-xl bg-slate-50 border">
              <div className="font-semibold">
                Asymmetry as the Origin of Reality
              </div>
              <p className="text-slate-700 mt-2 text-sm">
                Reality begins with directional imbalance — not symmetry, not
                equilibrium. This foundational asymmetry generates motion,
                separation, and the initial conditions required for any form or
                structure to arise.
              </p>
            </div>

            {/* IDEA 2 */}
            <div className="p-6 rounded-xl bg-slate-50 border">
              <div className="font-semibold">
                Coherence Arises from Alignment
              </div>
              <p className="text-slate-700 mt-2 text-sm">
                Potential becomes structure when the field aligns through
                recognition and resonance. Conscious focus and observation act
                as stabilizing influences, guiding unresolved asymmetry toward
                coherent form.
              </p>
            </div>

            {/* IDEA 3 */}
            <div className="p-6 rounded-xl bg-slate-50 border">
              <div className="font-semibold">
                Physical Law Emerges from Asymmetry Resolution
              </div>
              <p className="text-slate-700 mt-2 text-sm">
                Energy, geometry, forces, and time arise from how imbalance
                resolves across scales. The laws of physics are stable patterns
                formed as the field minimizes internal tension and organizes
                itself.
              </p>
            </div>

            {/* IDEA 4 */}
            <div className="p-6 rounded-xl bg-slate-50 border">
              <div className="font-semibold">
                Geometry Is a Result, Not a Premise
              </div>
              <p className="text-slate-700 mt-2 text-sm">
                Spatial relationships, dimensional structure, and curvature
                emerge only after coherence is established. Geometry forms as a
                consequence of the field’s organization, not as a pre-existing
                container.
              </p>
            </div>

            {/* IDEA 5 */}
            <div className="p-6 rounded-xl bg-slate-50 border">
              <div className="font-semibold">
                The Observer Is Part of the Field
              </div>
              <p className="text-slate-700 mt-2 text-sm">
                Perception, measurement, and awareness interact directly with
                the field and influence coherence. The observer participates
                structurally and helps shape outcomes through resonance and
                alignment.
              </p>
            </div>

            {/* IDEA 6 — CARBON */}
            <div className="p-6 rounded-xl bg-slate-50 border">
              <div className="font-semibold">
                Carbon (666) — The Basis of Material Structure
              </div>
              <p className="text-slate-700 mt-2 text-sm">
                6 electrons, 6 protons, 6 neutrons — the atomic structure of
                carbon. The first stable asymmetric pattern of matter, forming
                the template for material structure and the foundation of
                physical form within this construct.
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

          <div className="mx-auto max-w-xl text-center space-y-2">
            <p className="text-slate-700">Email:</p>

            <p>
              <a
                className="font-semibold text-blue-700 underline"
                href="mailto:superasymmetry666@gmail.com"
              >
                superasymmetry666@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

/** FULL PAPER VIEW (separate page with back button, iframe reader) */
function PaperView({ onBack }: { onBack: () => void }) {
  return (
    <section className="py-8 md:py-12 bg-slate-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="mb-6 inline-flex items-center text-blue-700 hover:text-blue-900 text-sm font-medium"
        >
          <span className="mr-2 text-lg">←</span> Back to overview
        </button>

        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold">
                The Superasymmetric Multiverse
              </h1>
              <p className="text-slate-600 mt-1 text-sm">
                v1 • 2025 • Single author • Kevin Depeauw
              </p>
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

          <div className="w-full h-[75vh] border rounded-lg overflow-hidden">
            <iframe
              title="The Superasymmetric Multiverse"
              src="/paper.pdf#view=FitH&toolbar=0&navpanes=0"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [view, setView] = useState<View>("home");

  // enable smooth hash scrolling only on the home view
  useHashScroll(view === "home");

  return (
    <Layout>
      {view === "home" ? (
        <HomeView onReadPaper={() => setView("paper")} />
      ) : (
        <PaperView onBack={() => setView("home")} />
      )}
      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 py-6 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm leading-relaxed">
          <p>© 2025 Kevin Depeauw. All rights reserved.</p>
          <p className="mt-1">
            Patent pending. All theoretical constructs, terminology, and
            diagrams associated with the Superasymmetric Multiverse are the
            intellectual property of Kevin Depeauw.
          </p>
          <p className="mt-1">
            This work may be shared for non-commercial research, discussion, and
            educational use, provided proper credit is given.
          </p>
        </div>
      </footer>
    </Layout>
  );
}
