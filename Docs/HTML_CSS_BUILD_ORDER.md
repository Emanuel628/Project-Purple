# Project Purple HTML/CSS Build Order

This document ranks the Project Purple HTML and CSS pages from most important to least important for the first visual build.

The goal is to build the product in an order that gives the app a usable, believable shell as early as possible.

This is HTML/CSS only.

Do not add backend logic, authentication logic, video upload logic, database code, payment code, or real API calls during these phases.

## Build Priority Principles

Build pages in this order based on:

1. User first impression
2. Core video platform experience
3. Creator identity
4. Navigation coverage
5. Account access
6. Creator management
7. Viewer retention pages
8. Trust/support pages
9. Future monetization/admin pages

## Phase A: Foundation CSS and Global Shell

These files must be built first because every page depends on them.

### Files

```txt
public/css/core/tokens.css
public/css/core/base.css
public/css/core/layout.css
public/css/core/components.css
public/css/app.css
```

### Goal

Create the Project Purple visual foundation.

### Must Include

- Light theme tokens
- Dark theme tokens
- Typography scale
- App background system
- Buttons
- Cards
- Top navigation
- Slim rail
- Page containers
- Video card styles
- Creator card styles
- Collection card styles
- Form basics
- Empty states
- Responsive layout basics

### Do Not Include

- Page-specific styling
- JavaScript behavior
- Backend/API code

### Acceptance Criteria

- Every later page can use the same shared visual system.
- Purple/silver/black/white identity is clear.
- Light and dark mode are both accounted for.
- Layout does not depend on a YouTube-style permanent sidebar.

## Phase B: Core Public Home and Discovery

These pages define the product's first impression.

### Files

```txt
public/index.html
public/html/home.html
public/html/discover.html
public/html/search.html
public/html/rising.html
public/html/creators.html

public/css/pages/home.css
public/css/pages/discover.css
public/css/pages/search.css
public/css/pages/rising.css
public/css/pages/creators.css
```

### Goal

Build the public-facing and logged-in discovery foundation.

### Page Priority

1. `index.html`
2. `home.html`
3. `discover.html`
4. `search.html`
5. `creators.html`
6. `rising.html`

### Why This Comes Early

These pages decide whether the product feels real.

The home page is also the landing feed.

Logged-out users should see a polished public discovery page.
Logged-in users should later see a personalized version of the same core layout.

### Acceptance Criteria

- Home feels like a premium creator-first video platform.
- It does not look like a YouTube clone.
- Discover highlights creators and collections, not only thumbnails.
- Search has a clear structure for videos, creators, and collections.
- Rising supports popular/trending-style discovery without copying YouTube language.

## Phase C: Main Watch Experience

This is the most important product page.

### Files

```txt
public/html/watch.html
public/css/pages/watch.css
```

### Goal

Create the central video viewing page.

### Must Include Visually

- Large cinematic player area
- Title area
- Creator row
- Follow action
- Engagement actions
- Creator dock
- Description area
- Chapters shell
- Watch Path module
- Comments shell
- More from creator section
- Related collections section

### Do Not Use

- A permanent YouTube-style right rail labeled "Up Next"
- Red accent language
- Endless recommendation stack as the page's main identity

### Acceptance Criteria

- The video feels like the stage.
- The creator stays visible.
- Watch Path feels like Project Purple's own concept.
- The page does not look like a copy/paste YouTube watch page.

## Phase D: Creator Identity and Collections

These pages make Project Purple creator-first instead of video-only.

### Files

```txt
public/html/creator.html
public/html/creator-videos.html
public/html/creator-collections.html
public/html/creator-about.html
public/html/collections.html
public/html/clips.html

public/css/pages/creator.css
public/css/pages/creator-videos.css
public/css/pages/creator-collections.css
public/css/pages/creator-about.css
public/css/pages/collections.css
public/css/pages/clips.css
```

### Page Priority

1. `creator.html`
2. `collections.html`
3. `creator-videos.html`
4. `creator-collections.html`
5. `creator-about.html`
6. `clips.html`

### Goal

Make creator pages and collections feel like a major product pillar.

### Acceptance Criteria

- Creator profile feels premium and personal.
- Collections feel more curated than generic playlists.
- Creator pages can show works, collections, and about information.
- Clips exists as a future-facing shell but does not dominate the product yet.

## Phase E: Authentication and Onboarding

These pages are required for a real app, but should be designed after the core product screens so they match the brand.

### Files

```txt
public/html/login.html
public/html/register.html
public/html/forgot-password.html
public/html/reset-password.html
public/html/verify-email.html

public/css/pages/login.css
public/css/pages/register.css
public/css/pages/forgot-password.css
public/css/pages/reset-password.css
public/css/pages/verify-email.css
```

