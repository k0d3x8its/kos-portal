# KOS Portal

An [Obsidian](https://obsidian.md) plugin that gives your [KOS](https://github.com/k0d3x8its/kos) vault a native chat interface — query your knowledge base, run KOS skills, and get AI-powered answers without leaving Obsidian.

KOS Portal lives in the right sidebar, directly below [KOS Burn Bar](https://github.com/k0d3x8its/kos-burn-bar). Responses stream in real time. Wikilinks in answers open notes directly in the editor.

## What is KOS?

[KOS (Kodex OS)](https://github.com/k0d3x8its/kos) is a personal knowledge management system built on Obsidian. It uses a structured wiki schema and a set of AI skills to capture, organize, and surface your knowledge. KOS Portal is the in-vault chat interface for that system.

## Features

- **Vault queries** — ask anything in plain text; KOS Portal routes it to `/kos-query` and synthesizes an answer from your own captured knowledge
- **Skill invocation** — prefix with `/` to run any KOS skill (`/kos-ingest`, `/kos-archive`, etc.) directly from the panel
- **Streaming responses** — output streams token-by-token so long skill runs give live feedback
- **Tool visibility** — file reads and writes appear as status lines during skill runs so you always know what the AI is doing
- **Clickable wikilinks** — `[[note]]` references in responses open the target note in the editor
- **Session control** — conversations are stateful within a session; "New Session" resets context and clears the thread

## Requirements

- [Obsidian](https://obsidian.md) desktop (v1.0.0+)
- [Claude Code CLI](https://claude.ai/code) installed and on PATH
- A [KOS vault](https://github.com/k0d3x8its/kos) initialized with `SCHEMA.md`
- KOS skills symlinked into `~/.claude/skills/` (see [KOS setup](https://github.com/k0d3x8its/kos))

## Installation

### From the Obsidian plugin marketplace

Search for **KOS Portal** in Settings → Community plugins → Browse.

### Manual

1. Download `main.js`, `manifest.json`, and `styles.css` from the [latest release](https://github.com/k0d3x8its/kos-portal/releases)
2. Copy them to `<your-vault>/.obsidian/plugins/kos-portal/`
3. Enable the plugin in Settings → Community plugins

## Usage

Open the right sidebar. KOS Portal appears below [KOS Burn Bar](https://github.com/k0d3x8its/kos-burn-bar).

| Input | What happens |
|---|---|
| `what did I capture last week?` | Routes to `/kos-query`, searches your wiki, returns a synthesized answer |
| `/kos-ingest` | Runs the KOS ingest skill — processes raw notes into your wiki |
| `/kos-archive` | Runs the KOS archive skill |

Click **New Session** to reset the conversation and start fresh.

## Sidebar layout

KOS Portal is designed to stack below [KOS Burn Bar](https://github.com/k0d3x8its/kos-burn-bar) in the right sidebar. Install both plugins and load order handles the positioning automatically.

## Related

- [KOS](https://github.com/k0d3x8its/kos) — the knowledge system KOS Portal is built for
- [KOS Burn Bar](https://github.com/k0d3x8its/kos-burn-bar) — Claude Code token burn meter, sits above KOS Portal in the sidebar
