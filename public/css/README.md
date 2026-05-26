# public/css

CSS for the Project Purple static app shell.

Planned organization:

```txt
public/css/
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
```

Rules:

- Put design tokens in `core/tokens.css`.
- Put resets and global element styles in `core/base.css`.
- Put reusable layout systems in `core/layout.css`.
- Put reusable components in `core/components.css`.
- Put page-specific overrides in `pages/`.
- Do not duplicate the same component CSS across page files.
