---
name: roblox-ui
description: Opinionated Roblox UI/UX guidance for Claude, Codex, and coding agents building polished, responsive, game-specific interfaces without generic AI-generated design patterns.
---

# Roblox UI Skill

A design and engineering skill for creating professional Roblox interfaces.

The goal is to prevent generic, sloppy, oversized, inconsistent, or obviously AI-generated Roblox UI.

## Core Principle

Build UI that looks like it was intentionally designed for the game.

Do not blindly generate a new interface.

Before changing existing UI:

1. Inspect the current hierarchy.
2. Understand what every important element does.
3. Preserve working functionality.
4. Identify visual and layout problems.
5. Improve the existing design instead of unnecessarily replacing it.

Never downgrade an existing interface.

## Roblox-Native UI

Prefer Roblox-native UI systems:

- ScreenGui
- Frame
- CanvasGroup
- ScrollingFrame
- TextLabel
- TextButton
- ImageLabel
- ImageButton
- UIListLayout
- UIGridLayout
- UIPadding
- UIScale
- UIAspectRatioConstraint
- UITextSizeConstraint
- UICorner
- UIStroke
- UIGradient

Use each component intentionally.

Do not add UIGradient, UIStroke, UICorner, shadows, or blur simply because they exist.

## Layout

Every interface must have clear visual hierarchy.

Important actions should be immediately recognizable.

Use consistent:

- spacing
- padding
- alignment
- sizing
- typography
- icon sizing
- corner radius

Prefer Scale for major positioning and sizing.

Use Offset mainly for small details such as padding, icons, borders, or minimum sizes.

Use AnchorPoint correctly.

Avoid manually positioning dozens of elements when a layout object can handle them.

Do not stack random Frames just to create spacing.

## Responsive Design

Every UI must be checked for:

- Desktop
- Mobile
- Tablet
- Console

The interface should not simply be a smaller desktop UI on mobile.

Mobile buttons must be easy to tap.

Important HUD elements must not overlap Roblox controls.

Text must remain readable on small displays.

Menus must stay inside safe screen areas.

Scrolling content should use ScrollingFrame when necessary.

Use UIScale, constraints, layouts, and responsive breakpoints when appropriate.

## Console

Console support is not optional when the game targets console.

Interactive elements should support controller navigation.

Make selectable elements visually obvious when focused.

Menus should have predictable navigation order.

Do not require mouse hovering for important information.

Avoid tiny buttons or controls that are difficult to select using a controller.

## Visual Design

Create a deliberate style that matches the game.

Good UI usually uses:

- one primary background family
- one main accent color
- strong readable text
- subtle secondary text
- consistent icons
- clear button states
- restrained effects

Do not make every element compete for attention.

Important buttons may be brighter or larger.

Secondary buttons should look secondary.

Dangerous actions should be visually distinct.

## Anti-Slop Rules

Avoid generic AI-generated UI patterns.

Do NOT automatically use:

- giant rounded cards
- excessive gradients
- neon glow everywhere
- glassmorphism everywhere
- huge headings
- excessive UIStroke
- random shadows
- unnecessary pills
- rainbow gradients
- giant empty spaces
- excessive blur
- excessive floating panels
- five different accent colors
- rounded rectangles for absolutely everything

Do not make every button identical.

Do not make every corner extremely round.

Do not put a gradient on every surface.

Do not make interfaces unnecessarily futuristic.

Do not replace a game's personality with generic SaaS-style UI.

## Typography

Maintain a clear hierarchy.

Typical hierarchy:

Title  
Section heading  
Primary information  
Secondary information  
Metadata

Avoid excessive font weights and sizes.

Do not make body text unnecessarily large.

Keep labels short when possible.

Use Roblox-supported fonts that match the game's style.

## Icons

Use icons when they improve recognition.

Icons must:

- use a consistent style
- have consistent sizing
- align correctly with text
- remain readable at smaller resolutions

Do not randomly mix outlined, filled, cartoon, and realistic icon sets.

Do not use emojis as substitutes for proper UI icons unless the game's visual language intentionally uses them.

## Buttons

Buttons need clear states:

- default
- hover
- pressed
- selected
- disabled

Buttons should visually respond when interacted with.

Do not make every button oversized.

Primary actions should be more visually prominent than secondary actions.

## Animation

Animation should make the UI feel responsive.

It should not slow the player down.

Recommended interaction animations are usually around:

0.12–0.30 seconds.

Useful animation examples:

- slight button scale
- subtle color change
- menu slide
- menu fade
- CanvasGroup transition
- selection highlight
- progress animation

Avoid excessive bouncing, spinning, glowing, or movement.

Do not animate everything at once.

Use appropriate easing styles.

## Game HUD

HUD should prioritize gameplay information.

Do not cover large portions of the screen unnecessarily.

Critical gameplay information should be visible without opening menus.

HUD elements should not distract from gameplay.

When possible, allow less-important HUD components to disappear when unused.

## Debugging Existing UI

When asked to fix or upgrade an existing interface, inspect for:

- incorrect AnchorPoint
- incorrect Scale/Offset usage
- overlapping elements
- clipping
- broken ZIndex
- inconsistent spacing
- inconsistent corner radius
- text truncation
- unreadable text
- bad contrast
- stretched images
- incorrect AspectRatio
- mobile overflow
- console navigation problems
- unnecessary duplicate UI
- broken visibility logic
- conflicting tweens
- UI that appears off-screen

Fix root causes rather than hiding them.

## Preserve Existing Systems

Do not remove:

- button functionality
- RemoteEvents
- LocalScripts
- ModuleScripts
- important instance names
- references used by other scripts
- animations
- game logic

unless the change is necessary and the replacement is verified.

Visual redesigns should not break gameplay.

## Performance

Avoid unnecessarily expensive interfaces.

Do not create large numbers of constantly running loops.

Avoid updating UI every frame unless truly required.

Do not repeatedly recreate UI objects when existing objects can be updated.

Avoid excessive BlurEffect usage.

Keep animations lightweight.

Disconnect unused events where appropriate.

## Style Matching

Before designing new UI, inspect the game.

Determine whether it is:

- cartoon
- competitive
- realistic
- simulator
- arcade
- horror
- casual
- social
- futuristic

Match the UI to that visual language.

A cartoon fighting game should not receive the same interface as a tactical shooter.

## Final Quality Check

Before considering UI work finished, verify:

Desktop layout works.

Mobile layout works.

Console navigation works.

Nothing overlaps.

Nothing is unintentionally off-screen.

Text is readable.

Buttons work.

Animations feel smooth.

Spacing is consistent.

Icons are aligned.

Important functionality was preserved.

The UI matches the game.

The result is visibly better than the previous version.

If the redesign is not clearly an improvement, continue refining it.


## Supporting Rules

Use these files when relevant:

- `rules/design.md` for hierarchy, spacing, typography, surfaces, and visual consistency.
- `rules/responsive.md` for desktop, mobile, tablet, and console behavior.
- `rules/interaction-motion.md` for button states, tweens, focus, feedback, and progress.
- `rules/debugging.md` for auditing and repairing existing Roblox UI.
- `rules/anti-slop.md` before final delivery to catch generic AI-generated UI patterns.
- `styles/presets.md` when choosing a visual direction for a game genre.
- `examples/prompts.md` for concise usage examples.
