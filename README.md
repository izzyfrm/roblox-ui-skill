# Roblox UI Skill

A reusable Roblox UI/UX skill for Claude, Codex, and coding agents.

It exists for one reason: **stop AI from making bad Roblox UI.**

Instead of one giant prompt, this repo gives agents reusable guidance for Roblox-native layouts, responsive UI, gameplay HUDs, touch/controller support, motion, debugging, style direction, and anti-slop checks.

## Install

### Codex

```powershell
npx roblox-ui-skill --codex
```

Installs to:

```text
~/.agents/skills/roblox-ui
```

### Claude Code

```powershell
npx roblox-ui-skill --claude
```

Installs to:

```text
~/.claude/skills/roblox-ui
```

### Claude web / desktop

```powershell
npx roblox-ui-skill --claude-upload
```

Creates a ZIP for Claude's skill upload flow.

> The npx commands work after the package is published to npm. Until then, clone the repo and run the installer locally.

## Structure

```text
roblox-ui-skill/
├─ SKILL.md
├─ rules/
│  ├─ anti-slop.md
│  ├─ debugging.md
│  ├─ design.md
│  ├─ interaction-motion.md
│  └─ responsive.md
├─ styles/
│  └─ presets.md
├─ examples/
│  └─ prompts.md
├─ bin/
│  └─ roblox-ui-skill.js
├─ package.json
└─ LICENSE
```

## Example

```text
Use the Roblox UI skill with the cartoon preset.

Inspect my existing lobby UI first. Preserve all functionality, then improve the layout, icons, spacing, responsiveness, and animations.

Make it feel like a polished Roblox cartoon brawler, not a generic web dashboard.
```

## Philosophy

Good Roblox UI should feel like part of the game.

```text
correctness
→ gameplay readability
→ usability
→ hierarchy
→ responsiveness
→ touch/controller support
→ visual polish
→ animation
→ decoration
```

## Contributing

Issues and pull requests are welcome. Useful contributions include better presets, responsive patterns, controller guidance, Roblox UI edge cases, performance improvements, and anti-patterns that repeatedly cause bad AI-generated UI.

## License

MIT
