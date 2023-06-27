import { useQuery } from "@tanstack/react-query";
import { getSetting} from "../../services/apiSettings"

export function useSettings() {
  const { isLoading, data: settingsData, error } = useQuery({
    queryKey: ["settings"],
    queryFn: getSetting,
  });

  return { isLoading, settingsData, error };
}