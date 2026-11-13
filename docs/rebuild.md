# The rebuild (Apply)

Deliverable 2, in full. [Back to the README](../README.md)

## Design system

Every colour, text size, line height and gap comes from CSS custom properties at the top of [`assets/css/styles.css`](../assets/css/styles.css). This is the direct fix for root cause 4 in the [diagnosis](diagnosis.md) (no shared style system). The few hand-typed values left are listed, with reasons, in the [audit](audit.md#visual-consistency).

**Colour: 9 tokens, replacing 6 accents and about 8 greys**

| Token | Value | Used for | Because |
|---|---|---|---|
| `--color-brand` | `#2c3e50` navy | Header, footer, card edges, links | Dark and steady: reads as dependable, not trendy. |
| `--color-action` | `#f1c40f` yellow | Every button, "why us" stripe | One "act now" colour. If it's yellow, you can tap it. |
| `--color-on-action` | `#1a1a1a` | Text on yellow buttons | 10.5 : 1 on yellow. White on yellow would fail. |
| `--color-on-brand` | `#ffffff` | Text on navy | 11.0 : 1 on navy. |
| `--color-text` | `#1a1a1a` | Body text | 17.4 : 1 on white; softer than pure black. |
| `--color-text-muted` | `#4a4a4a` | Notes, review names, field borders | Quieter, but still 8.1 : 1 on the grey cards. |
| `--color-bg` | `#ffffff` | Page, form fields | White fields on grey cards read as "type here". |
| `--color-surface` | `#f4f4f4` | Cards, hero, form box | Separates blocks without adding a colour. |
| `--color-border` | `#d6d6d6` | Thin dividers | Decoration only; not used where something must be seen. |

Contrast ratios were calculated with the WCAG 2 relative-luminance formula.

**Type scale: 4 sizes, body never below 16px**

| Token | Size | Used for |
|---|---|---|
| `--text-sm` | 0.875rem (14px) | Tagline, form note, review names, footer |
| `--text-base` | 1rem (16px) | Body text, card headings (h3) |
| `--text-lg` | 1.25rem (20px) | Section headings (h2), shop name |
| `--text-xl` | 1.75rem (28px) | Page heading (h1) |

Line height is 1.5 for body text and 1.2 for headings. Sizes are in `rem`, so a visitor who sets a larger text size on their phone gets a larger page. System fonts are used because they are already on the phone: nothing extra to download on mobile data.

**Spacing: 5 steps**

| Token | Value | Typical use |
|---|---|---|
| `--space-1` | 0.5rem (8px) | Label to field, gaps inside small items |
| `--space-2` | 1rem (16px) | Card padding on phones, side margins on phones, gaps between cards |
| `--space-3` | 1.5rem (24px) | Card padding on desktop, header padding |
| `--space-4` | 2.5rem (40px) | Gap between sections on phones |
| `--space-5` | 4rem (64px) | Gap between sections on wider screens |

One radius (`--radius: 5px`) and one button style are used everywhere.

## Responsive layout (mobile first)

The phone layout is the default CSS. Wider screens only *add* rules:

| Screen | Breakpoint | What changes |
|---|---|---|
| Phone | default | One column. Cards stacked with flexbox. |
| Tablet | `min-width: 40em` (about 640px) | Card lists become a 2-column grid. Meet Kwame puts the photo beside the text. More space around sections. |
| Desktop | `min-width: 64em` (about 1024px) | Side margins become 10% so text doesn't stretch across a wide monitor. Why-us goes to 4 columns (4 items, one row), services to 3 (6 cards, two full rows), reviews stay at 2 (sentences read badly in narrow columns). The form and the visit card sit side by side. |

Breakpoints are in `em` so they follow the visitor's text size. No container has a fixed width: the starter's `width: 960px` is gone, and the form and cards are capped with `max-width: 40em` instead, so they shrink on a phone and keep lines readable on a wide screen. The only fixed pixel width in the stylesheet is the round Meet Kwame photo (160px), which is smaller than any phone screen.

## Semantic structure

- `header`, `nav` (labelled "Main"), `main`, `section` and `footer`, with `lang="en"`.
- One `h1`, then an `h2` naming each section, then an `h3` for each service. No levels are skipped. Each section is named by its own heading (`aria-labelledby`).
- The why-us items, services and reviews are lists (`ul`/`li`), so a screen reader announces "list, 6 items".
- Reviews use `blockquote`. Contact details use `address`.
- The FAQ uses `details` and `summary`: it opens and closes without JavaScript, works with the keyboard, and is announced correctly.
- A "Skip to main content" link appears for keyboard users.

## Key build decisions

- **Photos that show the work.** The old page had no images at all. The hero shows a mechanic at a workshop stand surrounded by tools, and Meet Kwame shows him working on a bike. Anyone who lands on the page knows within a second that this is a bike repair shop, before reading a word. That answers the hero's question ("Is this a real bike shop?") and goes straight at Kwame's complaint that the site doesn't show he does good work.
- **Every contact detail is an action.** `tel:` links for calls, `wa.me` links for WhatsApp, a Google Maps link for directions, `mailto:` for email. Call and WhatsApp appear in the header, the hero and the contact section, so they are never far away.
- **One form instead of two.** It asks for name, phone, bike type and the problem, all required, each with a visible label. `type="tel"` opens the number keypad, and `autocomplete` lets the phone fill in the name and number.
- **The form sends to WhatsApp.** [`assets/js/booking.js`](../assets/js/booking.js) stops the browser's default submit (`event.preventDefault()`), trims every answer, and stops with the browser's own "please fill in this field" message if any answer is empty or only spaces (`required` alone lets spaces through). Only then does it build a WhatsApp message, so the request reaches Kwame on the channel he already uses, with a number he can reply to.
- **Kept content.** The old site's copy was specific and honest: price before work, walk-ins welcome, same-day basic repairs, Monday to Saturday 8am to 5:30pm, opened 2019, Shop 4 in Adum. All of it was kept and given clear wording.
- **One time estimate.** "Within an hour or two" for basic repairs everywhere, fixing Problem 9.
- **The GH₵10 a day storage fee** sits in the FAQ answer about overnight repairs. That is when a customer decides whether to leave the bike. A cost they only learn about when they collect it would break the "no surprises" promise.
- **Six service cards, not eight.** The main jobs, each with a short description. Fewer cards are faster to scan on a phone, and six fill the desktop grid evenly.
- **The tagline is a paragraph, not a heading.** It names no section. Its wording changed from "Kumasi's Most Trusted Bicycle Workshop", a claim the page can't prove, to "Repairing Kumasi's bikes since 2019", a fact from the old site.
- **Images sized for mobile data.** The stand-in photos were resized from about 7 MB in total to 273 KB (hero, 1600px wide) and 44 KB (Meet Kwame, 400px wide). Only these two photos and the favicon are in `assets/images/`; no originals are kept in the repository.

## How each diagnosed problem was fixed

| Problem | Fix in the rebuild |
|---|---|
| 1. Not responsive | Viewport meta tag, mobile-first CSS, flexbox and grid, `em` breakpoints, no fixed container widths |
| 2. No proof | Hero photo, why-us list, reviews section, Meet Kwame with photo, current year |
| 3. Contact is not action | `tel:`, WhatsApp, Maps and `mailto:` links; working menu links to section `id`s |
| 4. Forms don't work | One labelled form, correct input types, required fields, empty answers blocked, sends to WhatsApp |
| 5. Section outside the container | Contact is a normal `section` inside `main`, styled like the others |
| 6. Specificity and inconsistent styles | One stylesheet, no inline styles, no ID selectors for styling (except the form and the contact grid), every class styled, all colours, sizes and gaps from the design system |
| 7. Non-semantic markup | Landmarks, heading order, lists, `blockquote`, `address`, `details` |
| 8. Hard to read | 16px body text; every text colour pair passes 4.5 : 1 |
| 9. Inconsistent content | One time estimate, one Prices link, © 2026 |

[Back to the README](../README.md)
