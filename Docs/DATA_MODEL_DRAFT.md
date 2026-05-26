# Project Purple Data Model Draft

This is a future-facing draft for the backend data model.

It should not be implemented during Phase 1.

Phase 1 is static app shell only. This document exists so the shell is designed around realistic future data.

## Core Concepts

Project Purple is built around:

- Users
- Creators
- Videos
- Collections
- Watch Paths
- Comments
- Follows
- Saves
- Reports
- Studio tools

## Users

Represents anyone with an account.

Possible fields:

```txt
id
email
password_hash
name
handle
avatar_url
role
created_at
updated_at
```

Roles may include:

```txt
viewer
creator
admin
```

## Creator Profiles

Represents the public creator identity.

A user may eventually have one or more creator profiles, but one profile per user is enough for the early build.

Possible fields:

```txt
id
user_id
display_name
handle
bio
avatar_url
banner_url
website_url
location
is_verified
created_at
updated_at
```

## Videos

Represents video metadata.

The actual video asset should be handled by a video provider or storage system later.

Possible fields:

```txt
id
creator_id
title
slug
description
category
visibility
status
thumbnail_url
duration_seconds
published_at
created_at
updated_at
```

Visibility values:

```txt
public
unlisted
private
```

Status values:

```txt
draft
processing
ready
failed
published
archived
```

## Video Assets

Represents provider-specific upload and playback data.

Possible fields:

```txt
id
video_id
provider
provider_asset_id
upload_url
playback_url
thumbnail_url
processing_status
error_message
created_at
updated_at
```

## Collections

Collections replace generic playlist language.

Possible fields:

```txt
id
creator_id
title
slug
description
cover_url
visibility
created_at
updated_at
```

## Collection Videos

Join table between collections and videos.

Possible fields:

```txt
id
collection_id
video_id
position
created_at
```

## Watch Paths

Watch Paths guide viewers through related videos or a creator-defined sequence.

This may eventually overlap with collections, but should remain a distinct product concept in the UI.

Possible fields:

```txt
id
title
description
creator_id
source_type
created_at
updated_at
```

Source type examples:

```txt
creator_defined
collection_based
system_suggested
```

## Watch Path Items

Possible fields:

```txt
id
watch_path_id
video_id
position
note
created_at
```

## Comments

Possible fields:

```txt
id
video_id
user_id
parent_comment_id
body
status
created_at
updated_at
```

Status values:

```txt
visible
hidden
flagged
deleted
```

## Follows

Represents a user following a creator.

Possible fields:

```txt
id
user_id
creator_id
created_at
```

## Likes

Possible fields:

```txt
id
user_id
video_id
created_at
```

## Saves

Saves power the Vault experience.

Possible fields:

```txt
id
user_id
save_type
target_id
created_at
```

Save type examples:

```txt
video
collection
creator
```

## View Events

Used later for watch history and analytics.

Possible fields:

```txt
id
user_id
video_id
started_at
last_position_seconds
completed
created_at
updated_at
```

## Reports

Used for trust and safety.

Possible fields:

```txt
id
reporter_user_id
target_type
target_id
reason
notes
status
reviewed_by
reviewed_at
created_at
```

Target type examples:

```txt
video
comment
creator
user
```

Status values:

```txt
open
reviewing
dismissed
action_taken
```

## Notifications

Possible fields:

```txt
id
user_id
type
title
body
link_url
is_read
created_at
```

## Monetization Draft

Do not implement early.

Future tables may include:

```txt
creator_subscriptions
premium_videos
premium_collections
tips
payout_accounts
platform_fees
billing_events
```

## MVP Data Model

When backend work starts, the smallest useful model is:

```txt
users
creator_profiles
videos
video_assets
comments
follows
likes
saves
reports
```

Collections and Watch Paths can be added shortly after if needed.

## Design Implications for Phase 1

The static shell should include mock data shaped around these future concepts:

- Creator objects
- Video objects
- Collection objects
- Comment objects
- Watch Path objects

This lets Phase 2 add mock rendering without redesigning the pages.

## Important Rule

This document is a draft.

Do not treat it as final database design until backend planning begins.
