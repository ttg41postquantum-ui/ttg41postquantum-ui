# AIRCC Author Guide — Product Specification

## Purpose

The application is an **interactive companion to the supplied AIRCC manuscript-formatting paper**. It turns a dense Microsoft Word template into a readable, responsive web reference while preserving access to the original `.doc` file.

## Audience

The primary users are authors, editors, and research teams preparing manuscripts for AIRCC journals or conference proceedings. The experience is designed for quick requirement checks on desktop and mobile devices.

## Core Experience

The page opens with the paper title and four essential constraints: A4 page size, 30 mm margins, a 20-page limit, and a 150-word abstract limit. Readers can move through the complete paper using anchored navigation, consult a structured typography table, print the page, download the supplied paper, or follow the official AIRCC template and submission links.

| Feature | Product Requirement |
|---|---|
| Source fidelity | Preserve the supplied paper’s substantive instructions and structure |
| Navigation | Provide anchored access to all numbered sections |
| Quick reference | Summarize fonts, sizes, alignment, and spacing in one table |
| Download | Serve the supplied `.doc` file from the application |
| Responsiveness | Support phone, tablet, and desktop layouts |
| Accessibility | Use semantic headings, labelled navigation, readable contrast, and descriptive links |
| Print support | Remove application chrome and print the paper content cleanly |

## Visual Direction

The visual language combines an editorial journal aesthetic with a practical documentation interface. Deep navy establishes institutional authority, warm copper provides restrained emphasis, and a warm paper background differentiates the manuscript from the surrounding application. Garamond/Georgia-style headings and Times New Roman manuscript text echo the source formatting standard.

## Content Source

The authoritative project source is [`client/public/aircc-author-guidelines.doc`](./client/public/aircc-author-guidelines.doc), supplied by the user. External buttons link to the [official AIRCC journal submission page](https://airccse.org/journal/paper.html) and [official AIRCC Word template](https://airccse.org/journal/aircc_template.doc).
