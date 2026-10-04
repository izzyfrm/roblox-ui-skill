# Debugging Existing Roblox UI

When asked to fix, upgrade, or clean up UI, inspect before rebuilding.

## Audit

Check for:

- duplicate ScreenGuis
- duplicated event connections
- unexpected Visible/Enabled states
- wrong DisplayOrder or ZIndex
- incorrect AnchorPoint
- fragile Position/Size values
- unnecessary nested Frames
- missing layout objects
- AutomaticSize conflicts
- clipping
- stretched images
- incorrect aspect ratios
- text truncation
- inconsistent TextScaled usage
- unreadable contrast
- mobile overflow
- controller selection traps
- overlapping Roblox controls
- stale or conflicting tweens

## Preserve references

Before renaming or moving instances, search scripts for Name, PlayerGui paths, WaitForChild/FindFirstChild, CollectionService tags, attributes, BindableEvents, RemoteEvents, and RemoteFunctions.

Do not break code just to clean up the hierarchy.

## Fix root causes

Bad fix: keep adding Position offsets until one viewport looks correct.

Better fix: correct AnchorPoint, layout containers, padding, constraints, conflicting properties, and then test several viewports.

## Event bugs

Watch for duplicated MouseButton1Click/InputBegan connections, RenderStepped connections that never disconnect, tweens fighting each other, debounces that never reset, and hidden UI consuming input.

## Upgrade order

1. inspect current behavior
2. record what must remain functional
3. fix structural bugs
4. fix responsiveness
5. improve hierarchy
6. apply visual polish
7. add motion
8. test input methods
9. re-test gameplay interactions

Do not decorate broken layout.
