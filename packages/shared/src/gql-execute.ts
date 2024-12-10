import type { TypedDocumentString } from "./generated/graphql";
import { currentUser } from "@clerk/nextjs/server";

export async function execute<TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
  const user = await currentUser();
  const response = await fetch("http://localhost:4000/api/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/graphql-response+json",
      "Authorization": `users API-Key ${user?.privateMetadata.payloadKey}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    throw new Error("Errore di rete");
  }

  const res = await response.json();

  if (res.errors?.length > 0) {
    throw new Error(res.errors.map((e: any) => e.message).join(", "));
  }

  return res.data as TResult;
}
