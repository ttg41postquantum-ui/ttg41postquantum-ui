import { Button } from "@/components/ui/button";
import {
  ArrowUp,
  BookOpen,
  CheckCircle2,
  Download,
  ExternalLink,
  FileText,
} from "lucide-react";

const sections = [
  { href: "#introduction", label: "1. Introduction" },
  { href: "#format-guide", label: "2. Format guide" },
  { href: "#general-format", label: "2.1 General format" },
  { href: "#title-format", label: "2.2 Title" },
  { href: "#authors-format", label: "2.3 Authors" },
  { href: "#abstract-format", label: "2.4 Abstract" },
  { href: "#keywords-format", label: "2.5 Keywords" },
  { href: "#headings-format", label: "2.6 Headings" },
  { href: "#text-format", label: "2.7 Text" },
  { href: "#figures-tables", label: "2.8 Figures & tables" },
  { href: "#acknowledgements-format", label: "2.9 Acknowledgements" },
  { href: "#references-format", label: "2.10 References" },
  { href: "#conclusions", label: "3. Conclusions" },
];

const summaryCards = [
  { value: "A4", label: "210 × 297 mm portrait" },
  { value: "30 mm", label: "Margins on every side" },
  { value: "20 pages", label: "Maximum paper length" },
  { value: "150 words", label: "Maximum abstract length" },
];

const formattingRows = [
  ["Title", "Centre", "20 pt Garamond, bold, small caps", "24 pt after"],
  ["Authors", "Centre", "13 pt Times New Roman", "12 pt after"],
  ["Affiliations", "Centre", "12 pt Times New Roman", "—"],
  ["Email addresses", "Centre", "10 pt Courier New", "18 pt after last"],
  ["Abstract heading", "Left", "13 pt TNR, bold italic, small caps", "6 pt after"],
  ["Abstract text", "Justified", "10 pt Times New Roman, italic", "12 pt after"],
  ["Keywords heading", "Left", "13 pt TNR, bold italic, small caps", "6 pt after"],
  ["Keywords", "Left", "10 pt Times New Roman, italic", "18 pt after"],
  ["Section headings", "Left", "14 pt TNR, bold, small caps", "6 pt after"],
  ["Subsection headings", "Left", "12 pt Times New Roman, bold", "6 pt after"],
  ["Further subsections", "Left", "11 pt Times New Roman, bold", "6 pt after"],
  ["Body text", "Justified", "11 pt Times New Roman", "6–12 pt after"],
  ["Figures", "Centre", "Reproduction-ready", "6 pt after"],
  ["Figure captions", "Centre", "11 pt Times New Roman", "12 pt after"],
  ["References", "Left", "10 pt Times New Roman", "6 pt between"],
];

function SectionHeading({ number, children }: { number?: string; children: React.ReactNode }) {
  return (
    <h2 className="paper-heading">
      {number && <span className="section-number">{number}</span>}
      {children}
    </h2>
  );
}

