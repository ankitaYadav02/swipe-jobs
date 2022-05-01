import { useQuery } from "react-query";
import { matchedJobOffer } from "Services/Api";
import { queryKey } from "Services/serviceEndpoints";

function useWorkerJobMatches(workerId: string) {
  const { isLoading, isError, data } = useQuery([queryKey.matches, workerId], () =>
  matchedJobOffer(workerId)
  );
  return { isLoading, isError, data };
}

export default useWorkerJobMatches;
