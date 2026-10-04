# Interaction & Motion

Players should immediately know when a control is interactive and when an action was accepted.

## States

Use relevant states:

- idle
- hover
- pressed
- selected/focused
- disabled
- loading
- success
- error

Not every control needs every state.

## Buttons

Prefer subtle feedback such as a slight scale change, brightness shift, icon movement, short sound, or clear focus treatment.

Avoid dramatic bounce animations on routine controls.

## Timing

Most small transitions should feel immediate. A useful starting range is roughly **0.12–0.30 seconds**.

Longer motion can fit intros, victory screens, reward reveals, and cinematic moments.

## Tweening

Use TweenService for normal transitions rather than manual frame loops.

Avoid conflicting tweens. Cancel or replace previous tweens when state changes quickly.

Use Back, Elastic, and Bounce sparingly.

## Progress

When the player is waiting or completing an action:

- show measurable progress when available
- otherwise show a clear activity state
- animate progress smoothly
- communicate failure/cancellation
- avoid fake progress when real progress exists

## Sound

UI SFX should be short and restrained. Important actions may sound stronger than routine clicks.

## Big moments

Victory/reward moments can be more expressive:

1. establish the result
2. emphasize the winner/reward
3. layer VFX/SFX
4. reveal secondary details
5. provide a clear next action
