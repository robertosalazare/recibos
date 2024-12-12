"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  UserButton,
} from "@clerk/nextjs";
import { usePathname, redirect } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  const { isLoaded, isSignedIn } = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    if (isLoaded && !isSignedIn && !pathname.includes("/login")) {
      redirect("/login");
    }
  }, [isLoaded, isSignedIn, pathname]);

  if (!isLoaded) return null;
  if (!isSignedIn) return <>{children}</>;

  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      {children}
    </>
  );
};
