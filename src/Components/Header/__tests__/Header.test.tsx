import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { render, renderHook, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { workerID } from "Constant/constant";
import { server } from "setUpTest";
import theme from "theme";
import { createWrapper } from "Utils/MockApis";
import useWorkerProfile from "Hooks/UserProfile";
import Header from "../Header";

const queryClient = new QueryClient();

describe("Header", () => {
  test("Should have the header with SwipeJobs title and user profile icon", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    );

    server.use();

    const { result } = renderHook(() => useWorkerProfile(workerID), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    const heading = screen.getByTestId("SwipeJobs");
    const userProfileEl = screen.getByTestId("userProfileName");

    expect(heading).toBeInTheDocument();
    expect(userProfileEl).toBeInTheDocument();
  });
});
