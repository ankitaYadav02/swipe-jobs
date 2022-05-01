import { v4 as uuidv4 } from "uuid";
import { workerID } from "Constant/constant";
import useWorkerJobMatches from "Hooks/UserJobMatches";
import { JobMatchesDto } from "dto/jobMatches";
import { Link } from "react-router-dom";
import { Box, Skeleton } from "@mui/material";
import JobCard from "./JobCard";

const JobMatches = () => {
  const { isLoading, data } = useWorkerJobMatches(workerID);

  const JobCardSkeleton = () => {
    return (
      <Box >
        <Skeleton variant="rectangular" width={250} height="100%"></Skeleton>
        <Skeleton variant="text" height={40}></Skeleton>
        <Skeleton variant="text" height={30}></Skeleton>
        <Skeleton variant="text" height={30}></Skeleton>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "row wrap",
        gap: 4,
      }}
    >
      {isLoading
        ? [1, 2].map(() => <JobCardSkeleton key={uuidv4()}/>)
        : data?.map((matchedJob: JobMatchesDto) => (
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
