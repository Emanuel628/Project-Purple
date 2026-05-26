# Project Purple Repository Structure

This document defines the professional repository structure for Project Purple.

The goal is to keep the project organized from the beginning and prevent files from being scattered across the repo.

## Current Top-Level Structure

```txt
Project-Purple/
  .github/
  Completed work/
  Docs/
  public/
  src/
  Work to do/
  Work to review/
  .editorconfig
  .gitignore
  CONTRIBUTING.md
  README.md
```

## Folder Responsibilities

### `.github/`

GitHub repository management files.

Use for:

- Issue templates
- Pull request templates
- Future GitHub Actions workflows
- Repository automation

Do not use for app code or product documentation.

### `Docs/`

Core project documentation.

Use for:

- Build plans
- Brand direction
- Design system
- Page maps
- Phase strategy
- Data model drafts
- Repository structure documentation

Do not use for active task tracking. Use the work folders instead.

### `public/`

Static app shell files for Phase 1.

Planned structure:

```txt
public/
  index.html
  html/
  css/
  js/
  assets/
```

Use for:

- Static HTML
- Static CSS
- Static JavaScript
- Images and icons
- Mock assets

Do not add backend code here.

### `src/`

Future app source code.

This folder is reserved for later phases if/when the project moves beyond a static shell into a more formal app architecture.

Do not dump random files here.

### `Work to do/`

Planned work that has not started yet.

Use for:

- Codex-ready work packets
- Feature task files
- Phase task lists
- Implementation instructions

### `Work to review/`

Work that was created but still needs review.

Use for:

- QA notes
- Review checklists
- Pending fixes
- Screenshot review notes
- Design review notes

### `Completed work/`

Finished and accepted work records.

Use for:

- Completed task summaries
- Milestone notes
- Final implementation records
- Accepted review notes

## Naming Rules

Use clear names.

Preferred:

```txt
DESIGN_SYSTEM.md
PAGE_MAP.md
BUILD_PLAN.md
```

Avoid vague names:

```txt
notes.md
stuff.md
newfile.md
random.md
```

## Phase 1 File Rules

Phase 1 is static app shell only.

Allowed:

- HTML
- CSS
- Basic JavaScript
- Mock data
- Static assets
- Documentation

Not allowed:

- Backend server code
- Database code
- Real authentication
- Real video uploads
- Payments
- Creator payouts
- Video transcoding
- Recommendation algorithms

## Future Recommended Structure

When the static shell begins, use this structure:

```txt
public/
  index.html
  html/
    landing.html
    home.html
    discover.html
    watch.html
    creator.html
    collections.html
    studio.html
    upload.html
    vault.html
    settings.html
    admin.html
  css/
    app.css
    core/
      tokens.css
      base.css
      layout.css
      components.css
    pages/
      landing.css
      home.css
      discover.css
      watch.css
      creator.css
      collections.css
      studio.css
      upload.css
      vault.css
      settings.css
      admin.css
  js/
    app.js
    theme.js
    mock-data.js
    ui.js
    pages/
  assets/
    logo/
    icons/
    avatars/
    thumbnails/
    mockups/
```

## Review Rule

Before accepting any major change, check:

1. Is it in the correct folder?
2. Does it belong to the current phase?
3. Did it avoid out-of-scope systems?
4. Does it preserve the creator-first direction?
5. Does it avoid copying YouTube's standard layout?
