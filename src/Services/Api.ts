import axios from "axios";
import { jobActionProps, JobActionsResponse } from "dto/jobAction";

export const getUserProfile = async (userId: string) => {
  try {
    const user = await axios.get(`${userId}/profile`);
    return user.data;
  } catch (err) {
    throw err;
  }
};

export const matchedJobOffer = async (workerId: string) => {
  try {
    const matchedJob = await axios.get(`${workerId}/matches`);
    return matchedJob.data;
  } catch (err) {
    throw err;
  }
};

export const acceptJobOffer = async (props: jobActionProps) => {
  const { workerId, jobId } = props;
  try {
    const jobOfferAccept = await axios.get<JobActionsResponse>(
      `${workerId}/job/${jobId}/accept`
    );

    return jobOfferAccept.data;
  } catch (err) {
    throw err;
  }
};

export const rejectJobOffer = async (props: jobActionProps) => {
  const { workerId, jobId } = props;
  try {
    const jobOfferReject = await axios.get<JobActionsResponse>(
      `${workerId}/job/${jobId}/reject`
    );
    return jobOfferReject.data;
  } catch (err) {
    throw err;
  }
};
