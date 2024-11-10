// app/protected/page.js

'use client';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Wait until session is loaded
    if (!session) {
      // Redirect if not authenticated
      router.push("/auth/signin");
    }
  }, [status, session, router]);

  if (status === "loading") {
    return <div>Loading...</div>; // Loading state while checking session
  }

  if (!session) {
    return null; // Do nothing while redirecting
  }

  return (
    <div>
      <h1>Protected Content</h1>
      <p>This page is protected. You can only see it if you're logged in.</p>
    </div>
  );
};

export default ProtectedPage;
