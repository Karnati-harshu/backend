# Todo List App - Backend

This is the **backend** of the Todo List application, built with **Express.js**, **Prisma**, **MySQL**, and **TypeScript**.

## Features

- REST API to manage tasks (`GET`, `POST`, `PUT`, `DELETE`).
- Task schema includes fields for `id`, `title`, `color`, `completed` status, and timestamps.

---

## Installation and Setup

### Prerequisites

- Node.js >= 16.x
- npm or yarn package manager
- MySQL database instance

---

### Getting Started

1. Clone the repository:
   git clone https://github.com/Karnati-harshu/backend.git
   cd backend
2. Install dependencies:
   npm install 
   # or 
   yarn install
3. Start the development server:
   npm run dev
   # or
   yarn dev
4. Configure environment variables: Create a .env file in the root directory:
   PORT=5000
   DATABASE_URL=mysql://username:password@localhost:3306/table
   Replace username and password with your MySQL credentials and table with database table name.
5. Initialize the database:
   . Generate the Prisma client:
    npx prisma generate
   . Migrate the database schema:
    npx prisma migrate dev --name init
6. Start the server:
   npm run dev
   # or
   yarn dev
7. Your backend API will be available at http://localhost:3001.




   