### Page Priority

1. `register.html`
2. `login.html`
3. `verify-email.html`
4. `forgot-password.html`
5. `reset-password.html`

### Goal

Create a polished access flow without adding real auth yet.

### Acceptance Criteria

- Register explains the creator/viewer value clearly.
- Login is clean and trustworthy.
- Password pages are simple and calm.
- No forms should connect to real endpoints during the static phase.

## Phase F: Viewer Account and Retention Pages

These pages support returning users.

### Files

```txt
public/html/profile.html
public/html/account.html
public/html/settings.html
public/html/notifications.html
public/html/following.html
public/html/vault.html
public/html/history.html
public/html/saved.html
public/html/liked.html

public/css/pages/profile.css
public/css/pages/account.css
public/css/pages/settings.css
public/css/pages/notifications.css
public/css/pages/following.css
public/css/pages/vault.css
public/css/pages/history.css
public/css/pages/saved.css
public/css/pages/liked.css
```

### Page Priority

1. `profile.html`
2. `settings.html`
3. `vault.html`
4. `following.html`
5. `account.html`
6. `notifications.html`
7. `history.html`
8. `saved.html`
9. `liked.html`

### Goal

Create the user-owned side of the product.

### Acceptance Criteria

- Vault feels like a premium saved-content space.
- Following gives users a reason to return.
- Profile and settings feel polished and trustworthy.
- History, saved, and liked can be simpler because they may later fold into Vault.

## Phase G: Creator Studio Pages

These pages support creators managing their work.

### Files

```txt
public/html/studio.html
public/html/upload.html
public/html/studio-videos.html
public/html/studio-analytics.html
public/html/studio-comments.html
public/html/studio-settings.html

public/css/pages/studio.css
public/css/pages/upload.css
public/css/pages/studio-videos.css
public/css/pages/studio-analytics.css
public/css/pages/studio-comments.css
public/css/pages/studio-settings.css
```

### Page Priority

1. `studio.html`
2. `upload.html`
3. `studio-videos.html`
4. `studio-comments.html`
5. `studio-analytics.html`
6. `studio-settings.html`

### Goal

Create the management side for creators.

### Acceptance Criteria

- Studio overview feels useful even with mock data.
- Upload page is clearly a shell only.
- Studio videos gives creators a work-management surface.
- Analytics uses placeholder cards only.
- No real upload or API logic is added.

## Phase H: Trust, Legal, Support, and Error Pages

These pages are less exciting but required for a serious platform.

### Files

```txt
public/html/guidelines.html
public/html/help.html
public/html/contact.html
public/html/terms.html
public/html/privacy.html
public/html/not-found.html

public/css/pages/guidelines.css
public/css/pages/help.css
public/css/pages/contact.css
public/css/pages/terms.css
public/css/pages/privacy.css
public/css/pages/not-found.css
```

### Page Priority

1. `guidelines.html`
2. `help.html`
3. `contact.html`
4. `privacy.html`
5. `terms.html`
6. `not-found.html`

### Goal

Make the platform feel trustworthy and complete.

### Acceptance Criteria

- Guidelines make community expectations visible.
- Help and contact provide support structure.
- Terms and privacy are placeholders only until legal copy is ready.
- Not-found page feels branded and useful.

## Phase I: Monetization and Admin Shells

These are important, but they should not drive the first visual build.

### Files

```txt
public/html/monetization.html
public/html/admin.html

public/css/pages/monetization.css
public/css/pages/admin.css
```

### Page Priority

1. `admin.html`
2. `monetization.html`

### Goal

Create future-facing shells for trust and revenue.

### Acceptance Criteria

- Admin page shows moderation/reporting structure only.
- Monetization page shows future creator revenue structure only.
- No real payments, payouts, moderation actions, or backend logic are added.

## Full Build Order Summary

Build in this exact order:

```txt
1. Core CSS foundation
2. Home / landing feed
3. Discover
4. Search
5. Main watch page
6. Creator page
7. Collections
8. Creator subpages
9. Register
10. Login
11. Profile
12. Settings
13. Vault
14. Following
15. Studio overview
16. Upload shell
17. Studio videos
18. Studio comments
19. Studio analytics
20. Account / notifications
21. History / saved / liked
22. Guidelines / help / contact
23. Privacy / terms / not-found
24. Admin shell
25. Monetization shell
26. Clips shell
```

## Work Discipline

When building each phase:

- Complete HTML structure first.
- Then complete page CSS.
- Then review responsive behavior.
- Then move to the next group.
- Do not jump ahead into JavaScript or backend logic.

## Review Rule

After each phase, move review notes into `Work to review/`.

Only move work into `Completed work/` after the page group is visually accepted.
