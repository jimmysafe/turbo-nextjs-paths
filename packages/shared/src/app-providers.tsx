import { itIT } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

export function AppProviders(props: { children: React.ReactNode }) {
  return (
    <ClerkProvider localization={itIT}>
      {props.children}
    </ClerkProvider>
  );
}
