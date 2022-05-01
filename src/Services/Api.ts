import axios from "axios";
import { jobActionProps, JobActionsDto } from "dto/jobAction";
import { UserDataDto } from "dto/workerProfile";

export const getUserProfile = async (userId: string) => {
  try {
    const user = await axios.get<UserDataDto>(`${userId}/profile`);
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
    const jobOfferAccept = await axios.get<JobActionsDto>(
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
    const jobOfferReject = await axios.get<JobActionsDto>(
      `${workerId}/job/${jobId}/reject`
    );
    return jobOfferReject.data;
  } catch (err) {
    throw err;
  }
};
