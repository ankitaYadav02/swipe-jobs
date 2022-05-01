import { useQuery } from "react-query";
import { getUserProfile } from "Services/Api";
import { queryKey } from "Services/serviceEndpoints";

function useWorkerProfile(workerId: string) {
  const { isLoading, isError, data, ...restProps } = useQuery(
    [queryKey.profile, workerId],
    () => getUserProfile(workerId)
  );
  return { isLoading, isError, data, ...restProps };
}

export default useWorkerProfile;
