import { Card, Grid, Box, Typography, Skeleton } from "@mui/material";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
  FmdGood,
  CalendarMonth,
  Construction,
  AccountCircle,
  ArrowForwardIos,
} from "@mui/icons-material";
import { workerID } from "Constant/constant";
import { JobMatchesDto } from "dto/jobMatches";
import useWorkerJobMatches from "Hooks/UserJobMatches";
import getFormattedTime, { FormatTimeProps } from "Utils/formatTime";
import { convertCentsToDollars } from "Utils/utils";
import JobActions from "./JobActions";
import { JobInfoLabel, JobInfoRow, JobInfoText } from "./JobsUiComponent";
import JobsDistanceAndRateRow from "./JobDistanceAndRateRow";

const JobCardSkeleton = () => {
  return (
    <Box
      sx={{
        padding: "2rem",
      }}
    >
      <Skeleton variant="text" width={250} height={40}></Skeleton>
      <Skeleton variant="text" width={250} height={40}></Skeleton>

      {[1, 2, 3].map((val) => (
        <>
          <Skeleton key={val} variant="text" width={100} height={40}></Skeleton>
          <Skeleton key={val} variant="text" height={30}></Skeleton>
        </>
      ))}
    </Box>
  );
};

const Jobs = () => {
  const { isLoading, data } = useWorkerJobMatches(workerID);
  const { id } = useParams();
  const selectedJob = data?.find((job: JobMatchesDto) => job?.jobId === id);

  return (
    <Card
      sx={{
        maxWidth: "900px",
        margin: "auto",
        minWidth: "350px",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ flexDirection: { xs: "column-reverse", sm: "row" } }}
      >
        <Grid item xs={12} sm={8}>
          {isLoading ? (
            <JobCardSkeleton />
          ) : (
            <Box sx={{marginTop: {xs:'0px', sm: '2rem'} }}>
              <Box
                sx={{
                  padding: " 0.1rem 1.5rem",
                }}
              >
                <Typography sx={{ fontSize: "1.3rem", fontWeight: 800, marginTop: {xs:'0px'} }}>
                  {selectedJob?.jobTitle?.name}
                </Typography>
                <Typography sx={{ fontSize: "1.1rem", fontWeight: 600 }}>
                  {selectedJob?.company?.name}
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#64ffda",
                  display: "flex",
                  flexWrap: "row wrap",
                  justifyContent: "space-between",
                  padding: "0.5rem 1.5rem",
                }}
              >
                <JobsDistanceAndRateRow
                  label="Distance"
                  labelTextValue={selectedJob?.milesToTravel?.toFixed(1) + " miles"}
                />
                <JobsDistanceAndRateRow
                  label="Hourly Rate"
                  labelTextValue={
                    `${convertCentsToDollars(selectedJob?.wagePerHourInCents)?.toFixed(2)}`
                  }
                />
              </Box>
              <JobInfoRow>
                <CalendarMonth />
                <Box>
                  <JobInfoLabel>Shift Dates</JobInfoLabel>
                  {selectedJob?.shifts?.map((shift: FormatTimeProps) => (
                    <JobInfoText key={uuidv4()}>
                      {getFormattedTime(shift)}
                    </JobInfoText>
                  ))}
                </Box>
              </JobInfoRow>
              <JobInfoRow>
                <FmdGood />
                <Box sx={{ flexGrow: 1 }}>
                  <JobInfoLabel>Location</JobInfoLabel>
                  <JobInfoText>
                    {selectedJob?.company?.address?.formattedAddress}
                  </JobInfoText>
                  <Typography sx={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>
                    {selectedJob?.milesToTravel?.toFixed(2)} miles from your job search
                    location
                  </Typography>
                </Box>
                <ArrowForwardIos sx={{ alignSelf: "center" }} />
              </JobInfoRow>
              <JobInfoRow>
                <Construction />
                <Box>
                  <JobInfoLabel>Requirements</JobInfoLabel>
                  {selectedJob?.requirements?.length
                    ? selectedJob?.requirements?.map((r: string) => (
                        <JobInfoText key={uuidv4()}>-{r}</JobInfoText>
                      ))
                    : "Nil"}
                </Box>
              </JobInfoRow>
              <JobInfoRow disableBorder>
                <AccountCircle />
                <Box>
                  <JobInfoLabel>Report To</JobInfoLabel>
                  <JobInfoText>
                    {selectedJob?.company?.reportTo?.name}
                  </JobInfoText>
                </Box>
              </JobInfoRow>
              <JobActions id={id} />
            </Box>
          )}
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ margin: {xs:'none', sm:"4rem 0.8rem"} }}>
            {isLoading ? (
              <Skeleton variant="rectangular" width={250} height={100} />
            ) : (
              <img
                src={selectedJob?.jobTitle?.imageUrl}
                alt=""
                style={{
                  width: "100%",
                }}
              />
            )}
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Jobs;
