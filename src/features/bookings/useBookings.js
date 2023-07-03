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

  // pagination
  const page = !searchParams.get("page") || Number(searchParams.get("page"))

  const {
    isLoading,
    data: {data: bookingsData, count} = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });
  return { isLoading, bookingsData, error, count, page };
}

export default useBookings;
