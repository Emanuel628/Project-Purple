# Project Purple Page Inventory

This document compares the major page types a YouTube-style video platform needs and translates them into Project Purple's creator-first product language.

The goal is not to copy YouTube's layout. The goal is to make sure Project Purple has the same functional coverage a serious video platform needs.

## Important Product Decision

The public landing page and the home feed should be the same core page experience.

For logged-out users, the home page acts as a public landing/discovery page.

For logged-in users, the same page becomes a personalized home feed.

This avoids maintaining a separate marketing-only landing page too early.

## Main Viewer Pages

| YouTube Page Type | Project Purple Page | Route Idea | Phase 1 Needed? | Notes |
| --- | --- | --- | --- | --- |
| Home | Home / Landing Feed | `/` or `/html/home.html` | Yes | Public landing when logged out, personalized feed when logged in. |
| Watch | Watch | `/html/watch.html` | Yes | Core video page. Must avoid YouTube right-rail clone. |
| Shorts | Clips | `/html/clips.html` | Later | Not needed in Phase 1 unless used as a shell only. |
| Subscriptions | Following | `/html/following.html` | Yes | Videos and creators the user follows. |
| Explore | Discover | `/html/discover.html` | Yes | Creator-first discovery. |
| Trending | Rising | `/html/rising.html` | Optional | Can be part of Discover at first. |
| Search Results | Search | `/html/search.html` | Yes | Needed for videos, creators, and collections. |
| Library | Vault | `/html/vault.html` | Yes | Saved, liked, watch history, collections. |
| History | Watch History | `/html/history.html` | Later | Can live inside Vault first. |
| Watch Later | Saved / Watch Later | `/html/saved.html` | Later | Can live inside Vault first. |
| Liked Videos | Liked | `/html/liked.html` | Later | Can live inside Vault first. |
| Playlists | Collections | `/html/collections.html` | Yes | Important Project Purple concept. |
| Notifications | Notifications | `/html/notifications.html` | Later | Topbar dropdown in Phase 1 is enough. |
| Settings | Settings | `/html/settings.html` | Yes | Appearance, profile, privacy. |
| Account/Profile Menu | Profile Menu | Component | Yes | Topbar component, not necessarily a full page yet. |

## Creator / Channel Pages

| YouTube Page Type | Project Purple Page | Route Idea | Phase 1 Needed? | Notes |
| --- | --- | --- | --- | --- |
| Channel Home | Creator Page | `/html/creator.html` | Yes | Public creator identity page. |
| Channel Videos | Creator Works | Part of creator page | Yes | Use tabs or sections. |
| Channel Shorts | Creator Clips | Later | Not needed early. |
| Channel Live | Creator Live | Later | Livestreaming is not early scope. |
| Channel Playlists | Creator Collections | Part of creator page | Yes | Important. |
| Channel Community | Creator Posts | Later | Could become updates/posts later. |
| Channel About | About Creator | Part of creator page | Yes | Bio, links, stats. |
| Memberships | Support Creator | Later | Monetization phase. |

## Creator Studio Pages

| YouTube Studio Page Type | Project Purple Page | Route Idea | Phase 1 Needed? | Notes |
| --- | --- | --- | --- | --- |
| Dashboard | Studio Overview | `/html/studio.html` | Yes | Creator snapshot. |
| Content | Studio Works | `/html/studio-videos.html` | Later | Can be section in Studio first. |
| Analytics | Studio Analytics | `/html/studio-analytics.html` | Later | Mock cards only in Phase 1. |
| Comments | Studio Comments | `/html/studio-comments.html` | Later | Can be section in Studio first. |
| Subtitles | Captions | Later | Not early scope. |
| Copyright | Rights / Claims | Later | Trust and scale phase. |
| Earn | Monetization | Later | Stripe/payment phase. |
| Customization | Creator Settings | Later | Can be section in Settings first. |
| Audio Library | Creator Resources | Later | Not needed early. |

## Admin / Trust Pages

YouTube has major internal systems for policy, safety, reports, restrictions, copyright, and monetization eligibility. Project Purple should expose a simplified admin shell early, even if actions are placeholders.

| Platform Need | Project Purple Page | Route Idea | Phase 1 Needed? | Notes |
| --- | --- | --- | --- | --- |
| Reports | Admin Reports | `/html/admin.html` | Yes | Included as shell. |
| Flagged Videos | Admin Video Review | Later | Can be part of admin shell first. |
| Flagged Comments | Admin Comment Review | Later | Can be part of admin shell first. |
| User Restrictions | Admin Users | Later | Future trust phase. |
| Policy Pages | Guidelines | `/html/guidelines.html` | Later | Public trust page. |
| Copyright / Rights | Rights Center | Later | Future trust phase. |

## Phase 1 Page Set

Phase 1 should include enough pages to feel like a complete product shell without overbuilding.

Build these:

```txt
home.html
watch.html
discover.html
search.html
following.html
creator.html
collections.html
studio.html
upload.html
vault.html
settings.html
admin.html
```

Optional if time allows:

```txt
notifications.html
guidelines.html
```

Do not build these yet as full pages:

```txt
clips.html
history.html
saved.html
liked.html
studio-videos.html
studio-analytics.html
studio-comments.html
monetization.html
rights-center.html
```

These can be sections or placeholders until later phases.

## Navigation Recommendation

### Public / Logged-Out Top Nav

```txt
Project Purple
Discover
Rising
Collections
Creators
Search
Sign in
Start creating
```

### Logged-In Viewer Top Nav

```txt
Project Purple
Home
Discover
Following
Collections
Vault
Search
Upload
Profile
```

### Creator Studio Nav

```txt
Studio
Upload
Works
Collections
Comments
Analytics
Creator Settings
```

During Phase 1, Studio can be one page with these sections instead of separate pages.

## Product Language Rules

Use Project Purple language:

- Home Feed instead of generic Landing Page
- Discover instead of Explore
- Following instead of Subscriptions
- Vault instead of Library
- Collections instead of Playlists
- Watch Path instead of Up Next
- Creator Page instead of Channel
- Works instead of Videos when inside Studio
- Rising instead of Trending

## Layout Rules

Even if Project Purple needs the same page types as YouTube, it should not use the same visual structure.

Avoid:

- Full permanent left sidebar as the main identity
- Right rail of endless recommendations on watch pages
- YouTube red accent language
- Endless uniform thumbnail rows on every page
- Hiding creator identity below the fold

Use:

- Top navigation
- Slim rail only where helpful
- Creator spotlight modules
- Collection-led browsing
- Watch Path modules
- Creator dock under or beside the player
- Vault as a premium saved-content space

## Final Page Strategy

Project Purple should eventually have most of the same functional page types as YouTube, because users expect a video platform to support them.

But the naming, hierarchy, and layouts should feel original.

The product goal is:

> YouTube-level coverage, Project Purple identity.
