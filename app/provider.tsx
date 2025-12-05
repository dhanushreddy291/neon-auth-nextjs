'use client';

import { NeonAuthUIProvider } from '@neondatabase/neon-auth-ui';
import { authClient } from '@/lib/auth/client';
import { useRouter } from "next/navigation"

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    return (
        <NeonAuthUIProvider
            authClient={authClient}
            navigate={router.push}
            replace={router.replace}
            onSessionChange={() => {
                router.refresh()
            }}
            emailOTP
            redirectTo="/"
            social={{
                providers: ['google'],
            }}
        >
            {children}
        </NeonAuthUIProvider>
    );
}