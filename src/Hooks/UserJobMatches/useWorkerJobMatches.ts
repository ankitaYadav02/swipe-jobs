import { useQuery } from "react-query";
import { matchedJobOffer } from "Services/Api";
import { queryKey } from "Services/serviceEndpoints";

function useWorkerJobMatches(workerId: string) {
  const { isLoading, isError, data, ...restProps } = useQuery(
    [queryKey.matches, workerId],
    () => matchedJobOffer(workerId)
  );
  return { isLoading, isError, data, ...restProps };
}

export default useWorkerJobMatches;
