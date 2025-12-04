"use client";

import { SignedIn, RedirectToSignIn, UserButton } from "@neondatabase/neon-auth-ui";
import { authClient } from "@/lib/auth/client";

export default function Home() {
  const { data: session } = authClient.useSession();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <SignedIn>
        <main className="flex flex-col items-center justify-center gap-8 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Welcome{session?.user?.name ? `, ${session.user.name}` : ""}!
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            You&apos;re successfully authenticated.
          </p>

          {session?.user && (
            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="space-y-3 text-left">
                <div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Email</p>
                  <p className="mt-1 font-medium text-zinc-900 dark:text-zinc-50">
                    {session.user.email}
                  </p>
                </div>
                {session.user.name && (
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Name</p>
                    <p className="mt-1 font-medium text-zinc-900 dark:text-zinc-50">
                      {session.user.name}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          <UserButton />
        </main>
      </SignedIn>
      <RedirectToSignIn />
    </div>
  );
}
