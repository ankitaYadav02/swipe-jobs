
import { workerID } from "Constant/constant";
import useWorkerJobMatches from "Hooks/UserJobMatches";
import { JobMatchesDto } from "dto/jobMatches";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import JobCard from "./JobCard";

const JobMatches = () => {
  const { isLoading, isError, data } = useWorkerJobMatches(workerID);

  return isError ? (
    <Typography>Something Went Wrong</Typography>
  ) : isLoading ? (
    <Typography>Loading</Typography>
  ) : (
    <Box
      sx={{
        display: "flex",
        flexFlow: "row wrap",
        gap: 4,
      }}
    >
      {data.map((matchedJob: JobMatchesDto) => (
        <Link
          to={"job/" + matchedJob?.jobId}
          style={{ textDecoration: "none" }}
          key={matchedJob?.jobId}
        >
          <JobCard job={matchedJob} />
        </Link>
      ))}
    </Box>
  );
};
export default JobMatches;
