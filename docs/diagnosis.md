# Diagnosis of the starter page (Analyse)

Deliverable 3, in full. [Back to the README](../README.md)

The starter page is the old Wheelhouse site supplied with the lab (its HTML, its stylesheet and an empty `js/script.js`). It is not included in this repository, so the code evidence below is quoted from those starter files.

Each problem has a **symptom** (what you see), a **root cause** (why, with evidence from the starter code) and a **cost** (what it does to Kwame's business).

## The five root causes

1. **The page was built around what the owner wants to say, not what the visitor needs to decide.** (Problem 2)
2. **The page was built for one screen size only**, and has no breakpoints at all. (Problem 1)
3. **Contact details are treated as information to read, not actions to take.** (Problems 3, 4)
4. **There is no shared style system.** Styles are scattered between inline attributes, ID selectors and a stylesheet, so they fight each other, and half the classes have no CSS. (Problems 5, 6, 8)
5. **Non-semantic markup: generic boxes instead of meaningful elements.** (Problem 7)

## Problem 1: Not responsive, no breakpoints (High)

- **Symptom:** on a phone the page shows as a tiny shrunken desktop page, or needs sideways scrolling.
- **Root cause:**
  - No viewport meta tag, so phones render the page as if it were about 980px wide and then shrink it.
  - `width: 960px` is fixed on `#topnav`, `#headerbanner`, `#pagewrap` and `#pagefooter`.
  - Cards and the contact block use floats with fixed pixel widths (`280px`, `380px`, `360px`).
  - There are **no media queries**, so there is no point at which the layout changes for a smaller screen. Even a correct breakpoint could not help, because the fixed widths would still overflow.
- **Side effects of the same cause:** card rows add up to 880px inside a 900px area, so they stop short of the edge. Floats with `min-height: 160px` give ragged, uneven card heights.
- **Cost:** most visitors are on phones. A page that is hard to read or scroll sends them to the competitor.

## Problem 2: Nothing proves Kwame does good work (High)

- **Symptom:** no photo of the shop or of Kwame, no reviews, no named person up front. There is no `<img>` anywhere in the page. The footer says © 2023.
- **Root cause:** the page lists services, prices and hours, which is what the owner wants to say. It never answers the visitor's question, *"Can I trust this shop?"*
- **Cost:** this is Kwame's own complaint. A hurried visitor with no evidence picks the shop that shows some. The old date suggests the shop may have closed.

## Problem 3: Contact is information, not action (High)

- **Symptom:** phone and WhatsApp numbers are plain text. "Get a Quote" looks clickable but isn't.
- **Root cause:**
  - No `tel:` or WhatsApp links exist in the code.
  - "Get a Quote" is a `<span>`, not a link.
  - All five menu links use `href="#"` and no section has an `id`, so the menu goes nowhere.
- **Cost:** an urgent customer has to copy or retype a number on a phone. Every extra step loses some of them. Fewer calls means fewer jobs.

## Problem 4: The forms cannot produce a usable request (High)

- **Symptom:** two forms with overlapping purposes. Pressing either button does nothing. The booking form never asks how to reach the customer.
- **Root cause:**
  - The booking form asks only for a name and "what does your bike need?", then promises "we will get back to you" with no phone or email to do it.
  - The buttons are `type="button"`, not `type="submit"`, and the starter's `js/script.js` is empty, so nothing handles a press.
  - No `<label>` on any field, only placeholders, which disappear when the visitor starts typing.
  - Email and phone fields are `type="text"`, so phones show the wrong keyboard and nothing is checked.
- **Cost:** Kwame cannot act on a request he cannot reply to. A customer who presses the button and sees nothing assumes the shop is broken or ignoring them.

## Problem 5: "Send Us a Message" sits outside the page container (Medium)

- **Symptom:** the section hugs the left edge of the screen and runs into the footer.
- **Root cause:** `#contact-section` is placed *after* `#pagewrap` closes, and **no CSS rule exists for it**, so it gets no width, margin, padding or background.
- **Cost:** it looks careless, and careless is the opposite of trustworthy.

## Problem 6: Specificity conflicts and missing or inconsistent styles (Medium)

- **Symptom:** FAQ questions look the same as the answers. FAQ text is larger than the rest of the page. Form fields are plain browser defaults. Similar items look slightly different from each other.
- **Root cause:**
  - **Specificity conflicts.** Styles come from three places with different strengths. An inline `style="..."` attribute beats any rule in the stylesheet. An `#id` selector (`#topnav`, `#pagewrap`) beats any `.class` selector. So when a class rule is changed in the stylesheet, an inline style or ID rule can silently override it, and the change doesn't show. The page can only be fixed by editing each element by hand, which is how the inconsistencies built up.
  - These classes have **no CSS at all**: `.faq-list`, `.faq-item`, `.faq-trigger`, `.faq-body`, `.booking-form`, `.contact-form`, `.form-field`, `.form-submit`.
  - Unstyled paragraphs fall back to the browser's 16px, while the rest of the page uses 11 to 13px.
  - **Colour:** six different accents (red, blue, orange, green, purple, teal) plus about eight greys, each typed in separately.
  - **Type:** six font sizes in use (11, 12, 13, 14, 20, 34px) with no scale behind them.
- **Cost:** an inconsistent page looks unprofessional. "Looks like it knows what it's doing" is exactly what Kwame wants visitors to feel.

## Problem 7: Non-semantic markup (Medium)

- **Symptom:** looks acceptable to a sighted visitor, but has no structure for anything else.
- **Root cause:**
  - Everything is a `<div>`: no `header`, `nav`, `main`, `section` or `footer`.
  - `<html>` has no `lang` attribute.
  - The heading order is `h1`, then `h3` (the tagline), then `h2`. The tagline isn't a heading at all.
  - `<b>` is used for service titles and menu text instead of headings or CSS.
  - `<br>` tags are used for spacing.
  - Services and FAQs are not marked up as lists.
  - No meta description.
- **Cost:** screen reader users cannot jump between sections. Search engines get less meaning, which matters because customers find shops by searching on their phones.

## Problem 8: Hard to read on a phone (Medium)

- **Symptom:** small text and pale price colours.
- **Root cause:** body text is 11 to 13px, and the price colours fail the WCAG minimum of 4.5 : 1 for normal text, **even against pure white**. Ratios were calculated with the WCAG 2 relative-luminance formula:

  | Colour | Contrast on white | Result |
  |---|---|---|
  | Orange `#f39c12` | 2.2 : 1 | Fail |
  | Green `#27ae60` | 2.9 : 1 | Fail |
  | Blue `#3498db` | 3.2 : 1 | Fail |
  | Teal `#16a085` | 3.3 : 1 | Fail |

- **Cost:** the prices, the thing a comparing visitor most wants, are the hardest text to read, especially outdoors in sunlight.

## Problem 9: Content inconsistencies (Low)

- The Tune-Up card says "under an hour"; the FAQ says "an hour or two".
- The menu has "PRICING", but prices are inside the Services cards, so two links lead to one thing.
- The footer says © 2023.

## Not treated as a defect

- A centred column on wide screens is a normal choice. It only matters because it fails on phones (Problem 1).

[Back to the README](../README.md)
