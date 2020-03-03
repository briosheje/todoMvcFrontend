# todoMvcFrontend

Temporary project aimed to test backend and frontend efficiency against development time.

### FRONTEND REPOSITORY

Target Framework: Vue.JS with QUASAR (https://quasar.dev/)

Application layout:
- DRAWER MENU (sidebar)
- TOP NAVBAR
- BOTTOM NAVBAR

Planned pages:
- Splash (`/`)
  - Just a welcome screen
- Todos list (`/todos`).
  - [action] Can set a todo as "done". call to PUT `/todos/{id}`.
- Todos edit (`/todos/{id}/`).
  - [action] Can SAVE an existing todo (alter). call to PUT `/todos/{id}`.
  - [action] Can DELETE an existing todo (delete). call to DELETE `/todos/{id}`.
  - if id is null
    - [action] Can create a new record. Call to GET `/todos/new`. Should return an empty record with the following default values:
      - description: "Placeholder MVC TODO DESCRIPTION".
    - [action] Can SAVE a new record. Call to POST `/todos`.

Expected development time needed, splitted in features / pages:

- Test on mac
- Project setup: ~30m
  - Init quasar project.
  - Run dev.
  - Everything ok? git push.
- git flow init: ~5m
  - Setup `develop` branch
- Setup Layout, router, create blank pages: ~45m
  - Setup layout
  - Setup splash page
  - Setup todos page
  - Setup todos edit page.
- Setup fake MVC services: ~30m
  - Fake GET `todos` endpoint call
  - Fake GET `todos/{id}` endpoint call
  - Fake POST `todos/` endpoint call
  - Fake PUT `todos/{id}` endpoint call
  - Fake DELETE `todos/{id}` endpoint call
- Splash UI and page: ~10m
- Todos UI page: ~15m
  - List items
  - Allow checkbox
    - Checkbox check / uncheck action
- Todos edit UI page: ~30m
  - Toolbar actions (save, edit, delete and so on)
  - FormLike experience (no validation, tho)
