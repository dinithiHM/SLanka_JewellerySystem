// client-layout.tsx
'use client'; // Ensure this is a client-side component

import AuthProvider from "@/components/AuthProvider";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}
