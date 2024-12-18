import type { TypedDocumentString } from "../generated/graphql";

export async function fetcher<TResult, TVariables>(
  payloadToken: string,
  query: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
  // eslint-disable-next-line node/no-process-env
  const response = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/graphql-response+json",
      "Authorization": `users API-Key ${payloadToken}`,
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
