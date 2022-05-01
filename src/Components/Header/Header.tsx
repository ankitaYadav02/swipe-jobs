import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { routesName, workerID } from "Constant/constant";
import SwipejobsLogo from "./SwipejobsLogo";
import { Typography } from "@mui/material";
import { useQueryClient } from "react-query";
import { queryKey } from "Services/serviceEndpoints";
import { UserData } from "dto/workerProfile";

const Header = () => {
  const queryClient = useQueryClient();
  const a = queryClient.getQueryState<UserData>([queryKey.profile, workerID]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ mr: 2, display: { md: "flex", flexGrow: 1 } }}>
            <Link
              to={routesName.home}
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
                <SwipejobsLogo />
            </Link>
          </Box>
          <Link to={routesName.profile} style={{ textDecoration: "none" }}>
            <Box sx={{ flexGrow: 0, textDecoration: "none" }}>
              <Typography mr={1} sx={{ color: "#fff", fontWeight: 400 }}>
                {a?.data?.firstName
                  ? a?.data?.firstName + " " + a?.data?.lastName
                  : "not found"}
              </Typography>
            </Box>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
