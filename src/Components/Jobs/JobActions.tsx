import { Alert, Box, Snackbar } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import useWorkerJobActions from "Hooks/UserJobActions";
import { workerID } from "Constant/constant";
import { SyntheticEvent, useState } from "react";

interface JobActionsProps {
  id: string | undefined;
}

const JobActions = (props: JobActionsProps) => {
  const { id } = props;
  const {
    rejectJobMutation,
    acceptJobMutation,
    snackbarOpen,
    handleCloseSnackbar,
  } = useWorkerJobActions(workerID);

  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "row wrap",
        padding: "0.5rem 2rem 1rem 2rem",
        gap: 2.5,
      }}
    >
      <LoadingButton
        loading={rejectJobMutation.isLoading}
        disabled={acceptJobMutation.isLoading}
        variant="outlined"
        sx={{ flexGrow: 1 }}
        onClick={() => id && rejectJobMutation.mutate(id)}
      >
        No Thanks
      </LoadingButton>
      <LoadingButton
        loading={acceptJobMutation.isLoading}
        disabled={rejectJobMutation.isLoading}
        variant="contained"
        sx={{ flexGrow: 1 }}
        onClick={() => id && acceptJobMutation.mutate(id)}
      >
        I'll Take it
      </LoadingButton>
      <Snackbar
        open={snackbarOpen.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarOpen.type}
          sx={{ width: "100%" }}
        >
          {snackbarOpen.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default JobActions;
