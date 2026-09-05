# AIRCC Author Guidelines — Interactive Web Edition

This repository contains a responsive, accessible web edition of the supplied paper **“Formatting Guides for Authors of AIRCC Papers.”** It presents the complete manuscript-formatting guidance as an easy-to-navigate reference.

## Included Content

The site reproduces the paper’s title and author block, abstract, keywords, numbered sections, typography specifications, figure-and-table rules, acknowledgements, and references. It also provides a quick-reference table, sticky section navigation, a print-friendly layout, and a direct download of the supplied Microsoft Word document.

| Requirement | Specification |
|---|---|
| Page | A4 portrait, 210 × 297 mm |
| Margins | 30 mm on all sides |
| Body text | 11 pt Times New Roman, justified |
| Abstract | Maximum 150 words |
| Paper length | Maximum 20 pages |
| Source formats | `.doc` or `.pdf` for initial consideration |

## Local Development

```bash
pnpm install
pnpm dev
```

The application uses React, TypeScript, Vite, Tailwind CSS, Wouter, and Lucide icons.

## Source Document

The supplied source is stored at [`client/public/aircc-author-guidelines.doc`](./client/public/aircc-author-guidelines.doc) and is available from the page’s download controls.

## Official AIRCC Resources

The [AIRCC journal submission guidance](https://airccse.org/journal/paper.html) links to the official [Microsoft Word manuscript template](https://airccse.org/journal/aircc_template.doc) and submission system.
