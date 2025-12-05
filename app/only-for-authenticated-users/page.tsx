"use client";

import { authClient } from "@/lib/auth/client";
import Link from "next/link";

export default function ProtectedPage() {
  const { data: session } = authClient.useSession();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center justify-center gap-8 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Protected by Middleware
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          This page is protected using Next.js middleware.
        </p>
        <p className="text-zinc-600 dark:text-zinc-400">
          If you&apos;re seeing this, you&apos;re authenticated as{" "}
          <span className="font-medium text-zinc-900 dark:text-zinc-50">
            {session?.user?.email}
          </span>
        </p>
        <Link
          href="/"
          className="rounded-lg bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Back to Home
        </Link>
      </main>
    </div>
  );
}
