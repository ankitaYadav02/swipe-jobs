import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import AssistantDirectionIcon from "@mui/icons-material/AssistantDirection";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { queryKey } from "Services/serviceEndpoints";
import { useQueryClient } from "react-query";
import { workerID } from "Constant/constant";
import { UserData } from "dto/workerProfile";
import useWorkerProfile from 'Hooks/UserProfile/useWorkerProfile'

interface UserInfoRowProps {
  icon?: React.ReactNode;
  label: string;
  textValue: string | undefined;
}

const UserInfoRow = (props: UserInfoRowProps) => {
  const { icon, label, textValue } = props;

  return (
    <Box>
      <Box
        display={"flex"}
        sx={{ padding: "16px 0px 0px 0px", color: "#bdbdbd" }}
      >
        {/* {icon} */}
        <Typography ml={1} component={"label"} sx={{ alignSelf: "flex-start" }}>
          {" "}
          {label}{" "}
        </Typography>
      </Box>
      <Typography sx={{ fontSize: "1.2rem", marginLeft: "0.5rem" }}>
        {textValue}
      </Typography>
    </Box>
  );
};

const Profile = () => {
  const { isLoading, isError, data } = useWorkerProfile(workerID);

  return (
    isLoading ? <h1>Loading</h1> : <Card
      sx={{
        maxWidth: "700px",
        margin: "auto",
        minWidth: "380px",
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontSize: "1.2rem", padding: "1rem 0 0 1rem" }}
      >
        My Profile
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ flexDirection: { xs: "column-reverse", sm: "row" } }}
      >
        <Grid item xs={12} sm={8}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h3">
              {data?.firstName + " " + data?.lastName}
            </Typography>
            <UserInfoRow
              icon={<EmailIcon />}
              label="Email"
              textValue={data?.email}
            />
            <UserInfoRow
              icon={<PhoneIphoneIcon />}
              label="Phone"
              textValue={data?.phoneNumber}
            />
            <UserInfoRow
              icon={<AssistantDirectionIcon />}
              label="Maximum Job Distance"
              textValue={data?.maxJobDistance + 'mile(s)'}
            />
            <UserInfoRow
              icon={<LocationCityIcon />}
              label="Address"
              textValue={data?.address?.formattedAddress}
            />
            <UserInfoRow
              icon={<FmdGoodIcon />}
              label="Zone"
              textValue={data?.address?.zoneId}
            />
          </CardContent>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box mt={2}>
            <AccountCircleIcon sx={{ fontSize: "10rem", color: "#bdbdbd" }} />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Profile;
