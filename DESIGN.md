---
name: Webs de Boda
description: Wedding-website studio rendered as a tear-off calendar pad, with perforated cream leaves and drenched brown and gold pages.
colors:
  cream: "#F4EBDD"
  paper: "#FBF6EC"
  sand: "#EADCC6"
  brown: "#3A2E22"
  soft-brown: "#6B5842"
  gold: "#B8924A"
  gold-light: "#D2AE6B"
  gold-ink: "#7D5F25"
  gold-ink-dark: "#261C12"
  footer-brown: "#2B2118"
  device-black: "#1B1510"
typography:
  display:
    fontFamily: "Gloock, Gloock Fallback, Georgia, serif"
    fontSize: "clamp(3.2rem, 15.5vw, 6rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Gloock, Gloock Fallback, Georgia, serif"
    fontSize: "clamp(2.1rem, 8.2vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Gloock, Gloock Fallback, Georgia, serif"
    fontSize: "clamp(1.4rem, 4.6vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.15
  body:
    fontFamily: "Hanken Grotesk, Hanken Fallback, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk, Hanken Fallback, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.06em"
rounded:
  leaf: "4px"
  card: "6px"
  pill: "999px"
  device: "40px"
spacing:
  gutter: "20px"
  gutter-wide: "32px"
  notch: "11px"
  max-width: "1160px"
components:
  button-primary:
    backgroundColor: "{colors.brown}"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "52px"
  button-primary-on-brown:
    backgroundColor: "{colors.gold-light}"
    textColor: "{colors.brown}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "52px"
  button-gold:
    backgroundColor: "{colors.gold-light}"
    textColor: "{colors.brown}"
    rounded: "{rounded.pill}"
  tab-selected:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.brown}"
    rounded: "{rounded.pill}"
    height: "48px"
  step-leaf:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.brown}"
    rounded: "{rounded.leaf}"
    padding: "28px 24px"
  price-leaf:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.brown}"
    rounded: "{rounded.leaf}"
    padding: "36px 26px 28px"
---

# Design System: Webs de Boda

## Overview

**Creative North Star: "The Tear-Off Pad"**

The page is a desk calendar pad. Each section is one leaf: a flat sheet whose top edge carries a row of die-cut notches and a dashed tear line. Some leaves are cream paper, some are whole pages drenched in dark brown or full gold. Changing the demo tab literally tears a leaf away and drops the next one in. The mood is warm, handmade, and unhurried: paper, ink, and gold foil, not software.

Density is generous. Sections breathe with 4 to 8rem of vertical padding, copy runs in short measures, and the one loud gesture per leaf is a giant cropped serif numeral in gold that the frame cuts off. Depth is physical: leaves sit in stacks, so shadows are soft and layered, never glass or glow.

**Key Characteristics:**
- Sections are leaves; the colored sections are full pages of the pad (brown, gold, sand), not cards on a page.
- A notched perforation edge plus dashed tear line marks every leaf boundary.
- Gloock numerals and headlines at architectural scale, cropped by the frame.
- Hanken Grotesk for everything functional, in small weights and plain sentence case.
- Soft stacked-sheet shadows tinted brown; pill-shaped controls.

## Colors

A warm paper-and-ink palette: cream stock, deep walnut brown ink, and a single metallic gold used in three tuned values for fields, text on brown, and text on cream.

### Primary
- **Walnut Ink** (brown): body text, the brown field sections, primary button on cream, leaf stacks' notch cutouts on the price leaf.
- **Calendar Gold** (gold): the full-gold field section, giant numerals, underline rules on links. Large areas and ornaments only; never small text.
- **Pale Foil Gold** (gold-light): gold on brown. Buttons, spec labels, focus rings, and contact labels on brown fields.
- **Gold Ink** (gold-ink): gold as text on cream (hero H1 second line, comparison labels, checkmarks). Contrast about 5:1.

### Neutral
- **Calendar Cream** (cream): page ground, header, hero, light leaves, and text on brown.
- **Leaf Paper** (paper): lifted sheets (process steps, price card); one step lighter than the ground.
- **Sand** (sand): the quieter alternate leaf and the notch color behind step sheets.
- **Soft Brown** (soft-brown): secondary text on cream and sand (about 6:1 on cream).
- **Dark Ink on Gold** (gold-ink-dark): text and checked controls on the gold field.
- **Footer Brown** (footer-brown) and **Device Black** (device-black): the footer, and the phone and laptop bezels around the live demos.

### Named Rules
**The Whole-Page Rule.** Brown and gold appear as entire leaves, never as a tinted card inside a cream leaf. Each color field owns its section edge to edge.

**The Three Golds Rule.** Pick gold by job: Calendar Gold for fields and ornament, Pale Foil Gold on brown, Gold Ink as text on cream. A text role never uses Calendar Gold.

## Typography

**Display Font:** Gloock (with a size-adjusted Georgia fallback)
**Body Font:** Hanken Grotesk (with a size-adjusted Arial fallback)

**Character:** Gloock is a high-contrast, heavy-stemmed serif that reads like calendar numerals and poster headlines; Hanken Grotesk is a calm, open sans that stays out of its way. Only two families ship.

### Hierarchy
- **Display** (400, clamp 3.2rem to 6rem, 1.04): the single H1, tight tracking (-0.02em), balanced wrapping; a second line in Gold Ink.
- **Headline** (400, clamp 2.1rem to 3.75rem, 1.04): section titles.
- **Title** (400, clamp 1.4rem to 1.75rem, 1.15): demo and sub-item headings; feature titles go up to 2.1rem; FAQ summaries use 1.3rem Gloock.
- **Body** (400, 1.0625rem, 1.6): running text, capped at 62ch; lead paragraphs go to 1.3125rem at 1.5.
- **Label** (600 to 700, 0.8125 to 0.95rem, 0.02 to 0.14em tracking): small Hanken captions inside tags, the comparison-table column names on mobile, and the invitation preview line. Uppercase appears only in these small captions.
- **Numeral** (Gloock 400, 13rem to 36rem, line-height 1): giant cropped numerals in Calendar Gold at 75 to 80% opacity, and the price at 6 to 8.5rem.

