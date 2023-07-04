import { useQuery } from "@tanstack/react-query";
import { getBookingDetail } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBookingDetail(bookingId),
    // react query try to fetch data three times by default
    retry: false,
  });

  return { isLoading, booking, error };
}
