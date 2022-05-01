import { Box, Button } from "@mui/material";
import useWorkerJobActions from "Hooks/UserJobActions";
import { workerID } from "Constant/constant";

interface JobActionsProps {
  id: string | undefined;
}

const JobActions = (props: JobActionsProps) => {

  const { id } = props;
  const { rejectJobMutation, acceptJobMutation } =
    useWorkerJobActions(workerID);

  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "row wrap",
        padding: "0.5rem 2rem 1rem 2rem",
        gap: 2.5,
      }}
    >
      <Button
        variant="outlined"
        sx={{ flexGrow: 1 }}
        onClick={() => id && rejectJobMutation.mutate(id)}
      >
        No Thanks
      </Button>
      <Button
        variant="contained"
        sx={{ flexGrow: 1 }}
        onClick={() => id && acceptJobMutation.mutate(id)}
      >
        I'll Take it
      </Button>
    </Box>
  );
};

export default JobActions;
