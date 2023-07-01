import { useQuery } from "@tanstack/react-query"
import { getBookings } from "../../services/apiBookings"

function useBookings() {
  const { isLoading, data: bookingsData, error } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings
  })
  return { isLoading, bookingsData, error };
}

export default useBookings
