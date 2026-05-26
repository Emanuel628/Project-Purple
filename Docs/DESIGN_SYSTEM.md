# Project Purple Design System

This document defines the initial design system for the Project Purple static app shell.

The goal is to create a premium creator-first video platform with light and dark mode support, purple branding, silver/black/white supporting tones, and a layout language that does not copy YouTube.

## Design Principles

### 1. Creator-first

The creator should feel central to the experience.

Every video surface should make the creator visible through:

- Avatar
- Creator name
- Creator handle
- Follow state
- Collection context

### 2. Premium, not crowded

Avoid dense thumbnail walls and noisy interfaces.

Use:

- Spacious layouts
- Large video surfaces
- Soft cards
- Clear hierarchy
- Strong typography
- Calm metadata

### 3. Light and dark mode both matter

Light mode is the default everyday brand experience.

Dark mode is a cinematic viewing experience.

Both themes must feel intentional, not like an afterthought.

### 4. Do not copy YouTube

Avoid:

- Permanent full sidebar
- Right rail called Up Next
- Red accents
- Endless same-size thumbnail grids
- Generic recommended rows

Use:

- Watch Path
- Creator Dock
- Collections
- Rising Creators
- Vault
- Studio

## Core Tokens

### Light Theme

```css
:root {
  --bg-app: #f6f7fb;
  --bg-shell: #ffffff;
  --bg-panel: #ffffff;
  --bg-panel-soft: #f1f3f8;
  --bg-elevated: #ffffff;

  --text-main: #111827;
  --text-muted: #667085;
  --text-faint: #98a2b3;

  --brand: #7c3aed;
  --brand-hover: #6d28d9;
  --brand-soft: rgba(124, 58, 237, 0.12);
  --brand-glow: rgba(124, 58, 237, 0.22);

  --silver: #cbd5e1;
  --silver-soft: #e5e7eb;
  --black: #09090b;
  --white: #ffffff;

  --border-soft: rgba(17, 24, 39, 0.10);
  --border-strong: rgba(17, 24, 39, 0.18);

  --shadow-soft: 0 18px 50px rgba(17, 24, 39, 0.08);
  --shadow-card: 0 14px 36px rgba(17, 24, 39, 0.10);
}
```

### Dark Theme

```css
[data-theme="dark"] {
  --bg-app: #07070c;
  --bg-shell: #0d0d14;
  --bg-panel: #141420;
  --bg-panel-soft: #1c1b2b;
  --bg-elevated: #181827;

  --text-main: #f8fafc;
  --text-muted: #a1a1aa;
  --text-faint: #71717a;

  --brand: #a855f7;
  --brand-hover: #c084fc;
  --brand-soft: rgba(168, 85, 247, 0.16);
  --brand-glow: rgba(168, 85, 247, 0.32);

  --silver: #cbd5e1;
  --silver-soft: #334155;
  --black: #020617;
  --white: #ffffff;

  --border-soft: rgba(203, 213, 225, 0.14);
  --border-strong: rgba(203, 213, 225, 0.22);

  --shadow-soft: 0 24px 80px rgba(0, 0, 0, 0.42);
  --shadow-card: 0 18px 60px rgba(0, 0, 0, 0.38);
}
```

## Typography

Recommended font stack:

```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

### Type Scale

- Display: 48px / 56px
- Page title: 36px / 44px
- Section title: 24px / 32px
- Card title: 16px / 24px
- Body: 14px / 22px
- Metadata: 12px / 18px

## Layout

### App Shell

The app shell should use:

- Top navigation
- Optional slim icon rail
- Main content region
- Responsive mobile drawer or bottom navigation

Avoid a large permanent YouTube-style sidebar.

### Watch Page

The watch page should use a creator-first layout:

1. Top navigation
2. Large cinematic player
3. Title and creator row
4. Creator dock
5. Description and chapters
6. Watch Path
7. Comments
8. More from creator / related collections

The Watch Path may be a side panel on desktop, but it should not visually dominate the page.

## Component List

### Layout Components

- Topbar
- Slim rail
- Mobile nav
- Page shell
- Content section
- Split panel
- Creator dock
- Watch path panel

### UI Components

- Button
- Icon button
- Search bar
- Theme toggle
- Avatar
- Badge
- Tabs
- Card
- Empty state
- Dropdown
- Modal
- Toast
- Form field

### Video Components

- Video card
- Featured video card
- Watch player shell
- Duration badge
- Creator row
- Collection card
- Comment card
- Engagement bar

## Buttons

Primary buttons should use the purple brand color.

Secondary buttons should use soft surfaces and subtle borders.

Danger buttons should be reserved for destructive actions only.

## Cards

Cards should feel soft and premium:

- Rounded corners
- Subtle border
- Gentle shadow
- Clear hover state
- Strong thumbnail presentation

Suggested radius:

```css
--radius-sm: 10px;
--radius-md: 16px;
--radius-lg: 24px;
--radius-xl: 32px;
```

## Motion

Motion should be subtle.

Use transitions for:

- Hover states
- Theme switching
- Menus
- Card elevation
- Button feedback

Avoid excessive bounce, spin, or gamified effects.

## Accessibility

The app shell must preserve:

- Visible focus states
- Good contrast
- Keyboard navigation support
- Semantic HTML
- Real button elements for actions
- Real links for navigation
- Alt text for meaningful images when added

## Design Quality Rule

Every page should answer:

1. What is this page for?
2. Who is the creator or viewer focused on?
3. What is the primary action?
4. Does this look like Project Purple, or does it look like YouTube?
