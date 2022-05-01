import axios from "axios";
import { jobActionProps } from "dto/jobAction";
export const getUserProfile = async (userId: string) => {
  try {
    const user = await axios.get(`${userId}/profile`);
    if (user) {
      return user.data;
    } else {
      return "No user found";
    }
  } catch (err) {
    throw err;
  }
};

export const matchedJobOffer = async (workerId: string) => {
  try {
    const matchedJob = await axios.get(`${workerId}/matches`);
    if (matchedJob) {
      return matchedJob.data;
    } else {
      return "Error";
    }
  } catch (err) {
    throw err;
  }
};

export const acceptJobOffer = async (props: jobActionProps) => {
  const { workerId, jobId } = props;
  try {
    const jobOfferAccept = await axios.get(`${workerId}/job/${jobId}/accept`);
    if (jobOfferAccept) {
      return jobOfferAccept;
    } else {
      return "Error";
    }
  } catch (err) {
    throw err;
  }
};

export const rejectJobOffer = async (props: jobActionProps) => {
  const { workerId, jobId } = props;
  try {
    const jobOfferReject = await axios.get(`${workerId}/job/${jobId}/reject`);
    if (jobOfferReject) {
      return jobOfferReject;
    } else {
      return "Error";
    }
  } catch (err) {
    throw err;
  }
};
