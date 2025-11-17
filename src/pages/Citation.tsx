export default function Citation() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Cite This Work</h1>

      <p className="mb-4 text-lg">
        Below is the recommended citation for referencing the Superasymmetric
        Multiverse framework. You may use the plain text version or the BibTeX
        entry, depending on your requirements.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Recommended Citation (Text)
      </h2>
      <pre className="bg-slate-100 p-4 rounded text-sm whitespace-pre-wrap">
        {`Kevin Depeauw (2025). The Superasymmetric Multiverse: A Structural Framework for Reality. Zenodo. DOI: 10.5281/zenodo.17632333. https://doi.org/10.5281/zenodo.17632333`}
      </pre>

      <h2 className="text-2xl font-semibold mt-8 mb-3">BibTeX</h2>
      <pre className="bg-slate-100 p-4 rounded text-sm whitespace-pre-wrap">
        {`@article{Depeauw2025Superasymmetric,
  author    = {Kevin Depeauw},
  title     = {The Superasymmetric Multiverse: A Structural Framework for Reality},
  journal   = {Zenodo},
  year      = {2025},
  month     = {11},
  note      = {Preprint},
  doi       = {10.5281/zenodo.17632333},
  url       = {https://doi.org/10.5281/zenodo.17632333}
}`}
      </pre>
    </div>
  );
}
