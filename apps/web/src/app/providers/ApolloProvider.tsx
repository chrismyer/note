"use client";

import { ReactNode } from "react";

import {
  ApolloProvider as NativeApolloProvider,
  InMemoryCache,
  ApolloClient,
} from "@apollo/client";

type Props = {
  children: ReactNode;
};

export function ApolloProvider({ children }: Props) {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URL,
    cache: new InMemoryCache(),
  });

  return (
    <NativeApolloProvider client={client}>{children}</NativeApolloProvider>
  );
}
