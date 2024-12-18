"use client";
import type { TypedDocumentString } from "../generated/graphql";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "./fetcher";

interface UseExecuteQueryAdditionalArgs {
  enabled?: boolean;
}

/**
 *
 * @param queryKey string[] | number[]
 * @param query Graphql Query Doc
 * @param variables  Graphql Query Variables
 * @param args Tanstack Query Args
 * @returns
 */
export function useExecuteQuery<TResult, TVariables>(
  queryKey: (string | number | undefined)[],
  query: TypedDocumentString<TResult, TVariables>,
  ...[variables, args]: TVariables extends Record<string, never> ? [UseExecuteQueryAdditionalArgs] : [TVariables, UseExecuteQueryAdditionalArgs]
) {
  const { user } = useUser();
  const payloadToken = user?.publicMetadata.payloadKey as string | undefined;

  return useQuery({
    queryKey,
    queryFn: () => fetcher(
      payloadToken!,
      query,
      // @ts-expect-error can't type this properly
      variables,
    ),
    enabled: args?.enabled && !!payloadToken,
  });
}
