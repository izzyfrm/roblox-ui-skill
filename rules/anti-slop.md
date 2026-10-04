# Anti-Slop Rules

Use this before finalizing Roblox UI.

The goal is not to ban styles. The goal is to stop agents from reaching for the same generic visual tricks in every game.

## Do not default to

- giant rounded cards
- giant headings
- huge empty padding
- purple-blue gradients
- gradient text
- neon glow everywhere
- glassmorphism everywhere
- blur behind every menu
- thick UIStroke on every object
- rainbow gradients
- random floating panels
- pill-shaped everything
- excessive corner radius
- excessive shadows
- too many accent colors
- random emoji icons
- unnecessary badges
- dashboard layouts for gameplay UI
- oversized buttons that waste screen space

## Avoid the AI redesign failure mode

Do not replace a working interface with a totally different one just to prove work was done.

Do not delete useful information, remove functional buttons, rename referenced instances blindly, invent systems the user did not ask for, add filler, or erase the game's identity.

## Cards

Not every group needs a card.

Prefer spacing, alignment, typography, and subtle surface separation before another container.

## Gradients and strokes

Use gradients only when they support the art direction or hierarchy.

Use UIStroke for readability, selection/focus, or intentionally outlined art styles — not because every Frame feels empty.

## Effects

Do not stack blur + glow + stroke + gradient + transparency on every surface.

Pick the few effects that actually fit.

## Final test

Ask:

- Does this look like it belongs to this specific game?
- Could I paste it into ten unrelated games unchanged?
- Did decoration replace good layout?
- Did visual noise hurt readability?
- Did I add anything the player does not need?

If it feels generic, simplify it and lean harder into the game's visual language.
