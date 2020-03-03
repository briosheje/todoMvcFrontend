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
