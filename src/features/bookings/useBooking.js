import { useQuery } from "@tanstack/react-query";
import { getBookingDetail } from "../../services/apiBookings";
import { useParams } from "react-router-dom";
import supabase from "../../services/supabase";

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

export async function updatedBooking(id, obj) {
  const { data, error } = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", id)
    .select()
    .single()

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }

  return data
}
