# todoMvcFrontend

Temporary project aimed to test backend and frontend efficiency against development time.

### How to install

- Clone repository
- `npm install -g @quasar/cli`
- `npm install` (run un the mvc project)

### Test / dev
- `npm run dev`

### Build / deploy SPA
- `npm run build`

### FRONTEND REPOSITORY

Target Framework: Vue.JS with QUASAR (https://quasar.dev/)

Application layout:
- DRAWER MENU (sidebar)
- TOP NAVBAR
- <strike>BOTTOM NAVBAR</strike>

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

- [x] Test on mac
- [x] git flow init: ~5m
  - [x] Setup `develop` branch
- [x] Project setup: ~30m
  - [x] Init quasar project.
  - [x] Run dev.
  - [x] Everything ok? git push.
- [x] Setup Layout, router, create blank pages: ~45m
  - [x] Setup layout
  - [x] Setup splash page (AKA index). Definitive path: ''.
  - [x] Setup todos page. Definitive path: '/todos'.
  - [x] Setup todos edit page. Definitive path: '/todos/:id' and '/todos/new'
- Setup fake MVC services: ~30m
  - [x] Fake GET `todos` endpoint call
  - [x] Fake GET `todos/{id}` endpoint call
  - [x] Fake POST `todos/` endpoint call
  - [x] Fake PUT `todos/{id}` endpoint call
  - [x] Fake DELETE `todos/{id}` endpoint call
- [ ] Splash UI and page: ~10m
- Todos UI page: ~15m
  - [x] List items
  - [x] Allow checkbox
    - [x] Checkbox check / uncheck action
- Todos edit UI page: ~30m
  - [x] Toolbar actions (save, edit, delete and so on)
  - [x] FormLike experience

Total time currently spent: ~1h 30m