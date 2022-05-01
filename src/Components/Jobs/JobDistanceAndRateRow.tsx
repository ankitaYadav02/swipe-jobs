import { Typography } from "@mui/material";
import { Box } from "@mui/system";

interface jobsDistanceAndRateRowProps {
  milesToTravel: number;
  wagePerHourInCents: string;
}

const JobsDistanceAndRateRow = (props: jobsDistanceAndRateRowProps) => {
  const { milesToTravel, wagePerHourInCents } = props;
  return (
    <>
      <Box>
        <Typography sx={{ fontSize: "0.9rem", fontWeight: 800 }}>
          Distance
        </Typography>
        <Typography sx={{ color: "#fff", fontSize: "1.5rem", fontWeight: 600 }}>
          {`${milesToTravel} miles`}
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ fontSize: "0.9rem", fontWeight: 800 }}>
          Hourly Rate
        </Typography>
        <Box sx={{ display: "flex", flexFlow: "row", gap: "3px" }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "0.8rem",
              fontWeight: 600,
              alignSelf: "baseline",
              lineHeight: "2.2",
            }}
          >
            $
          </Typography>
          <Typography
            sx={{ color: "#fff", fontSize: "1.5rem", fontWeight: 600 }}
          >
            {wagePerHourInCents}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default JobsDistanceAndRateRow;
