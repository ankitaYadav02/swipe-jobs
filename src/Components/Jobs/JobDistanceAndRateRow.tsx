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
      <Typography sx={{ fontSize: "0.8rem", fontWeight: 800 }}>
        {label}
      </Typography>
      <Typography sx={{ color: "#fff", fontSize: "1.5rem", fontWeight: 600 }}>
        {labelTextValue}
      </Typography>
    </Box>
  );
};

export default JobsDistanceAndRateRow;
