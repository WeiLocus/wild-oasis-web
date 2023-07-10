import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayActivity() {
  const  { isLoading, data: activityData} = useQuery({
    queryKey: ["today-activity"],
    queryFn: getStaysTodayActivity
  })

  return { isLoading, activityData };
}