import { Card, Grid, Box, Typography } from "@mui/material";
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
import { JobInfoLabel, JobInfoRow } from "./JobsUiComponent";
import JobsDistanceAndRateRow from "./JobDistanceAndRateRow";

const Jobs = () => {
  const { isLoading, isError, data } = useWorkerJobMatches(workerID);
  const { id } = useParams();
  const selectedJob = data?.find((job: JobMatchesDto) => job?.jobId === id);

  return (
    <Card
      sx={{
        maxWidth: "900px",
        margin: "auto",
        minWidth: "380px",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ flexDirection: { xs: "column-reverse", sm: "row" } }}
      >
        <Grid item xs={12} sm={8}>
          <Box mt={2}>
            <Box
              sx={{
                padding: " 0.1rem 2rem",
              }}
            >
              <Typography sx={{ fontSize: "1.25rem", fontWeight: 700 }}>
                {selectedJob?.jobTitle?.name}
              </Typography>
              <Typography sx={{ fontSize: "1.125rem", fontWeight: 600 }}>
                {selectedJob?.company?.name}
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#64ffda",
                display: "flex",
                flexWrap: "row wrap",
                justifyContent: "space-between",
                padding: "0.5rem 2rem",
              }}
            >
              <JobsDistanceAndRateRow
                label="Distance"
                labelTextValue={selectedJob?.milesToTravel + "miles"}
              />
              <JobsDistanceAndRateRow
                label="Hourly Rate"
                labelTextValue={
                  "$" + convertCentsToDollars(selectedJob?.wagePerHourInCents)
                }
              />
            </Box>
            <JobInfoRow>
              <CalendarMonth />
              <Box>
                <JobInfoLabel>Shift Dates</JobInfoLabel>
                {selectedJob?.shifts?.map((shift: FormatTimeProps) => (
                  <Typography key={uuidv4()}>
                    {getFormattedTime(shift)}
                  </Typography>
                ))}
              </Box>
            </JobInfoRow>
            <JobInfoRow>
              <FmdGood />
              <Box sx={{ flexGrow: 1 }}>
                <JobInfoLabel>Location</JobInfoLabel>
                <Typography>
                  {selectedJob?.company?.address?.formattedAddress}
                </Typography>
                <Typography sx={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>
                  {selectedJob?.milesToTravel} miles from your job search
                  location{" "}
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
                      <Typography key={uuidv4()}>-{r}</Typography>
                    ))
                  : "nil"}
              </Box>
            </JobInfoRow>
            <JobInfoRow disableBorder>
              <AccountCircle />
              <Box>
                <JobInfoLabel>Report To</JobInfoLabel>
                <Typography>{selectedJob?.company?.reportTo?.name}</Typography>
              </Box>
            </JobInfoRow>
            <JobActions id={id} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ margin: "4rem 0.8rem" }}>
            <img
              src={selectedJob?.jobTitle?.imageUrl}
              alt=""
              style={{
                width: "100%",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Jobs;
