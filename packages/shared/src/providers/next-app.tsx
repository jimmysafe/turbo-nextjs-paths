"use client";
import { itIT } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const queryClient = new QueryClient();

export function AppProviders(props: { children: React.ReactNode }) {
  return (
    <ClerkProvider localization={itIT}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </ClerkProvider>
  );
}