function Subheading({ id, number, children }: { id: string; number: string; children: React.ReactNode }) {
  return (
    <h3 id={id} className="paper-subheading scroll-mt-28">
      <span>{number}</span> {children}
    </h3>
  );
}

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <header className="site-header">
        <div className="container flex h-16 items-center justify-between gap-4">
          <a href="#top" className="brand-mark" aria-label="AIRCC author guide home">
            <span className="brand-monogram">A</span>
            <span>
              <strong>AIRCC Author Guide</strong>
              <small>Interactive paper edition</small>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold md:flex" aria-label="Primary navigation">
            <a href="#format-guide">Format guide</a>
            <a href="#quick-reference">Quick reference</a>
            <a href="#references">References</a>
          </nav>
          <a href="/aircc-author-guidelines.doc" download>
            <Button className="rounded-none bg-primary px-4 text-primary-foreground hover:bg-primary/90">
              <Download className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Download .doc</span>
              <span className="sm:hidden">Download</span>
            </Button>
          </a>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container relative py-20 sm:py-28">
            <div className="max-w-4xl">
              <div className="mb-8 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.22em] text-primary">
                <span className="h-px w-10 bg-primary" />
                Manuscript preparation standard
              </div>
              <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Formatting Guides for Authors of AIRCC Papers
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                A clear, web-accessible edition of the Microsoft Word manuscript template for authors submitting to AIRCC journals.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#paper">
                  <Button size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90">
                    <BookOpen className="mr-2 h-5 w-5" /> Read the guide
                  </Button>
                </a>
                <a href="https://airccse.org/journal/aircc_template.doc" target="_blank" rel="noreferrer">
                  <Button size="lg" variant="outline" className="rounded-none border-slate-500 bg-transparent text-white hover:bg-white/10 hover:text-white">
                    Official template <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Key format requirements" className="border-b border-border bg-card">
          <div className="container grid grid-cols-2 lg:grid-cols-4">
            {summaryCards.map((item) => (
              <div key={item.value} className="summary-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="container grid gap-12 py-14 lg:grid-cols-[230px_minmax(0,1fr)] lg:py-20">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="toc-title">On this page</p>
              <nav className="toc-list" aria-label="Paper sections">
                {sections.map((section) => (
                  <a key={section.href} href={section.href}>{section.label}</a>
                ))}
              </nav>
              <div className="mt-8 border-l-2 border-primary bg-secondary p-4 text-sm leading-6 text-muted-foreground">
                Use the downloadable Word file as the editable manuscript template.
              </div>
            </div>
          </aside>

          <article id="paper" className="paper-sheet">
            <header className="paper-title-block">
              <p className="journal-label">AIRCC Journals · Author Template</p>
              <h1>Formatting Guides for Authors of AIRCC Papers</h1>
              <p className="paper-authors">Nikita Rechal<sup>1</sup> and Sooriyan Aliyoglu<sup>2</sup></p>
              <div className="paper-affiliations">
                <p><sup>1</sup>Department of Computer Engineering, Castle University, New City, Cyprus</p>
                <p className="paper-email">a.orther@xx.yy.zz</p>
                <p><sup>2</sup>MediDeniz Software, Old Street, New York, USA</p>
                <p className="paper-email">a.etherwen@zzz.com</p>
              </div>
            </header>

            <section className="abstract-box" aria-labelledby="abstract-heading">
              <h2 id="abstract-heading">Abstract</h2>
              <p>This paper gives complete guidelines for authors submitting papers for the AIRCC Journals.</p>
              <div className="keywords-row">
                <strong>Keywords</strong>
                <span>Network Protocols · Wireless Network · Mobile Network · Virus · Worms &amp; Trojan</span>
              </div>
            </section>

            <section id="introduction" className="paper-section scroll-mt-28">
              <SectionHeading number="1">Introduction</SectionHeading>
              <p>
                This document describes, and is written to conform to, author guidelines for the journals of the AIRCC series. It is prepared in Microsoft Word as a .doc document. Although other means of preparation are acceptable, final camera-ready versions must conform to this layout. Microsoft Word terminology is used where appropriate. Although formatting instructions may appear daunting, the simplest approach is to use this template and insert headings and text into it as appropriate.
              </p>
            </section>

            <section id="format-guide" className="paper-section scroll-mt-28">
              <SectionHeading number="2">Format Guide</SectionHeading>
              <p>
                The following formatting rules must be followed strictly. The supplied .doc document may be used as a template for papers prepared in Microsoft Word. Papers that do not conform to these requirements may not be published in the conference proceedings.
              </p>

              <Subheading id="general-format" number="2.1.">General Format, Page Layout and Margins</Subheading>
              <p>
                Use standard A4 (210 mm × 297 mm) portrait page setup with 30 mm margins on the left, right, top and bottom. Do not use headers, footers, footnotes or page numbers. Use a single column. Fully justify every main-text paragraph, including the abstract. Use Times New Roman for the title, authors, headings, captions and body except where another font is specifically stated.
              </p>

              <Subheading id="title-format" number="2.2.">Title</Subheading>
              <p>
                Write the title in 20 pt Garamond, centred, bold and small caps. Apply 24 pt paragraph spacing after its final line.
              </p>

              <Subheading id="authors-format" number="2.3.">Authors</Subheading>
              <p>
                Set author names in centred 13 pt Times New Roman with 12 pt paragraph spacing after. When needed, use superscripts to associate authors with their institutions. Set affiliations in centred 12 pt Times New Roman and email addresses on the next line in 10 pt Courier New. Apply 18 pt paragraph spacing after the final email address.
              </p>

              <Subheading id="abstract-format" number="2.4.">Abstract</Subheading>
              <p>
                Begin with the word “Abstract” in 13 pt Times New Roman, bold italic and small caps, followed by 6 pt spacing. The abstract must not exceed 150 words. Set it in fully justified 10 pt Times New Roman italics with 12 pt paragraph spacing after the last line.
              </p>

              <Subheading id="keywords-format" number="2.5.">Keywords</Subheading>
              <p>
                Begin with the word “Keywords” in 13 pt Times New Roman, bold italic and small caps, followed by 6 pt spacing. Include no more than five keywords or short phrases, separated by commas and six spaces, in 10 pt Times New Roman italics. Follow the keywords with 18 pt line spacing.
              </p>

              <Subheading id="headings-format" number="2.6.">Section and Subsection Headings</Subheading>
              <p>
                Number section headings as 1. Xxx, 2. Yyy and so forth, using 14 pt bold small-caps Times New Roman with 6 pt spacing after. Number subsection headings as 1.1. Aaa, 1.2. Bbb and so forth, using 12 pt bold Times New Roman with 6 pt spacing after.
              </p>

              <h4 className="paper-subsubheading">2.6.1. Further Subsections</h4>
              <p>
                If a third level is required, number headings as 1.1.1. Qqq and use 11 pt bold Times New Roman with 6 pt spacing after.
              </p>

              <Subheading id="text-format" number="2.7.">Text</Subheading>
              <p>
                Set main-body text in fully justified 11 pt Times New Roman. Apply 6 pt paragraph spacing after ordinary paragraphs and 12 pt after the last paragraph in a section. Do not indent paragraphs.
              </p>

              <Subheading id="figures-tables" number="2.8.">Figures and Tables</Subheading>
              <p>
                Centre-align all inserts, figures, diagrams, photographs and tables. Ensure they remain clear and suitable for black-and-white or greyscale reproduction. Number figures consecutively from the beginning to the end of the paper, independently of section numbering. Number tables in the same manner, using a separate sequence from figures.
              </p>

              <div id="quick-reference" className="table-figure scroll-mt-28">
                <p className="table-caption">Table 1. Heading and text fonts.</p>
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Element</th>
                        <th>Alignment</th>
                        <th>Font</th>
                        <th>Followed by</th>
                      </tr>
                    </thead>
                    <tbody>
                      {formattingRows.map((row) => (
                        <tr key={row[0]}>
                          {row.map((cell) => <td key={cell}>{cell}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <p>
                Every figure and table must have a caption centred in 11 pt Times New Roman. Table captions precede tables, while figure captions follow figures. Place tables and figures as close as practical to the point where they are referenced.
              </p>

              <div className="figure-sample" role="img" aria-label="Stylised greyscale sample of network traffic bars">
                <div className="figure-grid">
                  {[38, 62, 47, 79, 54, 88, 44, 71, 58, 83, 49, 68].map((height, index) => (
                    <span key={index} style={{ height: `${height}%` }} />
                  ))}
                </div>
                <p>Figure 1. Spam traffic sample</p>
              </div>

              <Subheading id="acknowledgements-format" number="2.9.">Acknowledgements</Subheading>
              <p>An unnumbered acknowledgements section may be inserted if required.</p>

              <Subheading id="references-format" number="2.10.">References</Subheading>
              <p>
                Cite references in the main text in passing [1] or explicitly as in [2]. Give full references in citation order, essentially following IEEE style, in 10 pt Times New Roman with 6 pt spacing between entries.
              </p>
            </section>

            <section id="conclusions" className="paper-section scroll-mt-28">
              <SectionHeading number="3">Conclusions</SectionHeading>
              <p>
                Papers in this format must not exceed twenty pages. Submit papers to the AIRCC secretary. Papers for initial consideration may be supplied in .doc or .pdf format. Final camera-ready versions should incorporate amendments suggested by referees.
              </p>
            </section>

            <section className="paper-section">
              <SectionHeading>Acknowledgements</SectionHeading>
              <p>The authors would like to thank everyone, just everyone!</p>
            </section>

            <section id="references" className="paper-section scroll-mt-28">
              <SectionHeading>References</SectionHeading>
              <ol className="reference-list">
                <li>Lee, S. Hyun and Kim Mi Na, “This is my paper,” <em>ABC Transactions on ECE</em>, vol. 10, no. 5, pp. 120–122, 2008.</li>
                <li>Gizem Aksahya and Ayese Ozcan, <em>Communications &amp; Networks</em>. ABC Publishers, Network Books, 2009.</li>
              </ol>
            </section>

            <section className="author-note">
              <FileText className="h-5 w-5 text-primary" />
              <div>
                <h2>Authors · Short Biography</h2>
                <p>The source template reserves this closing section for a concise biography of each author.</p>
              </div>
            </section>
          </article>
        </div>

        <section className="submission-section">
          <div className="container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-2 text-primary">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-sm font-bold uppercase tracking-[0.18em]">Ready to prepare your manuscript?</span>
              </div>
              <h2>Start from the editable source file.</h2>
              <p>
                The official AIRCC journal submission pages also link to the manuscript template and online submission system.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="/aircc-author-guidelines.doc" download>
                <Button size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90">
                  <Download className="mr-2 h-5 w-5" /> Download supplied paper
                </Button>
              </a>
              <a href="https://airccse.org/journal/paper.html" target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="rounded-none border-slate-500 bg-transparent text-white hover:bg-white/10 hover:text-white">
                  Submission guidance <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container flex flex-col gap-4 py-8 text-sm md:flex-row md:items-center md:justify-between">
          <p>Web edition prepared from the supplied AIRCC author-guidelines document.</p>
          <a href="#top" className="inline-flex items-center gap-2 font-bold">Back to top <ArrowUp className="h-4 w-4" /></a>
        </div>
      </footer>
    </div>
  );
}
