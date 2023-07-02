import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

export async function getBookings({ filter }) {
  let query = supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)"
    );

  // Filter
  if (filter !== null) {
    query = query.eq(filter.field, filter.value)
  }
  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Bookings could not be loaded");
  }

  return data;
}
