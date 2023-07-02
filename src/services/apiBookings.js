import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

export async function getBookings({ filter }) {
  // READ ALL ROWS
  const query = supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)"
    );

  let { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Bookings could not be loaded");
  }

  return data;
}
