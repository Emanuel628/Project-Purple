# Project Purple Phases

Project Purple should be built in controlled phases so the foundation stays clean.

Do not build everything at once.

## Phase 1: Static App Shell

Goal: create the visual and structural foundation.

This phase contains no backend logic, no database, no auth, and no real video upload.

### Build

- README
- Docs folder
- Build plan
- Brand direction
- Design system
- Page map
- Static HTML pages
- Core CSS
- Light theme
- Dark theme
- Navigation structure
- Mock video cards
- Mock creator cards
- Watch page shell
- Creator page shell
- Studio shell

### Do Not Build

- Authentication
- Real uploads
- Video playback infrastructure
- Database
- Payments
- Email
- Creator payouts
- Recommendation algorithm
- Livestreaming

### Exit Criteria

Phase 1 is done when the static app can be clicked through and looks like a premium creator-first video platform.

## Phase 2: Frontend Interactions and Mock Data

Goal: make the static shell interactive using mock data.

### Build

- Mock data file
- Render videos from data
- Render creators from data
- Theme toggle
- Mobile menu
- Search filtering
- Category filtering
- Follow button states
- Like/save states
- Mock comments
- Mock upload state
- LocalStorage for theme and simple UI state

### Do Not Build

- Real accounts
- Real comments
- Real uploads
- API requests
- Database writes

### Exit Criteria

Phase 2 is done when the app feels interactive even though all data is local/mock data.

## Phase 3: Backend Foundation

Goal: introduce the real app foundation.

### Build

- Backend app structure
- Environment config
- Health check
- Users
- Auth
- Sessions or JWT
- Creator profiles
- Video metadata model
- Comments model
- Likes model
- Saves model
- Follows model
- Reports model
- Basic admin permissions

### Do Not Build

- Complex recommendations
- Payments
- Creator payouts
- Livestreaming
- Large-scale analytics

### Exit Criteria

Phase 3 is done when users can register, log in, create a creator profile, and interact with video metadata without real video streaming yet.

## Phase 4: Video Upload and Streaming Pipeline

Goal: connect real video infrastructure.

### Build

- Video provider integration
- Upload URL flow
- Video processing status
- Playback URL storage
- Thumbnail generation
- Webhook handling
- Watch page playback connection
- Error states for processing failure

### Important Decision

Do not self-host the first real video pipeline unless there is a strong reason.

A managed video provider is preferred early because video processing, storage, CDN, and bandwidth can become expensive and complicated.

### Exit Criteria

Phase 4 is done when a creator can upload a video, processing completes, and viewers can watch it inside Project Purple.

## Phase 5: Creator Studio Tools

Goal: make the creator side useful.

### Build

- Manage videos
- Edit video details
- Draft videos
- Publish/unpublish
- Manage collections
- Comment moderation
- Basic analytics
- Creator settings

### Exit Criteria

Phase 5 is done when creators can manage their published work without admin intervention.

## Phase 6: Monetization

Goal: add revenue features after the product foundation works.

### Build

- Stripe integration
- Paid collections
- Creator subscriptions
- Tips
- Premium videos
- Platform fee tracking
- Billing settings
- Payment history

### Do Not Build Too Early

Avoid monetization before upload, playback, creator identity, and trust systems are stable.

### Exit Criteria

Phase 6 is done when creators can earn from selected content and users can pay safely.

## Phase 7: Moderation, Trust, and Scale

Goal: keep the platform safe and reliable.

### Build

- Report queues
- Admin review tools
- User restrictions
- Content takedown flow
- Audit logs
- Rate limiting
- Storage limits
- Bandwidth controls
- Abuse monitoring
- Terms / policy pages

### Exit Criteria

Phase 7 is done when Project Purple has credible trust and safety controls for a public beta.

## Build Discipline

Every phase must protect the work from unnecessary drift.

Rules:

1. Finish the current phase before adding the next phase's systems.
2. Do not add backend code during the static shell phase.
3. Do not add real video upload before the data model and auth are stable.
4. Do not add payments before creator flows are stable.
5. Do not copy YouTube's layout just because it is familiar.
6. Keep Project Purple creator-first.
