import { ReactNode } from "react";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import { dummyMatches } from "../Hooks/UserJobMatches/__test__/useWorkerJobMatches.test";
import { dummyUserData } from "Hooks/UserProfile/__tests__/useWorkerProfile.test";

export const handlers = [
  rest.get("*/profile", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dummyUserData));
  }),
  rest.get("*/matches", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dummyMatches));
  }),
  rest.get("*/accept", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dummyUserData));
  }),
  rest.get("*/reject", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dummyUserData));
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

type createWrapperProps = {
  children: ReactNode;
};

export const createWrapper = () => {
  const testQueryClient = createTestQueryClient();
  return ({ children }: createWrapperProps) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );
};
