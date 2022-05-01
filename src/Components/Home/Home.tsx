import { Box } from "@mui/material";
import Header from "Components/Header";
import { Outlet } from "react-router-dom";
import useWorkerProfile from "Hooks/UserProfile/useWorkerProfile";
import { workerID } from "Constant/constant";

const Home = () => {
  const { isLoading, isError, data } = useWorkerProfile(workerID);
  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundColor: "#eceff1",
          minHeight: "calc(100vh - 128px)",
          padding: "32px",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Home;
