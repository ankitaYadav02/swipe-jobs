import { useMutation } from "react-query";
import { acceptJobOffer, rejectJobOffer } from "Services/Api";
import { queryKey } from "Services/serviceEndpoints";

const useWorkerJobActions = (workerId: string) => {
  const rejectJobMutation = useMutation(
    [queryKey.accept, workerId],
    (jobId: string) => rejectJobOffer({ workerId, jobId })
  );

  const acceptJobMutation = useMutation(
    [queryKey.accept, workerId],
    (jobId: string) => acceptJobOffer({ workerId, jobId })
  );

  return {
    rejectJobMutation,
    acceptJobMutation,
  };
};

export default useWorkerJobActions;
