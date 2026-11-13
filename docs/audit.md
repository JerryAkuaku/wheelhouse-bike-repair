# Audit of the finished page (Evaluate)

Deliverable 4, in full. [Back to the README](../README.md)

I audited the finished page against three standards: **semantic HTML**, **baseline accessibility** and **visual consistency**. The order of priority below follows the brief: what most affects a hurried phone visitor deciding whether to trust Kwame came first.

## Priorities, and why

1. **Phone layout and tappable contact.** The brief's visitor is on a phone and in a hurry. If they can't read the page or reach Kwame in one tap, nothing else matters. This was built and checked first.
2. **Trust signals.** Kwame's own complaint is that the site doesn't show he does good work. Photo, promises, reviews and Meet Kwame came next.
3. **Semantic structure.** It costs almost nothing when built in from the start, and it helps screen readers and search engines (customers find shops by searching).
4. **Baseline accessibility.** Contrast, labels, keyboard use and alt text.
5. **Visual consistency.** Handled mostly by the design system, so it needed checking rather than building.

## Semantic HTML

| Check | Result |
|---|---|
| `lang` attribute, landmarks (`header`, `nav`, `main`, `footer`) | Pass |
| One `h1`, no skipped heading levels | Pass |
| Each section named by its heading | Pass (`aria-labelledby`) |
| Lists for repeated items | Pass (why-us, services, reviews, menu) |
| Right element for the job (`blockquote`, `address`, `details`, `button` vs link) | Pass. Links go places (WhatsApp, phone), the form uses a real `button type="submit"`. |
| No inline styles, no `<br>` used for spacing | Pass. `<br>` is only used for line breaks inside the address and hours, where the break is part of the content. |
| Meta description | Pass |

## Baseline accessibility

Contrast ratios were calculated with the WCAG 2 relative-luminance formula.

| Check | Result |
|---|---|
| Text contrast 4.5 : 1 or more | Pass. Lowest text pair is muted grey `#4a4a4a` on the grey card `#f4f4f4` at 8.1 : 1. |
| Body text at least 16px | Pass. 14px is used only for small print. |
| Every form field has a visible label | Pass. Placeholders are examples only. |
| Required fields | Pass. `required` attribute, and the script also rejects answers that are only spaces. The visual * is hidden from screen readers so it isn't announced twice. |
| Keyboard use | Pass. Visible focus outline on everything; skip link; FAQ works with Tab and Enter. |
| Repeated link text | Pass. The six "Ask on WhatsApp" links each have a unique `aria-label`. |
| Image alt text | **Partial.** Alt text describes what is in each photo, but the photos are stand-ins. It must be rewritten for Kwame's real photos. |
| Yellow buttons on white or grey | **Minor issue.** The button text passes (10.5 : 1), but the yellow shape is only 1.7 : 1 against white (1.5 : 1 against the grey cards), below the 3 : 1 suggested for interface shapes. Low priority, because the words make the button clear. |

## Visual consistency

| Check | Result |
|---|---|
| All colours, text sizes and gaps from the design system | Pass. Every colour, font size, line height and spacing value is a token. The hand-typed values left are on purpose: the 10% desktop side margin (scales with the screen), the `40em` width cap (keeps lines readable), the 160px round Meet Kwame photo, a 450px height cap on the desktop hero photo (so it doesn't fill a tall monitor), and border and focus-outline thicknesses of 1 to 4px. |
| One button style | Pass. Link buttons and the form `button` look identical. |
| Cards | Pass. Same grey, radius and padding, with a coloured edge per section to tell them apart. |
| Buttons line up across a row of service cards | Pass. |
| Spacing inside FAQ answers | Pass, after a fix (see below). |

## Fixed as a result of this audit

The first audit pass found these, and they were fixed in the page:

| Found | Why it mattered to Kwame | Fix |
|---|---|---|
| Why-us said "Kwame repairs bikes personally" | Overclaims: a second mechanic helps on busy days. A visitor who meets him would feel misled. | Now "Every repair checked by Kwame", matching the About section. |
| Photos were 6000×4000 (2.2 MB) and 3433×5149 (4.8 MB) | About 7 MB on mobile data: a slow page loses a visitor comparing shops. | Resized to 1600px and 400px wide: 273 KB and 44 KB, about 96% smaller. Originals were not committed. |
| Image `width`/`height` didn't match the photos' shape | The page jumps as images load. | Set to the real ratios (800×533, 400×600). |
| Form sent the bike type as a code ("kids", "bmx") | It's the first thing Kwame reads in the message. | Now sends the label the visitor chose ("Child's bike"). |
| Form accepted answers made only of spaces | Kwame would get a booking with no name or no number to reply to. | The script trims each answer and blocks the send if any is empty. |
| Tagline "Kumasi's Most Trusted Bicycle Workshop" | A claim with no proof, against a "trustworthy, not trendy" brief. | Now "Repairing Kumasi's bikes since 2019", a fact from the old site. |
| Alt text for the Kwame photo described a smile the photo doesn't show | Alt text must describe what is actually in the image. | Rewritten to match the photo. |
| Extra space under FAQ answers | Small, but uneven spacing is what made the old site look careless. | Last paragraph's margin removed. |

## Still open, in order of importance to Kwame

1. **Sample reviews.** The four reviews are labelled "Sample:" to show the layout, but they are not real. An invented review is worse than none, because trust is what the page is selling. **Before launch, replace them with real customers' words, used with permission, or remove the section.**
2. **The photos are placeholders.** They show the kind of picture the page needs, but they are not of Wheelhouse. A visitor who walks in and finds a different shop would feel misled, which undoes the trust the photos are meant to build. **Kwame should replace them with his own photos: one of the shop at work for the hero, and one of himself for Meet Kwame.** The alt text should then be rewritten to describe the new photos.
3. **Other placeholder content.** The phone numbers are the old site's (`0322 000 000`, `0244 000 001`), and the payment answer in the FAQ (cash, MTN MoMo, Telecel Cash) is a suggestion for Kwame to confirm.

[Back to the README](../README.md)
