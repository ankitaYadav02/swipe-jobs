import { Box, Typography } from "@mui/material";

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

export default JobDetailRow;
