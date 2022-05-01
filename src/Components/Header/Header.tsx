import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Skeleton,
  Typography,
} from "@mui/material";
import { useQueryClient } from "react-query";
import { routesName, workerID } from "Constant/constant";
import { queryKey } from "Services/serviceEndpoints";
import { UserDataDto } from "dto/workerProfile";
import SwipejobsLogo from "./SwipejobsLogo";

const Header = () => {
  const queryClient = useQueryClient();
  const userData = queryClient.getQueryState<UserDataDto>([
    queryKey.profile,
    workerID,
  ]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ mr: 2, display: { md: "flex", flexGrow: 1 } }}>
            <Link
              to={routesName.home}
              style={{ textDecoration: "none", color: "#ffffff" }}
              data-testid="SwipeJobs"
            >
              <SwipejobsLogo />
            </Link>
          </Box>
          {userData?.status === "idle" && !userData?.data ? (
            <Skeleton
              variant="text"
              width={70}
              height={30}
              sx={{ bgcolor: "#757575" }}
            />
          ) : (
            <Link data-testid="userProfileName" to={routesName.profile} style={{ textDecoration: "none" }}>
              <Box sx={{ flexGrow: 0, textDecoration: "none" }}>
                <Typography mr={1} sx={{ color: "#fff", fontWeight: 400 }}>
                  {`${userData?.data?.firstName ?? ""} ${
                    userData?.data?.lastName ?? ""
                  }`}
                </Typography>
              </Box>
            </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
