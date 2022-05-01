import { Typography } from "@mui/material";
import { Box } from "@mui/system";

interface jobsDistanceAndRateRowProps {
  label: string;
  labelTextValue: string;
}

const JobsDistanceAndRateRow = (props: jobsDistanceAndRateRowProps) => {
  const { label, labelTextValue } = props;
  return (
    <Box>
      <Typography sx={{ fontSize: "0.9rem", fontWeight: 800 }}>
        {label}
      </Typography>
      {label === "Hourly Rate" ? (
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
            {labelTextValue}
          </Typography>
        </Box>
      ) : (
        <Typography sx={{ color: "#fff", fontSize: "1.5rem", fontWeight: 600 }}>
          {labelTextValue}
        </Typography>
      )}
    </Box>
  );
};

export default JobsDistanceAndRateRow;
