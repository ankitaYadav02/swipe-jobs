import { BoxProps, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

interface JobInfoRowProps extends BoxProps {
  disableBorder?: boolean;
}

export const JobInfoRow = styled(Box)<JobInfoRowProps>(({ disableBorder }) => ({
  display: "flex",
  margin: "0 1.5rem",
  padding: "0.5rem 0",
  borderBottom: disableBorder ? "none" : "1px solid #757575",
  alignItems: "center",
  gap: "1rem",
}));

export const JobInfoLabel = styled(Typography)(() => ({
  fontSize: "1rem",
  fontWeight: 800,
}));

export const JobInfoText = styled(Typography)(() => ({
  fontSize: "1.2rem",
}));
