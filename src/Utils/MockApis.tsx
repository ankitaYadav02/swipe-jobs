import { rest } from "msw";
import { dummyMatches } from "../Hooks/UserJobMatches/__test__/useWorkerJobMatches.test";
import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { dumyUserData } from "Hooks/UserProfile/__tests__/useWorkerProfile.test";

export const handlers = [
  rest.get("*/profile", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dumyUserData));
  }),
  rest.get("*/matches", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dummyMatches));
  }),
  rest.get("*/accept", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dumyUserData));
  }),
  rest.get("*/reject", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dumyUserData));
  }),
];

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

type a = {
  children: ReactNode;
};

export function createWrapper() {
  const testQueryClient = createTestQueryClient();
  return ({ children }: a) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );
}
