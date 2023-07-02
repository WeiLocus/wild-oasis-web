import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

function useBookings() {
  const [searchParams] = useSearchParams();

  // filter
  const filteredValue = searchParams.get("status");
  // console.log(filteredValue);
  const filter =
    !filteredValue || filteredValue === "all"
      ? null
      : { field: "status", value: filteredValue };

  // sort
  const sortByRaw = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortByRaw.split("-")
  const sortBy = { field: field, direction: direction}

  const {
    isLoading,
    data: bookingsData,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });
  return { isLoading, bookingsData, error };
}

export default useBookings;
