import { Typography } from "@mui/material";
import { Box } from "@mui/system";

interface UserInfoRowProps {
  label: string;
  textValue: string | undefined;
}

const UserInfoRow = (props: UserInfoRowProps) => {
  const { label, textValue } = props;

  return (
    <Box>
      <Box sx={{ padding: "16px 0px 0px 0px", color: "#bdbdbd" }}>
        <Typography ml={1} component={"label"}>
          {label}
        </Typography>
      </Box>
      <Typography sx={{ fontSize: "1.2rem", marginLeft: "0.5rem" }}>
        {textValue}
      </Typography>
    </Box>
  );
};

export default UserInfoRow;
