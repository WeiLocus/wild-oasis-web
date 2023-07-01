import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

export async function getBookings() {
  // READ ALL ROWS
  let { data, error } = await supabase
    .from("bookings")
    .select("*, cabins(name), guests(fullName, email)");

  if (error) {
    console.error(error);
    throw new Error("Bookings could not be loaded");
  }

  return data;
}
