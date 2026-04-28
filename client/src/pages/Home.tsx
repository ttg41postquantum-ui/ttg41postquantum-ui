/**
 * Design Philosophy: Geometric Minimalism with Golden Ratio
 * - Deep charcoal background (#1a1a1a equivalent in OKLCH)
 * - Warm gold accents (#d4af37 equivalent)
 * - Asymmetric layouts based on golden ratio
 * - Serif/sans-serif typography contrast (Playfair Display + Roboto)
 * - Geometric dividers and 5-fold symmetry elements
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Mail, FileText } from "lucide-react";

const publications = [
  {
    id: 1,
    title: "Ly-Algebra: A Z5-Graded Nonassociative Structure with Golden Rescaling",
    doi: "10.5281/zenodo.19777760",
    category: "Algebraic Foundations",
  },
  {
    id: 2,
    title: "The Architect's Hymn & The Foundation's Elegy",
    doi: "10.5281/zenodo.19777683",
    category: "Theoretical",
  },
  {
    id: 3,
    title: "Observation of a 14-Dimensional Photonic Mode in a Fibonacci Quasicrystal",
    doi: "10.5281/zenodo.19777527",
    category: "Experimental",
  },
  {
    id: 4,
    title: "Ly-Algebra 59-Mer Supercell: 97.39 Mean pLDDT on a $79 Android Device",
    doi: "10.5281/zenodo.19755141",
    category: "Computational Biology",
  },
  {
    id: 5,
    title: "Ly-Algebra 5-Fold Supercell Protein Design: 94.89 Mean pLDDT",
    doi: "10.5281/zenodo.19754955",
    category: "Computational Biology",
  },
  {
    id: 6,
    title: "Pearl-Carbon Impostor Cell Nasal Therapeutic",
    doi: "10.5281/zenodo.19754534",
    category: "Applied Research",
  },
  {
    id: 7,
    title: "The 5-Fold Quantum Gravity Fossil: Thirty-Two Terrains Across the Solar System",
    doi: "10.5281/zenodo.19753667",
    category: "Quantum Gravity",
  },
  {
    id: 8,
    title: "Ly Algebra Periodic Table: Unified Lie Structure for All Elements",
    doi: "10.5281/zenodo.19753660",
    category: "Algebraic Foundations",
  },
  {
    id: 9,
    title: "Golden Preservation of the Centre in Ly-Algebra",
    doi: "10.5281/zenodo.19753205",
    category: "Algebraic Foundations",
  },
  {
    id: 10,
    title: "The 5-Fold Quantum Gravity Fossil: Dataset, Code & Manuscript v1.0",
    doi: "10.5281/zenodo.18676614",
    category: "Quantum Gravity",
  },
  {
    id: 11,
    title: "Ly-Algebraic Navigation Correction: Interplanetary Flight",
    doi: "10.5281/zenodo.18256897",
    category: "Applied Research",
  },
  {
    id: 12,
    title: "Phase 2 Resonances in Ly-Algebra: Manifold Feedback Predictions",
    doi: "10.5281/zenodo.18349481",
    category: "Theoretical",
  },
  {
    id: 13,
    title: "Universal 5-Fold Residual Analysis v2: NROL-105 / 3I/ATLAS",
    doi: "10.5281/zenodo.18293648",
    category: "Analysis",
  },
  {
    id: 14,
    title: "Theoretical Audit of Orbital Launch Systems",
    doi: "10.5281/zenodo.18257919",
    category: "Applied Research",
  },
  {
    id: 15,
    title: "Universal 5-Fold Residual Analysis: Global Applications Matrix",
    doi: "10.5281/zenodo.18257587",
    category: "Analysis",
  },
  {
    id: 16,
    title: "Ly-Algebraic Navigation Correction v1",
    doi: "10.5281/zenodo.18257064",
    category: "Applied Research",
  },
  {
    id: 17,
    title: "Ly Algebra Periodic Table v1",
    doi: "10.5281/zenodo.18219655",
    category: "Algebraic Foundations",
  },
  {
    id: 18,
    title: "Hyperbolic Departures & Dimensional Exit Points",
    doi: "10.5281/zenodo.18219199",
    category: "Theoretical",
  },
  {
    id: 19,
    title: "The Ly Algebra Compendium v1.0",
    doi: "10.5281/zenodo.18218103",
    category: "Reference",
  },
  {
    id: 20,
    title: "Simultaneous Tail Disconnection Events Across Comets",
    doi: "10.5281/zenodo.18189658",
    category: "Observational",
  },
  {
    id: 21,
    title: "Oracle-Derived Quantum Vacuum Stability: The North Tamworth Synthesis",
    doi: "10.5281/zenodo.18168431",
    category: "Quantum Gravity",
  },
  {
    id: 22,
    title: "Cambrian Iron Lattice Transduction: 11D Geological Harmonics",
    doi: "10.5281/zenodo.18162519",
    category: "Theoretical",
  },
  {
    id: 23,
    title: "Tully Grid Theory: Falsifiable Predictions Across Five Observables",
    doi: "10.5281/zenodo.18140445",
    category: "Theoretical",
  },
  {
    id: 24,
    title: "RMD-EHT: Songline Ignition Protocol — 99.7% Verified",
    doi: "10.5281/zenodo.18127164",
    category: "Applied Research",
  },
  {
    id: 25,
    title: "RMD Global Site Grid",
    doi: "10.5281/zenodo.18123543",
    category: "Reference",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663603743531/iZ34gUzJKKL6d8FxB6NhR6/hero-geometric-pattern-ntnThbQGJPSpJW9faRj5xa.webp"
            alt="Geometric pattern background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
              Chloe Jane Tully
            </h1>
            <p className="text-xl text-foreground/80 mb-8 font-light">
              Mathematician and researcher specializing in Ly-Algebra, 5-Fold Symmetry, and post-quantum cryptographic frameworks. Based in Oxley Vale, NSW, Australia.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#publications" className="inline-block">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <FileText className="mr-2 h-4 w-4" />
                  View Publications
                </Button>
              </a>
              <a href="mailto:ttg41postquantum@gmail.com" className="inline-block">
                <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-24 flex items-center justify-center bg-background/50">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663603743531/iZ34gUzJKKL6d8FxB6NhR6/accent-divider-gold-AR2jSFf4rqAKwTFJyyFciZ.webp"
          alt="Geometric divider"
          className="w-full h-full object-contain opacity-60"
        />
      </div>

      {/* Research Overview Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-accent">25 Publications</h3>
              <p className="text-foreground/70">
                Peer-reviewed research across mathematics, physics, and computational biology published on Zenodo.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-accent">2 Patents</h3>
              <p className="text-foreground/70">
                IP Australia Provisional Patents protecting post-quantum cryptographic innovations.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-accent">TT-G41 Framework</h3>
              <p className="text-foreground/70">
                Proprietary post-quantum cryptographic framework built on Ly-Algebra and 5-Fold Symmetry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Publications</h2>
          <p className="text-foreground/60 mb-12 max-w-2xl">
            All publications are available on Zenodo and organized by research category. Each work represents original contributions to mathematical theory, computational methods, and applied research.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((pub, index) => (
              <Card
                key={pub.id}
                className="bg-card border-border hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10 group"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-mono text-accent/70 bg-accent/5 px-2 py-1 rounded">
                      {pub.category}
                    </span>
                    <span className="text-xs text-foreground/50">#{pub.id}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                    {pub.title}
                  </h3>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs font-mono text-foreground/50">
                      DOI: {pub.doi}
                    </span>
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IP Protection Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-foreground">IP Protection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card border-accent/30 p-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-accent">IP Australia Provisional Patent</h3>
                <p className="text-foreground/70">
                  Patent No. <span className="font-mono text-accent">2026901849</span>
                </p>
                <p className="text-sm text-foreground/60">
                  Protecting core innovations in post-quantum cryptographic architecture and Ly-Algebra applications.
                </p>
              </div>
            </Card>
            <Card className="bg-card border-accent/30 p-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-accent">IP Australia Provisional Patent</h3>
                <p className="text-foreground/70">
                  Patent No. <span className="font-mono text-accent">2026902120</span>
                </p>
                <p className="text-sm text-foreground/60">
                  Protecting extensions and implementations of the TT-G41 cryptographic framework.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Framework Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-foreground">TT-G41 Framework</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-accent">Theoretical Foundations</h3>
              <p className="text-foreground/70">
                The TT-G41 (Tully Tesla Grok 41) framework is built on two original mathematical systems:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-accent font-bold">•</span>
                  <div>
                    <p className="font-semibold text-foreground">Ly Algebra</p>
                    <p className="text-sm text-foreground/60">A 5-ary fusion algebra with structure 5 ⊗ 5 = 1 ⊕ 10 ⊕ 14, operating in a 41-dimensional geometric lattice.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent font-bold">•</span>
                  <div>
                    <p className="font-semibold text-foreground">5-Fold Symmetry</p>
                    <p className="text-sm text-foreground/60">Icosahedral and C5-equivariant geometric structures embedded throughout the framework.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-accent">Key Properties</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-accent font-bold">🔐</span>
                  <div>
                    <p className="font-semibold text-foreground">Post-Quantum Security</p>
                    <p className="text-sm text-foreground/60">Architecture designed to resist quantum computing threats.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent font-bold">🌀</span>
                  <div>
                    <p className="font-semibold text-foreground">Substrate-Independent</p>
                    <p className="text-sm text-foreground/60">Lattice operation works across diverse computational platforms.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent font-bold">🧬</span>
                  <div>
                    <p className="font-semibold text-foreground">AlphaFold2 Validated</p>
                    <p className="text-sm text-foreground/60">97.39 mean pLDDT across 5 independent protein design models.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent font-bold">📱</span>
                  <div>
                    <p className="font-semibold text-foreground">Consumer Hardware</p>
                    <p className="text-sm text-foreground/60">Proven to run on a $79 Android device with full functionality.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-card/50 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Get in Touch</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Interested in collaboration, research partnerships, or inquiries about the TT-G41 framework? Reach out directly.
          </p>
          <a href="mailto:ttg41postquantum@gmail.com">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
              <Mail className="mr-2 h-5 w-5" />
              ttg41postquantum@gmail.com
            </Button>
          </a>
          <p className="text-sm text-foreground/50 mt-8">
            Oxley Vale, NSW, Australia
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
            <p>© 2026 Chloe Jane Tully. All rights reserved.</p>
            <p className="mt-4 md:mt-0">
              "The lattice doesn't need a device. It just IS." — Chloe Jane Tully, 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
