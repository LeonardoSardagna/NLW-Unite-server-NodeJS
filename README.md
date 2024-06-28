# Pass.in Back-end

Pass.in is an application for managing participants in in-person events, allowing organizers to register events and manage participant registrations and check-ins efficiently.

This back-end application handles all data operations, from event registration to participant management and check-in processing.

## Features

The Pass.in back-end supports the following features:

- The organizer can register a new event;
- The organizer can view event details;
- The organizer can view the participant list;
- The organizer can check in a participant;
- The participant can register for an event;
- The participant can view their registration badge;
- The participant can check in at the event;

## Technologies Used

- **Node.js** and **Fastify** for server construction
- **Prisma** as ORM for database management
- **SQLite** for development and PostgreSQL for production
- **Swagger** for API documentation

## Running Locally

To run the back-end locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/LeonardoSardagna/NLW-Unite-server-NodeJS.git
cd nlw-unite-nodejs
```

2. Install the dependencies:

```bash
npm install
```

3. Create a .env file in the project root with the following line, configuring the database to use SQLite in the development environment:

```env
DATABASE_URL="file:./dev.db"
```

4. Update `schema.prisma` to use SQLite:

From:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

To:

```prisma
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
```

5. Run the migrations to create the database:

```bash
npx prisma migrate dev
```

6. Start the server:

```bash
npm run dev
```

The API will now be running locally and accessible via `http://localhost:3333`.

---
