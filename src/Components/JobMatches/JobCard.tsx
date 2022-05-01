import { Card, CardMedia, Typography, CardContent } from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ApartmentIcon from "@mui/icons-material/Apartment";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
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

export default JobCard;
