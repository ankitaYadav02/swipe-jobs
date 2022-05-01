import { Card, CardMedia, Typography, CardContent } from "@mui/material";
import { FmdGood, Apartment, MonetizationOn } from "@mui/icons-material";
import { convertCentsToDollars } from "Utils/utils";
import { JobMatchesDto } from "dto/jobMatches";
import JobDetailRow from "./JobDetailRow";

interface JobCardInterface {
  job: JobMatchesDto;
}

const JobCard = (props: JobCardInterface) => {
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
        <JobDetailRow icon={<Apartment />} label={job?.company?.name} />
        <JobDetailRow icon={<FmdGood />} label={job?.branch} />
        <JobDetailRow
          icon={<MonetizationOn />}
          label={"$" + convertCentsToDollars(job?.wagePerHourInCents) + "/hr"}
        />
      </CardContent>
    </Card>
  );
};

export default JobCard;
