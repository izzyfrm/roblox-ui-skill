# Responsive Roblox UI

Responsive Roblox UI is not "use Scale everywhere."

The goal is to preserve usability across aspect ratios, resolutions, safe areas, and input methods.

## General

- Prefer Scale for large structural sizing and positioning.
- Use Offset for smaller fixed details such as padding, icons, borders, and minimum dimensions.
- Use AnchorPoint intentionally.
- Use UIAspectRatioConstraint when a visual must keep its shape.
- Use UISizeConstraint to prevent absurd sizes.
- Use UITextSizeConstraint when scaled text needs bounds.
- Use UIListLayout/UIGridLayout for repeated children.
- Use ScrollingFrame when content can exceed available space.

## Desktop

Use available space without stretching compact menus across the entire screen.

Hover may enhance controls, but important information cannot depend on hover.

## Mobile

Do not treat mobile as a smaller desktop layout.

- prioritize gameplay visibility
- use touch-friendly controls
- avoid tiny close/settings buttons
- keep UI away from Roblox touch controls
- respect unsafe areas
- collapse multi-column layouts when needed
- scroll instead of shrinking content into unreadability

Test both tall and wide phone layouts.

## Tablet

Tablet can use desktop-like composition, but controls still need touch-friendly sizing.

## Console

- make relevant controls Selectable
- establish sensible selection navigation
- make focused state obvious
- avoid hover-only interactions
- keep modal flows usable with a gamepad
- avoid pointer-precision layouts

## Review

Before finishing, resize the Studio viewport and check narrow mobile, standard desktop, wide desktop, scrolling, text wrapping, touch states, and controller navigation.
