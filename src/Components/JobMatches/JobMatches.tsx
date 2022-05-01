import { Card, CardMedia, Typography, Box, CardContent } from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ApartmentIcon from "@mui/icons-material/Apartment";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { convertCentsToDollars } from "Utils/utils";
import { workerID } from "Constant/constant";
import useWorkerJobMatches from "Hooks/UserJobMatches";
import { JobMatchesDto } from "dto/jobMatches";
import { Link } from "react-router-dom";

interface jobDetailRowProps {
  icon: React.ReactNode;
  label: string;
}

const JobDetailRow = (props: jobDetailRowProps) => {
  const { icon, label } = props;
  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "0.5rem",
        color: "#757575",
      }}
    >
      {icon}
      <Typography ml={0.5} color="#000">
        {label}
      </Typography>
    </Box>
  );
};

interface JobsCardInterface {
  job: JobMatchesDto;
}

const JobsCard = (props: JobsCardInterface) => {
  const { job } = props;
  return (
    <Card
      sx={{
        maxWidth: "400px",
        minWidth: "200px",
      }}
    >
      <CardMedia component="img" image={job?.jobTitle?.imageUrl} alt="" />
      <CardContent
        sx={{
          padding: "1rem",
        }}
      >
        <Typography sx={{ fontSize: "1.2rem", fontWeight: 700 }}>
          {job?.jobTitle?.name}
        </Typography>
        <JobDetailRow icon={<ApartmentIcon />} label={job?.company?.name} />
        <JobDetailRow icon={<FmdGoodIcon />} label={job?.branch} />
        <JobDetailRow
          icon={<MonetizationOnIcon />}
          label={"$" + convertCentsToDollars(job?.wagePerHourInCents) + "/hr"}
        />
      </CardContent>
    </Card>
  );
};

const JobMatches = () => {
  const { isLoading, isError, data } = useWorkerJobMatches(workerID);

  return isError ? (
    <h1>Something Went Wrong</h1>
  ) : isLoading ? (
    <h1>Loading</h1>
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
          <JobsCard job={matchedJob} />
        </Link>
      ))}
    </Box>
  );
};
export default JobMatches;
