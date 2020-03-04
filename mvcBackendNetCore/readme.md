### MVC net core backend

This backend was made in less than 30 minutes from scratch.

Usage:

- Open the visual studio solution.
- (eventually) install the needed packages from NuGet (Entity Framework Core, Entity Framework Sql In Memory, Entity Framework Sql Server).
- run the solution.

Once the solution is running as expected (without any error), take a look at the localhost assigned port and keep track of it.

- Go back to the quasar project.
- Open the envConfig.json file.
- Edit the API key to match what said above (localhost and port).
- Run the quasar frontend application:
  - `npm run dev`
- Play around with the application.

### Testing

No automated testing was implemented. However, every endpoint was tested with Postman.

Import the POSTMAN collection inside the POSTMAN folder to take advantage of the sample requests.