import type { TypedDocumentString } from "../generated/graphql";
import { currentUser } from "@clerk/nextjs/server";
import { fetcher } from "./fetcher";

export async function execute<TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
  const user = await currentUser();
  const payloadToken = user?.publicMetadata.payloadKey as string | undefined;
  if (!payloadToken)
    throw new Error("Unauthenticated");
  // @ts-expect-error cant type this one
  return fetcher(payloadToken, query, variables);
}
