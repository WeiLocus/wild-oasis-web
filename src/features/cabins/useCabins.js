import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {
    const {
      isLoading,
      data: cabinsData,
      error,
    } = useQuery({
      queryKey: ["cabins"],
      queryFn: getCabins,
    });

    return {isLoading, cabinsData, error}
}