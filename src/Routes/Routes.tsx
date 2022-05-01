import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "Components/Profile";
import Home from "Components/Home";
import Jobs from "Components/Jobs";
import JobMatches from "Components/JobMatches";
import { routesName } from "Constant/constant";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path={routesName.home} element={<Home />}>
        <Route index element={<JobMatches />} />
        <Route path={routesName.selectedJob} element={<Jobs />} />
        <Route path={routesName.profile} element={<Profile />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
