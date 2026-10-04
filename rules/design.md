# Design Rules

## Hierarchy first

A player should understand the most important information and action quickly.

Use size, weight, contrast, placement, and spacing before effects. If everything is bright, large, glowing, or outlined, nothing is emphasized.

## Spacing and alignment

Choose a spacing rhythm and reuse it.

Prefer `UIPadding` with `UIListLayout` or `UIGridLayout` for repeated content instead of unique offsets for every child.

Check titles, icon/text baselines, repeated rows, button groups, columns, and HUD anchors.

## Surfaces

Use the minimum number of layers necessary.

A menu usually needs one primary panel, content grouping, and controls. It rarely needs several nested translucent cards.

## Color

Use a controlled palette:

- background/surface family
- primary text
- secondary text
- one main accent
- semantic success/warning/error colors when needed

Pull accent colors from the game's art direction instead of defaulting to purple or blue.

## Contrast

HUD text and controls must remain readable over bright, dark, and moving gameplay backgrounds.

Use restrained backing, stroke, shadow, or surface treatment instead of giant panels by default.

## Typography

Use a small type scale. Do not create a unique size for every label.

Scores, timers, health, votes, currency, and other gameplay-critical values should read at a glance.

## Information density

Gameplay HUD should stay compact. Full menus can hold more information because the player intentionally opened them.

## Empty states

Design loading, error, empty inventory, no votes, no friends, and no rewards states intentionally.

Blank panels should not look broken.

## Consistency

Repeated components should share spacing, radius, icon scale, typography, interaction states, and disabled treatment.
