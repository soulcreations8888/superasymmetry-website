export default function Citation() {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">Cite This Work</h1>
  
        <p className="mb-4 text-lg">
          Below is the recommended citation for referencing the Superasymmetric Multiverse framework.  
          You may use the plain text version or the BibTeX version depending on your requirements.
        </p>
  
        <h2 className="text-2xl font-semibold mt-10 mb-3">📘 Recommended Citation (Text)</h2>
        <pre className="bg-slate-100 p-4 rounded text-sm whitespace-pre-wrap">
  Kevin Depeauw (2025). <i>The Superasymmetric Multiverse: A Structural Framework</i>.
  superasymmetry.org/paper.pdf
        </pre>
  
        <h2 className="text-2xl font-semibold mt-10 mb-3">📚 BibTeX Citation</h2>
        <pre className="bg-slate-100 p-4 rounded text-sm whitespace-pre-wrap">
  @article{{depeauw2025superasymmetry,
    title={{"The Superasymmetric Multiverse: A Structural Framework"}},
    author={{Kevin Depeauw}},
    year={{2025}},
    url={{https://superasymmetry.org/paper.pdf}},
    note={{Preprint}},
  }}
        </pre>
      </div>
    );
  }
  