import supabase from "./supabase";
import { supabaseUrl } from "./supabase";
import { PER_PAGE } from "../utils/constants";

// getBookings api
export async function getBookings({ filter, sortBy, page }) {
  let query = supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)",
      { count: "exact" }
    );

  // Filter
  if (filter) {
    query = query.eq(filter.field, filter.value);
  }

  // Sort
  if (sortBy) {
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });
  }

  // pagination
  if (page) {
    const from = (page - 1) * PER_PAGE;
    const to = from + PER_PAGE - 1;
    query = query.range(from, to);
  }
  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Bookings could not be loaded");
  }

  return { data, count };
}

//getBookingDetail api by bookingId
export async function getBookingDetail(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, cabins(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error)
    throw new Error("Booking not found")
  }

  return data
}

// update
export async function updatedBooking(id, obj) {
  const { data, error } = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }

  return data;
}

// delete
export async function deleteBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .delete()
    .eq("id",id);
  
    if (error) {
      console.error(error);
      throw new Error("Booking could not be deleted");
    }
  return data
}