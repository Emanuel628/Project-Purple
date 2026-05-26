# Project Purple Page Map

This page map defines the first static app shell for Project Purple.

The first build should create a believable product shell, not a finished video platform.

## Route Strategy

During Phase 1, routes can be static HTML files.

Later phases can replace this with a real frontend router or backend-served routes.

## Public Pages

### `/` or `/html/landing.html`

Landing page for visitors.

Purpose:

- Explain Project Purple
- Present the creator-first video platform concept
- Show premium purple brand direction
- Encourage users to start creating or discover creators

Sections:

- Hero
- Creator-first value proposition
- Feature cards
- Watch experience preview
- Collections preview
- Creator spotlight
- Final call to action
- Footer

Primary actions:

- Start creating
- Discover creators

## App Pages

### `/html/home.html`

Logged-in home experience.

Purpose:

- Provide a premium home dashboard
- Surface creators, collections, and featured videos
- Avoid a generic YouTube-style feed

Sections:

- Welcome header
- Featured creator spotlight
- Continue watching
- New from following
- Rising creators
- Featured collections

Primary actions:

- Watch featured video
- Follow creator
- Open collection

### `/html/discover.html`

Discovery page.

Purpose:

- Help users find creators, collections, and videos
- Keep discovery curated and creator-first

Sections:

- Search / filter header
- Category chips
- Featured collections
- Rising creators
- Popular this week
- New releases

Primary actions:

- Filter by category
- Open creator page
- Open collection
- Watch video

### `/html/watch.html`

Main video watch page.

Purpose:

- Provide the core viewing experience
- Make the video feel cinematic
- Keep the creator visible
- Avoid YouTube's standard watch layout

Sections:

- Top navigation
- Large cinematic player shell
- Title and creator row
- Action row: like, save, share
- Creator dock
- Description
- Chapters
- Watch Path
- Comments
- More from this creator
- Related collections

Primary actions:

- Play video placeholder
- Follow creator
- Save video
- Open next item in Watch Path
- Comment

Important language:

- Use "Watch Path"
- Do not use "Up Next"

### `/html/creator.html`

Creator page.

Purpose:

- Present a creator as a person/brand, not just a channel
- Show their work, collections, and profile identity

Sections:

- Creator banner
- Avatar and creator identity
- Follow button
- About summary
- Creator stats
- Featured work
- Collections
- Recent videos
- About tab shell

Primary actions:

- Follow creator
- Watch featured video
- Open collection

### `/html/collections.html`

Collections page.

Purpose:

- Show curated groups of videos
- Replace generic playlist language with premium collection language

Sections:

- Collection hero
- Collection description
- Creator attribution
- Videos in collection
- Related collections
- Save collection

Primary actions:

- Start collection
- Save collection
- Open video

### `/html/studio.html`

Creator Studio shell.

Purpose:

- Give creators a premium dashboard to manage work
- Keep Phase 1 static and mock-data-only

Sections:

- Studio overview
- Channel health card
- Recent uploads
- Drafts
- Comments needing reply
- Quick stats
- Creator checklist

Primary actions:

- Upload new work
- Edit mock video
- View comments

### `/html/upload.html`

Upload shell.

Purpose:

- Show the future upload workflow without implementing real uploads

Sections:

- Upload dropzone placeholder
- Video details form
- Thumbnail placeholder
- Visibility selector
- Category selector
- Collection selector
- Publish settings

Primary actions:

- Save draft placeholder
- Publish disabled placeholder

Important note:

No real upload logic should be added in Phase 1.

### `/html/vault.html`

Vault page.

Purpose:

- Replace generic library language
- Store saved, liked, and history-style items

Sections:

- Saved videos
- Saved collections
- Watch history
- Liked videos
- Private notes placeholder

Primary actions:

- Resume watching
- Open saved video
- Open collection

### `/html/settings.html`

Settings page.

Purpose:

- Manage profile and app preferences
- Include theme selection

Sections:

- Profile settings
- Appearance
- Notifications
- Privacy
- Creator mode
- Account

Primary actions:

- Switch Light / Dark / System
- Edit profile placeholder
- Enable creator mode placeholder

## Admin / Trust Page

### `/html/admin.html`

Admin moderation shell.

Purpose:

- Keep trust and safety visible from the beginning
- Provide a future foundation for moderation

Sections:

- Reported videos
- Reported comments
- Flagged creators
- Pending review
- Admin notes
- System status placeholder

Primary actions:

- Review report placeholder
- Dismiss report placeholder
- Restrict user placeholder

## Navigation Model

### Top Navigation

Use top navigation as the primary brand layout.

Recommended items:

- Project Purple logo
- Discover
- Collections
- Rising Creators
- Studio
- Search
- Upload
- Profile
- Theme toggle

### Slim Rail

Optional app rail for logged-in app pages.

Recommended items:

- Home
- Discover
- Watch Path
- Vault
- Studio
- Settings

This should be icon-focused and compact, not a full YouTube-style sidebar.

## First Build Order

Build pages in this order:

1. Landing
2. Home
3. Discover
4. Watch
5. Creator
6. Collections
7. Studio
8. Upload
9. Vault
10. Settings
11. Admin

## Phase 1 Completion Standard

Phase 1 is complete when:

- Every main page exists
- Navigation links work between static pages
- Light and dark themes exist
- Mock content makes the product feel real
- The watch page does not resemble a YouTube clone
- Creator identity is visible throughout the app
- The folder structure is ready for JavaScript and backend phases
