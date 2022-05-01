import { renderHook, waitFor } from "@testing-library/react";
import { workerID } from "Constant/constant";
import useWorkerProfile from "Hooks/UserProfile";
import { server } from "setUpTest";
import { createWrapper } from "Utils/MockApis";

export const dummyUserData = {
  address: {
    formattedAddress: "1 Downing St, Chicago, IL 60654, USA",
    zoneId: "America/Chicago",
  },
  email: "jim.rose@gmail.com",
  firstName: "Jim",
  lastName: "Rose",
  maxJobDistance: 20,
  phoneNumber: "5096290220",
  workerId: "7f90df6e-b832-44e2-b624-3143d428001f",
};

test("Fetch Worker profile Successfully", async () => {
  server.use();

  const { result } = renderHook(() => useWorkerProfile(workerID), {
    wrapper: createWrapper(),
  });

  await waitFor(() => expect(result.current.isSuccess).toBe(true));
  expect(result.current.data).toEqual(dummyUserData);
});
