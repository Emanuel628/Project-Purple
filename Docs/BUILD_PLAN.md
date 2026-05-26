# Project Purple Build Plan

Project Purple is being built in structured phases. The first priority is the app shell: design, structure, navigation, and static pages before any backend or video infrastructure is added.

## Phase 1: Static App Shell

Goal: create a clickable static product shell that feels like a real premium creator-first video platform.

### Deliverables

- Documentation folder
- README
- Design system plan
- Page map
- Static HTML structure
- Core CSS tokens
- Light and dark themes
- Reusable layout components
- Mock content model
- Home / Discover experience
- Main watch page shell
- Creator page shell
- Collections page shell
- Studio shell
- Upload shell
- Vault shell
- Settings shell

### Design Rules

- Light mode and dark mode are both required.
- Purple is the main brand accent.
- Silver, black, and white support the premium feel.
- Do not copy YouTube's standard layout.
- Avoid a permanent YouTube-style full sidebar.
- Avoid calling the right rail "Up Next."
- Use creator-first language and layouts.

## Phase 2: Frontend Interactions

Goal: make the shell feel alive with mock data and client-side interactions.

Planned work:

- Theme toggle
- Mock video rendering
- Mock creator rendering
- Search filtering
- Category / collection filtering
- Follow button states
- Like / save button states
- Watch progress mock states
- Mobile navigation
- Basic localStorage persistence

## Phase 3: Backend Foundation

Goal: add the real application foundation.

Planned work:

- Users
- Auth
- Creator profiles
- Video metadata
- Comments
- Likes
- Saves
- Follows
- Reports
- Admin moderation foundation

## Phase 4: Video Pipeline

Goal: connect real video upload, processing, and playback.

Planned work:

- Video upload service
- Processing status
- Playback URLs
- Thumbnail generation
- Webhooks
- Watch page playback integration

## Phase 5: Creator Studio

Goal: build real creator tools.

Planned work:

- Video management
- Drafts
- Publish / unpublish
- Edit metadata
- Comment management
- Basic analytics

## Phase 6: Monetization

Goal: add revenue features only after the core product works.

Planned work:

- Paid creator subscriptions
- Tips
- Premium collections
- Stripe integration
- Platform fee tracking

## Phase 7: Moderation, Trust, and Scale

Goal: make the platform safer and more dependable.

Planned work:

- Reports dashboard
- Moderation queue
- User restrictions
- Content policy pages
- Audit logs
- Rate limiting
- Storage and bandwidth controls