### Named Rules
**The Cropped Numeral Rule.** A giant numeral is cut by its frame and sits behind content, with pointer events off. It is ornament and never carries information alone.

## Layout

Mobile-first single column with a 1160px container and a 20px gutter (32px from 720px). Sections stack as full-bleed leaves; inside, content is a CSS grid that goes to two columns at 720px and 960px (hero 0.95/1.05, demos 0.8/1.2, FAQ 0.8/1.2, features 3 up from 960px). The sticky header is 64px tall with a collapsible menu under 1180px. Vertical rhythm comes from clamp-based leaf padding (about 4.5 to 8rem top). The three process leaves step down on desktop (0, 28px, 56px offsets), like a pad being peeled. Hero visual is a phone frame cropped at the bottom of its box.

## Elevation & Depth

Depth is physical stacking, not glow. Resting leaves are flat; lifted sheets (process steps, price card, invitation preview) carry a hairline plus one or two offset thin sheet edges below, then a long soft brown-tinted shadow. Devices carry a single long soft shadow.

### Shadow Vocabulary
- **Pad shadow** (`box-shadow: 0 1px 0 rgba(58,46,34,.06), 0 18px 34px -18px rgba(58,46,34,.45)`): dropdown menu and laptop frame.
- **Stacked step sheet** (`0 1px 0 rgba(58,46,34,.06), 0 6px 0 -3px #dccfb6, 0 12px 0 -6px #cfbf9f, 0 26px 30px -20px rgba(58,46,34,.5)`): the sheets underneath a step leaf.
- **Stacked price sheet** (`0 1px 0 rgba(0,0,0,.05), 0 5px 0 -2px #e2d5bd, 0 11px 0 -5px #cdbd9f, 0 36px 50px -22px rgba(0,0,0,.8)`): the price leaf on a brown field.
- **Button lift** (`0 10px 22px -12px rgba(58,46,34,.7)`, rising to `0 16px 26px -12px` with a 2px translate on hover).

### Named Rules
**The Sheet-Edge Rule.** A lifted leaf shows its stack as two thin offset edges in warm paper tones before the soft shadow. No shadow is black-neon, colored glow, or glass blur.

## Shapes

Leaves are nearly square (4px) with a notched top edge: a repeating 22px by 11px radial cutout in the color of the leaf above, plus a dashed 1.5px tear line at 22% opacity. Controls, tabs, tags and chips are full pills (999px). Color swatches are circles. Devices (phone frame 40px radius, bezel 9px) are the only large radii. Dividers are 1px hairlines at 22% brown, with 1.5px solid brown rules at the head of lists and tables.

## Components

### Buttons
- **Shape:** full pill (999px), 2px transparent border, 52px minimum height (44px small, 60px large), Hanken 600.
- **Primary:** walnut fill with cream text, 0 26px padding, button-lift shadow. On brown fields it flips to Pale Foil Gold fill with brown text.
- **Gold:** Pale Foil Gold fill, brown text; hover lightens to #E0C07F.
- **Hover / Focus:** rise 2px over .25s on the expo-out curve; focus is a 3px outline offset 3px, brown on cream and gold, Pale Foil Gold on brown and in the footer.
- **Text link:** 600 weight with a 2px gold underline that turns brown on hover and a masked SVG arrow.

### Tabs
- Pill outlines (1.5px, cream at 35%) on brown; selected tab fills cream with brown text. Switching panels plays a tear-out and tear-in leaf animation.

### Process and price leaves
- Paper sheets with a sand notch row at the top, a giant cropped Gloock numeral, left-aligned copy in narrow measures. The price card repeats this on a brown field with brown notches.

### Navigation
- Sticky cream bar, brand in Gloock 1.25rem, Hanken links at .9 to .95rem; hover shows a 2px gold underline. Collapses to a pill menu button with a dropdown under 1180px; stays visible without JS.

### Personalizer
- Choice pills (48px, 2px dark border) with round swatches; the selected pill inverts to dark ink on Pale Foil Gold. A live invitation preview on a paper leaf inside a translucent frame, themed through custom properties.

### Accordion
- Gloock 1.3rem summaries, a rotating chevron drawn with borders, hairline separators, soft-brown answers.

## Do's and Don'ts

### Do:
- **Do** make color sections whole leaves with the notch row picking up the color of the leaf above.
- **Do** keep text on Walnut Ink, Cream, or Dark Ink on Gold, and secondary text on Soft Brown (at least 5:1).
- **Do** crop giant Gloock numerals in Calendar Gold behind the content.
- **Do** use pills for every interactive control and 4px for sheet-like surfaces.
- **Do** build depth with stacked sheet edges and long soft brown-tinted shadows.
- **Do** keep content visible when JS fails and honor reduced motion (animation durations collapse).

### Don't:
- **Don't** set small text in Calendar Gold; use Gold Ink on cream or Pale Foil Gold on brown.
- **Don't** wrap a brown or gold field inside a cream card; the field is the page.
- **Don't** add glass, glow, pink floral, clip-art, or script faces.
- **Don't** add a third typeface to the site chrome; the invitation preview's alternate fonts exist only to demonstrate customization.
- **Don't** use icon tiles; the only marks are the masked arrow, checkmark, and chevron drawn in CSS.
