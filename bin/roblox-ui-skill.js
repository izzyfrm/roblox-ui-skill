#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");

const args = new Set(process.argv.slice(2));
const skillName = "roblox-ui";
const packageRoot = path.resolve(__dirname, "..");

function printHelp() {
  console.log(`
roblox-ui-skill

Usage:
  npx roblox-ui-skill --codex
  npx roblox-ui-skill --claude
  npx roblox-ui-skill --claude-upload

Options:
  --codex          Install globally for Codex
  --claude         Install globally for Claude Code
  --claude-upload  Create a ZIP for Claude web/desktop skill upload
  --claude-web     Alias for --claude-upload
  --help           Show this help message
`);
}

function copyEntry(name, targetRoot) {
  const source = path.join(packageRoot, name);
  const target = path.join(targetRoot, name);

  if (!fs.existsSync(source)) return;

  fs.cpSync(source, target, { recursive: true, force: true });
}

function install(targetRoot, agentName) {
  fs.rmSync(targetRoot, { recursive: true, force: true });
  fs.mkdirSync(targetRoot, { recursive: true });

  for (const entry of ["SKILL.md", "rules", "styles", "examples"]) {
    copyEntry(entry, targetRoot);
  }

  console.log(`✓ Installed roblox-ui for ${agentName}`);
  console.log(`  ${targetRoot}`);
}

function makeCrcTable() {
  const table = new Uint32Array(256);

  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[n] = c >>> 0;
  }

  return table;
}

const crcTable = makeCrcTable();

function crc32(buffer) {
  let crc = 0xffffffff;

  for (const byte of buffer) {
    crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }

  return (crc ^ 0xffffffff) >>> 0;
}

function dosDateTime(date = new Date()) {
  const year = Math.max(1980, date.getFullYear());

  const time =
    (date.getHours() << 11) |
    (date.getMinutes() << 5) |
    Math.floor(date.getSeconds() / 2);

  const day =
    ((year - 1980) << 9) |
    ((date.getMonth() + 1) << 5) |
    date.getDate();

  return { time, day };
}

function collectFiles(source, zipBase) {
  const files = [];

  function walk(current, relative = "") {
    const stat = fs.statSync(current);

    if (stat.isDirectory()) {
      for (const name of fs.readdirSync(current)) {
        walk(path.join(current, name), path.join(relative, name));
      }
      return;
    }

    files.push({
      source: current,
      name: path.posix.join(zipBase, relative.split(path.sep).join("/"))
    });
  }

  walk(source);
  return files;
}

function createZip(outputPath) {
  const entries = [
    {
      source: path.join(packageRoot, "SKILL.md"),
      name: `${skillName}/skill.md`
    }
  ];

  for (const dir of ["rules", "styles", "examples"]) {
    const source = path.join(packageRoot, dir);
    if (fs.existsSync(source)) {
      entries.push(...collectFiles(source, `${skillName}/${dir}`));
    }
  }

  const localParts = [];
  const centralParts = [];
  let offset = 0;
  const { time, day } = dosDateTime();

  for (const entry of entries) {
    const data = fs.readFileSync(entry.source);
    const name = Buffer.from(entry.name.replace(/\\/g, "/"), "utf8");
    const crc = crc32(data);

    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);
    local.writeUInt16LE(0x0800, 6);
    local.writeUInt16LE(0, 8);
    local.writeUInt16LE(time, 10);
    local.writeUInt16LE(day, 12);
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(data.length, 18);
    local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(name.length, 26);
    local.writeUInt16LE(0, 28);
    localParts.push(local, name, data);

    const central = Buffer.alloc(46);
    central.writeUInt32LE(0x02014b50, 0);
    central.writeUInt16LE(20, 4);
    central.writeUInt16LE(20, 6);
    central.writeUInt16LE(0x0800, 8);
    central.writeUInt16LE(0, 10);
    central.writeUInt16LE(time, 12);
    central.writeUInt16LE(day, 14);
    central.writeUInt32LE(crc, 16);
    central.writeUInt32LE(data.length, 20);
    central.writeUInt32LE(data.length, 24);
    central.writeUInt16LE(name.length, 28);
    central.writeUInt16LE(0, 30);
    central.writeUInt16LE(0, 32);
    central.writeUInt16LE(0, 34);
    central.writeUInt16LE(0, 36);
    central.writeUInt32LE(0, 38);
    central.writeUInt32LE(offset, 42);
    centralParts.push(central, name);

    offset += local.length + name.length + data.length;
  }

  const centralDirectory = Buffer.concat(centralParts);
  const end = Buffer.alloc(22);

  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(0, 4);
  end.writeUInt16LE(0, 6);
  end.writeUInt16LE(entries.length, 8);
  end.writeUInt16LE(entries.length, 10);
  end.writeUInt32LE(centralDirectory.length, 12);
  end.writeUInt32LE(offset, 16);
  end.writeUInt16LE(0, 20);

  fs.writeFileSync(
    outputPath,
    Buffer.concat([...localParts, centralDirectory, end])
  );
}

function buildClaudeUpload() {
  const outputPath = path.resolve(process.cwd(), "roblox-ui-claude.zip");
  createZip(outputPath);

  console.log("✓ Created Claude upload ZIP");
  console.log(`  ${outputPath}`);
  console.log("");
  console.log("Claude: Customize → Skills → Add → Create skill → Upload a skill");
}

if (args.has("--help") || args.size === 0) {
  printHelp();
  process.exit(0);
}

const selected = [
  args.has("--claude") ? "claude" : null,
  args.has("--codex") ? "codex" : null,
  (args.has("--claude-upload") || args.has("--claude-web")) ? "claude-upload" : null
].filter(Boolean);

if (selected.length !== 1) {
  console.error("Choose exactly one target: --codex, --claude, or --claude-upload");
  process.exit(1);
}

if (selected[0] === "claude") {
  install(path.join(os.homedir(), ".claude", "skills", skillName), "Claude Code");
}

if (selected[0] === "codex") {
  install(path.join(os.homedir(), ".agents", "skills", skillName), "Codex");
}

if (selected[0] === "claude-upload") {
  buildClaudeUpload();
}
