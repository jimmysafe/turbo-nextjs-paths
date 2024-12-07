"use client";

import { useAuth } from "@clerk/nextjs";
import { LogOutIcon } from "lucide-react";
import { Button } from "../ui/button";

export function SignoutButton(props: { redirectUrl: string }) {
  const { signOut } = useAuth();
  return (
    <Button
      variant="ghost"
      onClick={() => {
        signOut({ redirectUrl: "" });
        window.location.href = props.redirectUrl;
      }}
    >
      <LogOutIcon className="size-4 mr-2" />
      Esci
    </Button>
  );
}
