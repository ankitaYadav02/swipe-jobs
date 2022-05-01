import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { render, renderHook, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { workerID } from "Constant/constant";
import { server } from "setUpTest";
import theme from "theme";
import { createWrapper } from "Utils/MockApis";
import useWorkerProfile from "Hooks/UserProfile";
import { dummyUserData } from "Hooks/UserProfile/__tests__/useWorkerProfile.test";
import Profile from "../Profile";
import UserInfoRow from "../UserInfoRow";

const queryClient = new QueryClient();

describe("Profile", () => {
  test("Should have First name of the user", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Profile />
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    );
    server.use();

    const { result } = renderHook(() => useWorkerProfile(workerID), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    const userProfileEl = screen.getByTestId("userName");

    expect(userProfileEl).toHaveTextContent(dummyUserData.firstName);
  });
  test("should have email of the user", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <UserInfoRow label="email" textValue={dummyUserData.email} />
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    );
    server.use();

    const { result } = renderHook(() => useWorkerProfile(workerID), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    const userProfileEl = screen.getByTestId("email");

    expect(userProfileEl).toHaveTextContent(dummyUserData.email);
  });
});
