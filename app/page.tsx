"use client";

import { SignedIn, RedirectToSignIn, UserButton } from "@neondatabase/neon-auth-ui";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <SignedIn>
        <main className="flex flex-col items-center justify-center gap-8 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Welcome!
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            You&apos;re successfully authenticated.
          </p>
          <UserButton />
        </main>
      </SignedIn>
      <RedirectToSignIn />
    </div>
  );
}
