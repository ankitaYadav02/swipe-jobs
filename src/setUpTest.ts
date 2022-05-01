import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import { handlers } from "Utils/MockApis";
import { setLogger } from "react-query";

export const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});
