"use client";

import {
  useAuth,
} from "@clerk/nextjs";
import { PropsWithChildren } from "react";
import { Header } from "./Header";

export const Layout = ({ children }: PropsWithChildren) => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) return null;
  if (!isSignedIn) return <>{children}</>;

  return (
    <>
      <Header />
      {children}
    </>
  );
};
