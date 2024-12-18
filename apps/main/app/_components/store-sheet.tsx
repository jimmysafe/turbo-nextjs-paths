"use client";
import { useExecuteQuery } from "@repo/gql/execute/client";
import { graphql } from "@repo/gql/generated/index";
import { Button } from "@repo/ui/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@repo/ui/components/ui/sheet";
import { useState } from "react";

const GetStore = graphql(`
  query GetStore($id: Int!) {
    Store(id: $id) {
      id
      name
    }
  }
  `);

export function StoreSheet(props: { id?: number }) {
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useExecuteQuery(
    ["store", props.id],
    GetStore,
    { id: props.id! },
    { enabled: !!props.id && !!open },
  );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Store</SheetTitle>
          <SheetDescription>
            Store Data
          </SheetDescription>
        </SheetHeader>
        <div>
          {isLoading
            ? <p>Loading..</p>
            : (
                <h1>{ data?.Store?.name}</h1>
              )}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
