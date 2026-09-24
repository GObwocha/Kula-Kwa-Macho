# KulaKwaMacho Design System

## Design Objective

Create a visual identity that communicates:

> Kenyan food + modern internet culture + playful dopamine.

The interface should feel like a premium food publication collided with a very unserious delivery app.

---

## Layout

Use a responsive container with generous horizontal spacing.

Desktop:

* max-width around 1200–1400px
* editorial layouts
* large imagery
* asymmetric sections where useful

Mobile:

* single-column first
* horizontal carousels where useful
* sticky tray access
* large tap targets

---

## Cards

Food cards should prioritize imagery.

Recommended hierarchy:

```text
IMAGE
↓
Food name
↓
Short description
↓
Metadata
↓
Price
↓
Action
```

Avoid stuffing every available attribute into the card.

---

## Buttons

Primary actions should feel tactile.

Examples:

* Start craving
* Add to tray
* Surprise me
* Let's eat
* Show me the damage
* Follow the rider

Secondary actions should be visually quieter.

---

## Microcopy

Use Kenyan-flavored humor naturally.

Good:

> "Your rider has entered Nairobi traffic."

> "The chapati is emotionally unavailable."

> "Your order is moving. Technically."

Avoid forced slang.

Do not randomly insert Sheng into every sentence.

---

## Empty States

Empty states should be entertaining.

Example:

> "Your tray is emptier than a campus fridge after HELB delays."

Use humor carefully and avoid jokes that could become offensive or overly political.

---

## Loading

Instead of generic:

> Loading...

Use contextual states:

> "Warming the jiko..."

> "Finding the good pilau..."

> "Calling the rider..."

Keep loading text short.

---

## Motion

Animation should reinforce the product.

Use:

* spring-like transitions
* subtle scale
* slide
* fade
* progress animations

Respect reduced motion.

---

## Responsive Requirements

Test at:

* 320px
* 360px
* 390px
* 412px
* 768px
* 1024px
* 1280px
* 1440px+

Do not allow horizontal overflow.

---

## Accessibility

Minimum requirements:

* WCAG-conscious contrast
* keyboard support
* semantic landmarks
* focus states
* accessible dialogs
* descriptive alt text
* reduced-motion support

---

## Visual Quality Rule

Before shipping a page, ask:

> Would this look believable as a polished Kenyan consumer startup?

If not, refine it.
