# Neon Auth Next.js Starter

This project demonstrates how to build an application using Neon Auth for authentication with Next.js.

**Neon Auth**

- Complete authentication solution for your applications
- Easy integration with Next.js

This demo is built with:

- [Neon](https://neon.tech)
- [Neon Auth](https://neon.tech/docs/guides/neon-auth)
- [Next.js](https://nextjs.org)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or newer)
- A [Neon](https://neon.tech) account and project, with [Auth enabled](https://neon.tech/docs/guides/neon-auth)

## Getting Started

Follow these steps to run the demo:

1. Create a Neon project and enable Auth in the Neon Console.
2. Copy the Neon Auth URL.
3. Install the dependencies:

   ```bash
   npm install
   ```

4. **Configure Environment Variables:**
   Create a `.env` file in the project root with the following variable. Get it from the Neon console.

   ```env
   # Neon Auth
   NEON_AUTH_BASE_URL=your_neon_auth_url
   ```

5. **Start the Development Server:**

   ```bash
   npm run dev
   ```

6. **Build for Production:**
   ```bash
   npm run build
   ```

The application will be available at `http://localhost:3000`. You can now sign up, log in, and manage your session using Neon Auth.

The `app/page.tsx` file will display the user's session information when logged in.

The `app/layout.tsx` file configures the `NeonAuthUIProvider` to manage authentication state across the app.

The `app/api/auth/[...path]/route.ts` file sets up the API route handlers required for Neon Auth.

The `lib/auth/client.ts` file initializes the Neon Auth client.