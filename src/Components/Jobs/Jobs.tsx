import { Card, Grid, Box, Typography, Button } from "@mui/material";
import { convertCentsToDollars } from "Utils/utils";
import { v4 as uuidv4 } from "uuid";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ConstructionIcon from "@mui/icons-material/Construction";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { workerID } from "Constant/constant";
import { JobMatchesDto } from "dto/jobMatches";
import { useParams } from "react-router-dom";
import useWorkerJobMatches from "Hooks/UserJobMatches";
import useWorkerJobActions from "Hooks/UserJobActions";
import getFormattedTime, { FormatTimeProps } from "Utils/formatTime";


interface jobsDistanceAndRateRowProps {
  label: string;
  labelTextValue: string;
}

const JobsDistanceAndRateRow = (props: jobsDistanceAndRateRowProps) => {
  const { label, labelTextValue } = props;
  return (
    <Box>
      <Typography sx={{ fontSize: "0.8rem", fontWeight: 800 }}>
        {label}
      </Typography>
      <Typography sx={{ color: "#fff", fontSize: "1.5rem", fontWeight: 600 }}>
        {labelTextValue}
      </Typography>
    </Box>
  );
};

const Jobs = () => {
  const { isLoading, isError, data } = useWorkerJobMatches(workerID);
  const { id } = useParams();
  const selectedJob = data?.find((job: JobMatchesDto) => job?.jobId === id);
  const { rejectJobMutation, acceptJobMutation } =
    useWorkerJobActions(workerID);
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
            <Box
              sx={{
                display: "flex",
                margin: "0 2rem",
                padding: "0.5rem 0",
                borderBottom: "1px solid #757575",
              }}
            >
              <CalendarMonthIcon
                sx={{ alignSelf: "center", marginRight: "2rem" }}
              />
              <Box>
                <Typography sx={{ fontSize: "1.2rem", fontWeight: 600 }}>
                  Shift Dates
                </Typography>
                {selectedJob?.shifts?.map((shift: FormatTimeProps) => (
                  <Typography key={uuidv4()}>
                    {getFormattedTime(shift)}
                  </Typography>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                margin: "0 2rem",
                padding: "0.5rem 0",
                borderBottom: "1px solid #757575",
              }}
            >
              <FmdGoodIcon sx={{ alignSelf: "center", marginRight: "2rem" }} />
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: "1.2rem", fontWeight: 600 }}>
                  Location
                </Typography>
                <Typography>
                  {selectedJob?.company?.address?.formattedAddress}
                </Typography>
                <Typography sx={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>
                  {selectedJob?.milesToTravel} miles from your job search
                  location{" "}
                </Typography>
              </Box>
              <ArrowForwardIosIcon sx={{ alignSelf: "center" }} />
            </Box>
            <Box
              sx={{
                display: "flex",
                margin: "0 2rem",
                padding: "0.5rem 0",
                borderBottom: "1px solid #757575",
              }}
            >
              <ConstructionIcon
                sx={{ alignSelf: "center", marginRight: "2rem" }}
              />
              <Box>
                <Typography sx={{ fontSize: "1.2rem", fontWeight: 600 }}>
                  Requirements
                </Typography>
                {selectedJob?.requirements?.length
                  ? selectedJob?.requirements?.map((r: string) => (
                      <Typography key={uuidv4()}>-{r}</Typography>
                    ))
                  : "nil"}
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                margin: "0 2rem",
                padding: "0.5rem 0",
              }}
            >
              <AccountCircleIcon
                sx={{ alignSelf: "center", marginRight: "2rem" }}
              />
              <Box>
                <Typography sx={{ fontSize: "1.2rem", fontWeight: 600 }}>
                  Report To
                </Typography>
                <Typography>{selectedJob?.company?.reportTo?.name}</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexFlow: "row wrap",
                padding: "0.5rem 2rem 1rem 2rem",
                gap: 2.5,
              }}
            >
              <Button
                variant="outlined"
                sx={{ width: "45%" }}
                onClick={() => id && rejectJobMutation.mutate(id)}
              >
                No Thanks
              </Button>
              <Button
                variant="contained"
                sx={{ width: "45%" }}
                onClick={() => id && acceptJobMutation.mutate(id)}
              >
                I'll Take it
              </Button>
            </Box>
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
