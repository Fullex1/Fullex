# Fullex

## Overview

Fullex is a full-stack application built with a Next.js frontend and a NestJS backend. The project is designed to be efficient, scalable, and feature-rich, leveraging TypeScript across both client and server. It is organized into two main parts:

- **Client**: A Next.js app for the user interface.
- **Server**: A NestJS API server handling business logic and database interactions.

---

## Docker Setup

The project supports Docker for easy deployment and local development. This allows you to run both backend and frontend in isolated containers, ensuring consistency across environments.

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed on your system

### Running the Project with Docker

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Fullex1/Fullex.git
    cd Fullex
    ```

2. **Build and start all services:**
    ```bash
    docker compose up --build
    ```

    By default, this will:
    - Build and start the NestJS backend
    - Build and start the Next.js frontend
    - Start any required dependencies (e.g., MongoDB if defined in `docker-compose.yml`)

3. **Access the services:**
    - Frontend: [http://localhost:3000](http://localhost:3001)
    - Backend: [http://localhost:5000](http://localhost:3000) 

4. **Stopping the services:**
    ```bash
    docker compose down
    ```

### Customizing

- Environment variables for both client and server can be set in `.env` files or passed via Docker Compose.
- You may edit the `docker-compose.yml` to adjust ports, volumes, or add services.

---

## Features

### Backend (NestJS API)

- **Authentication**:  
  - JWT-based authentication for secure API access.
  - User schema and authentication strategies implemented.
- **FAQ Management**:  
  - Endpoints for creating and retrieving Frequently Asked Questions.
  - Secured endpoints using JWT authentication.
- **Portfolio Management**:  
  - CRUD operations for portfolio items.
  - Integration with Cloudinary for media storage.
- **Rates Management**:  
  - Endpoints to get and create rates.
  - Rate data stored in MongoDB, schema enforced.
  - Authentication required for all rate operations.
- **Pricing Management**:  
  - Endpoints and logic for managing pricing information.
- **Cloudinary Integration**:  
  - Media uploads and management via Cloudinary.
- **Configuration and Environment**:  
  - Uses environment variables for configuration (MongoDB URI, JWT secrets, etc.).
  - `ConfigModule` loads environment-specific settings automatically.
- **Testing**:  
  - Unit, end-to-end, and coverage tests available via npm scripts.

#### Technical Details

- **Database**: MongoDB (accessed via Mongoose ODM).
- **API Documentation**: Swagger decorators present for endpoint documentation.
- **Modules**: Auth, FAQ, Portfolio, Rates, Pricing, Cloudinary.
- **Security**:  
  - All sensitive routes are protected by JWT authentication.
  - Uses environment variables to store secrets and database URIs.

---

### Frontend (Next.js)

- **Modern UI**:  
  - Built with Next.js and TypeScript for a fast, interactive experience.
  - Uses `next/font` for optimized font loading (Geist font family).
- **Live Editing**:  
  - Auto-update page content as you edit source code.
- **Developer Experience**:  
  - Fast refresh, easy project bootstrapping, and support for multiple package managers.

---

## Manual Setup Instructions

### Backend

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the project**:
   ```bash
   # Development
   npm run start

   # Watch mode
   npm run start:dev

   # Production
   npm run start:prod
   ```

3. **Testing**:
   ```bash
   npm run test        # Unit tests
   npm run test:e2e    # End-to-end tests
   npm run test:cov    # Coverage report
   ```

4. **Deployment**:
   - See [NestJS deployment guide](https://docs.nestjs.com/deployment).
   - Deploy directly to AWS using [Mau](https://mau.nestjs.com):
     ```bash
     npm install -g @nestjs/mau
     mau deploy
     ```

### Frontend

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

3. **Open your browser** at [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
Fullex/
│
├── client/   # Next.js frontend
│   └── README.md
│
├── server/   # NestJS backend
│   ├── src/
│   │   ├── auth/
│   │   ├── faq/
│   │   ├── portfolio/
│   │   ├── rates/
│   │   ├── pricing/
│   │   └── cloudinary/
│   └── README.md
│
├── docker-compose.yml
├── Dockerfile
└── README.md
```

---

## Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [Docker Documentation](https://docs.docker.com/get-started/)

---

## Authors

- **Designer:** Mohamed Abdelhamed
- **Developer:** Omar Aboelnaga  
- **For:** Fullex Company

---

## License

This project is MIT licensed.
