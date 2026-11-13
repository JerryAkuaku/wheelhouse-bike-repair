# Wheelhouse Bike Repair: Website Rebuild

A rebuild of the website for Wheelhouse Bike Repair, a workshop in Adum Commercial Area, Kumasi. This repository holds the code and the written work for all five deliverables. Section numbers below match the deliverable numbers in the brief.

| # | Deliverable | Objective | Summary | Full write-up |
|---|---|---|---|---|
| 1 | Sketch of the page structure, with a note on the order | Understand | [Section 1](#1-sketch-and-page-order-understand) | Section 1 (in full) |
| 2 | Responsive, semantic rebuild with a palette, type scale and spacing system | Apply | [Section 2](#2-the-rebuild-apply) | [docs/rebuild.md](docs/rebuild.md) and the code |
| 3 | Diagnosis of the starter page's issues and root causes | Analyse | [Section 3](#3-diagnosis-of-the-starter-page-analyse) | [docs/diagnosis.md](docs/diagnosis.md) |
| 4 | Audit of the finished page, justifying priorities | Evaluate | [Section 4](#4-audit-of-the-finished-page-evaluate) | [docs/audit.md](docs/audit.md) |
| 5 | One improvement beyond the brief | Create | [Section 5](#5-improvement-beyond-the-brief-create) | Section 5 (in full) |

The diagnosis (3) was done before the rebuild (2); the rebuild fixes what it found.

**To view the page:** open `index.html` in a browser. No build step is needed.

```
wheelhouse-bike-repair/
├── index.html                    the rebuilt page
├── README.md                     this summary
├── assets/
│   ├── css/styles.css            all styles, design system at the top
│   ├── js/booking.js             sends the booking form as a WhatsApp message
│   └── images/                   favicon + 2 stand-in photos (273 KB, 44 KB)
└── docs/
    ├── sketch-mobile-layout.png  deliverable 1
    ├── rebuild.md                deliverable 2 in full
    ├── diagnosis.md              deliverable 3 in full
    └── audit.md                  deliverable 4 in full
```

## The client and the goal

Kwame owns Wheelhouse and handles most repairs himself, with a second mechanic on busy days. New-customer numbers are flat while a competitor grows. The target visitor has a broken bike, needs it fixed today, and is comparing 2 or 3 shops **on a phone**. The page must answer in seconds: *"Can I trust this shop with my bike, and how do I reach them right now?"* Trustworthy, not trendy.

---

## 1. Sketch and page order (Understand)

![Phone-width sketch of the page structure](docs/sketch-mobile-layout.png)

*Low-fidelity phone layout, drawn before any code was written. The sketch still shows the first wording, "Kwame repairs bikes personally"; the build changed it (see below).*

The order follows the questions a hurried visitor asks, in the order they ask them. The old page followed the owner's list of things to say.

1. **Header with Call and WhatsApp.** *Can I reach them now?* Contact comes first; the visitor may decide in seconds.
2. **Hero photo and Call now.** *Is this a real bike shop?* A real photo answers Kwame's complaint that the site doesn't show his work.
3. **Why choose Wheelhouse.** *Why this shop?* Four specific promises from the old site (price first, walk-ins, same day) that separate Kwame from the others being compared.
4. **Services and prices.** *How much?* After trust: a visitor who believes the shop is real reads prices as fair.
5. **What customers say.** *Do others trust them?* Other people's words back up the promises.
6. **Common questions.** *How long? Do I need to book?* Removes the doubts that stop a walk-in.
7. **Meet Kwame.** *Who will touch my bike?* A named person behind the shop.
8. **Book or visit us.** *How do I book and find them?* One form replaces the old two.
9. **Footer.** *Is the shop still active?* The current year; the old © 2023 made it look closed.

On phones every block is one column in this order, with no sideways scrolling.

**Where the build changed from the sketch:** a menu was added because the page grew long; "Kwame repairs bikes personally" became "Every repair checked by Kwame", because a second mechanic helps on busy days; and reviews, planned as optional, are shown as four labelled samples.

---

## 2. The rebuild (Apply)

Full detail: [docs/rebuild.md](docs/rebuild.md).

- **Design system.** Every colour, text size and gap is a custom property at the top of [`styles.css`](assets/css/styles.css): 9 colour tokens (navy for trust, one yellow for every action) replace 6 accents and about 8 greys; 4 text sizes with body never below 16px; 5 spacing steps; one radius and one button style.
- **Mobile first.** One column by default, breakpoints at `40em` and `64em` add grid columns. The starter's `width: 960px` containers are gone; content is capped with `max-width: 40em` instead.
- **Semantic.** Landmarks, one `h1` and no skipped levels, lists, `blockquote`, `address`, and a no-JavaScript FAQ with `details`/`summary`.
- **Every contact detail is an action:** `tel:`, WhatsApp, Maps and `mailto:` links.
- **One form that works.** Labelled fields, `type="tel"`, all required. [`booking.js`](assets/js/booking.js) blocks the default submit, rejects answers that are empty or only spaces, then sends the request to Kwame's WhatsApp.
- **Images for mobile data:** about 7 MB of photos cut to 317 KB.

---

## 3. Diagnosis of the starter page (Analyse)

Full detail, with code evidence quoted from the starter files supplied with the lab: [docs/diagnosis.md](docs/diagnosis.md).

| Root cause | Problems it explains |
|---|---|
| Built around what the owner wants to say, not what the visitor needs to decide | No photo, reviews or named person; © 2023 |
| Built for one screen size | No viewport tag, fixed `960px` widths, floats, no media queries |
| Contact treated as information, not action | No `tel:` links, menu links to `#`, forms with `type="button"` and no script |
| No shared style system | Inline styles and ID selectors override classes; unstyled classes; 6 accents, 6 font sizes; price colours at 2.2 to 3.3 : 1 |
| Non-semantic markup | All `div`s, no `lang`, skipped heading levels, `<br>` for spacing |

---

## 4. Audit of the finished page (Evaluate)

Full detail: [docs/audit.md](docs/audit.md). Checked against semantic HTML, baseline accessibility and visual consistency.

**Priorities, in order:** (1) phone layout and one-tap contact, because nothing else matters if the visitor can't read or call; (2) trust signals, Kwame's own complaint; (3) semantic structure; (4) accessibility; (5) visual consistency, mostly handled by the design system.

**Result:** semantic HTML passes. Every text pair passes 4.5 : 1 (lowest 8.1 : 1). The audit found and fixed 8 issues, including an overclaim, 7 MB photos and blank form answers. The yellow button shape is faint against white (1.7 : 1), which is minor because the text is clear.

**Still open, in order of importance to Kwame:** the sample reviews must be replaced with real ones or removed; the stand-in photos must be replaced with his own; the phone numbers and payment methods need his confirmation.

---

## 5. Improvement beyond the brief (Create)

### "Ask on WhatsApp" on every service card

Each of the six service cards has an **Ask on WhatsApp** button that opens WhatsApp with a message already written, naming that service:

> *Hello Wheelhouse, I need a Tyre & Tube Replacement. My bike type is:*

It ends on "My bike type is:" so the visitor types one or two words. Custom Builds asks for a quote instead ("What I have in mind:"), because that visitor describes an idea, not a fault.

**The gap it fills.** A hurried visitor comparing shops often doesn't know what to write, and typing from nothing on a phone is where they give up and try the next shop. The form is the detailed route; this is the one-tap route from the price they're looking at.

**Value to the business.** Customers go from "that's the price I need" to a message in one tap. Every message names the service, so Kwame can reply with a time and price straight away. That faster reply is what wins someone messaging three shops. It uses the WhatsApp he already lists, so it costs nothing.

**Why it isn't decoration.** It changes what the visitor can *do*, not how the page looks: each card goes from information to read to an action to take, the third root cause in the diagnosis.

**Accessibility.** Each link has an `aria-label` naming its service ("Ask on WhatsApp about Brake Overhaul"), starting with the visible words so voice control still works.

**Why not a "what's wrong with my bike?" quiz?** More JavaScript, more screens, more decisions for a stressed visitor. This is plain links.

---

## Rules followed

- No invented claims: every fact on the page comes from the original site. Anything new (reviews, payment methods) is marked as a sample or a suggestion for Kwame to confirm.
- Every design choice has a "because" tied to the brief, and every fix traces back to the diagnosis.
