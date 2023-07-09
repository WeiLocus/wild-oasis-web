import { getToday } from "../utils/helper"
import supabase from "./supabase";
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

// Returns all BOOKINGS that are were created after the given date.
// date: ISO data string
// 比較date和 created_at (>= 參數date 和 <=的當天的最後一秒)
export async function getBookingsAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("created_at, totalPrice, extrasPrice")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }
  return data;
}

// Returns all STAYS that are were created after the given date
// 比較date和startDate
export async function getStaysAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName)")
    .gte("startDate", date )
    .lte("startDate", getToday())

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }
  return data;
}