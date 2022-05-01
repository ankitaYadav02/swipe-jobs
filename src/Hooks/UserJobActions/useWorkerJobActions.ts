import { SyntheticEvent, useState } from "react";
import { useMutation } from "react-query";
import { acceptJobOffer, rejectJobOffer } from "Services/Api";
import { queryKey } from "Services/serviceEndpoints";

type snackbarState = {
  open: boolean;
  message: string;
  type: "success" | "error" | undefined;
};

const useWorkerJobActions = (workerId: string) => {
  const [snackbarOpen, setSnackbarOpen] = useState<snackbarState>({
    open: false,
    message: "",
    type: undefined,
  });

  const handleCloseSnackbar = (
    _event?: SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen({ open: false, message: "", type: undefined });
  };

  const rejectJobMutation = useMutation(
    [queryKey.accept, workerId],
    (jobId: string) => rejectJobOffer({ workerId, jobId }),
    {
      onSuccess: (data) => {
        setSnackbarOpen({
          open: true,
          message: data.success
            ? "Job Rejected"
            : data?.message ?? "Some Error Occured",
          type: data.success ? "success" : "error",
        });
      },
    }
  );

  const acceptJobMutation = useMutation(
    [queryKey.accept, workerId],
    (jobId: string) => acceptJobOffer({ workerId, jobId }),
    {
      onSuccess: (data) => {
        setSnackbarOpen({
          open: true,
          message: data.success
            ? "Job Accepted"
            : data?.message ?? "Some Error Occured",
          type: data.success ? "success" : "error",
        });
      },
    }
  );

  return {
    rejectJobMutation,
    acceptJobMutation,
    snackbarOpen,
    handleCloseSnackbar,
  };
};

export default useWorkerJobActions;
