# Healdoor LZ

This is a monorepo setup managed with [Turborepo](https://turbo.build/) and `pnpm`.

## Project Structure

This repository is organized into apps and packages:

- `apps/cms`: [Payload CMS](https://payloadcms.com/) application backed by PostgreSQL.
- `apps/web`: Next.js frontend web application.
- `packages/*`: Shared internal packages (ESLint configs, TypeScript configs, UI components, types, utils).

## Prerequisites

Ensure you have the following installed on your local machine:

- **Node.js**: >= 20.9.0 (or ^18.20.2)
- **pnpm**: v9 or v10 (`npm install -g pnpm`)
- **Docker**: For running the local PostgreSQL database via Docker Compose.

## Local Setup

Follow these steps to get the project up and running locally:

### 1. Clone the repository

```bash
git clone <repository-url>
cd healdoor-lz
```

### 2. Install dependencies

Install all workspace dependencies using pnpm:

```bash
pnpm install
```

### 3. Start the PostgreSQL Database

We use Docker Compose to spin up a local PostgreSQL instance required by the CMS.

```bash
docker-compose up -d
```

*Note: The database runs on port `5432` with user `healdoor_admin`, password `password`, and database `healdoor`.*

### 4. Setup Environment Variables

You need to set up the environment variables for the apps to run properly.

**For the CMS (`apps/cms`):**

Copy the example environment file:
```bash
cp apps/cms/.env.example apps/cms/.env
```

Ensure the `DATABASE_URL` in `apps/cms/.env` points to your local database (which it should by default if using the provided `docker-compose.yml`).

**For the Web App (`apps/web`):**

If there are any required environment variables, ensure you create an `apps/web/.env.local` file with the necessary configuration.

### 5. Start the Development Server

To start all applications and packages in development mode simultaneously, run:

```bash
pnpm run dev
```

This will leverage Turborepo to start the servers concurrently.

- **Web App**: Typically accessible at [http://localhost:3000](http://localhost:3000)
- **CMS Admin Panel**: Depends on Payload config, typically under the Next.js app or a dedicated port.

## Available Scripts

From the root directory, you can run the following commands:

- `pnpm run dev`: Starts the development servers for all apps.
- `pnpm run build`: Builds all apps and packages for production.
- `pnpm run lint`: Runs ESLint across the monorepo.
- `pnpm run clean`: Clears the Turborepo cache and build artifacts.