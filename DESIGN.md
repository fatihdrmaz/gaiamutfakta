# Design System Strategy: The Artisanal Ledger

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Artisanal Ledger."** 

This system rejects the cold, sterile efficiency of standard SaaS interfaces in favor of a tactile, editorial experience that feels like a high-end botanical journal. We are building a digital space for Gaia Mutfak that breathes. By utilizing intentional asymmetry, generous whitespace, and a "paper-on-paper" layering philosophy, we move away from "UI components" and toward "digital compositions." The goal is to make the user feel the organic origin of the ingredients through the screen.

---

## 2. Colors: The Earth’s Palette
Our palette is rooted in the natural world, moving from the sun-bleached cream of a kitchen cloth to the deep chlorophyll of fresh sage.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Layout boundaries must be achieved through:
- **Tonal Shifts:** Transitioning from `surface` (#fff8f1) to `surface_container_low` (#fff2dc).
- **Whitespace:** Using the spacing scale to create mental boundaries.
- **Organic Shapes:** Using botanical illustrations to bleed across section breaks.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of fine stationery. 
- **Base Layer:** `surface` (#fff8f1) or `background` (#fff8f1).
- **Elevated Content:** Use `surface_container` (#fbecd0) for cards.
- **Deepest Inset:** Use `surface_dim` (#e7d8bd) for footer areas or utility bars.

### The Glass & Gradient Rule
To prevent a "flat" look, use Glassmorphism for floating navigation or overlays. Apply a `backdrop-blur` of 12px-20px to a 70% opaque `surface_container_lowest`. For primary CTAs, use a subtle radial gradient from `primary` (#426531) to `primary_container` (#5a7e48) to give a "living" depth to the buttons.

---

## 3. Typography: Editorial Authority
We pair the intellectual elegance of a high-contrast serif with the modern functionality of a geometric sans-serif.

- **Display & Headlines (Newsreader):** This is our "Brand Voice." Use `display-lg` and `headline-md` for storytelling. These should often be center-aligned or intentionally offset to create an editorial feel.
- **Body & Titles (Manrope):** This is our "Utility Voice." It provides clarity. Use `body-lg` (1rem) for descriptions to maintain a premium, readable feel.
- **Labels (Manrope):** All-caps with a +0.05rem letter-spacing for `label-md` to provide an artisanal, cataloged aesthetic.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "tech." We use light and tone to define space.

- **The Layering Principle:** Instead of a shadow, place a `surface_container_lowest` (#ffffff) card on a `surface_container` (#fbecd0) background. The 1% difference in luminosity creates a sophisticated "lift."
- **Ambient Shadows:** For floating elements (like a shopping bag), use a shadow tinted with `on_surface` (#221b0a). 
  - *Spec:* `0px 12px 32px rgba(34, 27, 10, 0.06)`.
- **The "Ghost Border":** If a container requires a stroke (e.g., a text input), use `outline_variant` at **15% opacity**. It should be felt, not seen.

---

## 5. Components: The Crafted Elements

### Buttons (The "Soft-Pill" Aesthetic)
- **Primary:** Background `primary` (#426531), Text `on_primary` (#ffffff). Border-radius: `full`. No box-shadow.
- **Secondary:** Background `secondary_container` (#fe932c), Text `on_secondary_container` (#663500). Use for "Add to Cart" to evoke warmth.
- **Tertiary:** Text-only in `primary`. Use for "Read More" with a 1px underline that fades out at the edges.

### Cards & Lists (The Borderless Gallery)
- **Rules:** Forbid divider lines. Separate items in a list using 24px of vertical whitespace.
- **Styling:** Use `surface_container_low` for the card background. Imagery should use `roundedness-xl` (0.75rem) to feel soft and approachable.

### Input Fields
- **Design:** A single bottom border in `outline_variant` at 20% opacity. Labels in `label-sm` should sit 8px above the input line, never inside a box.

### Signature Component: The Botanical Overlay
- **Application:** Use SVG botanical illustrations (sage, rosemary, or floral elements) as absolute-positioned elements that "peek" from behind `surface_container` layers. This breaks the grid and reinforces the "Gaia" (Earth) identity.

---

## 6. Do's and Don'ts

### Do:
- **Do** use asymmetrical layouts (e.g., a headline on the left and a botanical illustration bleeding off the right edge).
- **Do** use `primary_fixed_dim` for subtle accent backgrounds in promotional sections.
- **Do** allow for "Breathing Room." If a section feels crowded, double the padding.

### Don't:
- **Don't** use pure black (#000000). Use `on_surface` (#221b0a) for all text to keep the warmth.
- **Don't** use standard 8px grid-rounding everywhere. Use the `xl` (0.75rem) for large containers and `none` for hero imagery to create a high-fashion contrast.
- **Don't** use "Hard" dividers. If you must separate content, use a 20% opacity `outline_variant` line that only spans 60% of the container's width.

---

## 7. Interaction Note
All transitions should be "Slow & Intentional." Use a `cubic-bezier(0.4, 0, 0.2, 1)` easing for all hover states and page transitions. The interface shouldn't "snap"; it should "bloom."