import { formatDistance, parseISO } from "date-fns";
import { differenceInDays } from "date-fns/esm";

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );

// Return the distance between the given dates in words
export const formatDistanceFromNow = (dateStr) => {
  const date = formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "In");
  return date;
};


 // spuabase needs an ISO date string ,string will be different on every render, we use this trick to remove any time
// 要與supabase 的creates_at 做準確的比較
export const getToday = function(options = {}) {
  const today = new Date();
  // options.end true，將日期設置為當天的最後一秒
  if (options?.end) {
    // fix the date to the current day
    today.setUTCHours(23, 59, 59, 999);
  } else {
    today.setUTCHours(0,0,0,0)
  }
  return today.toISOString()
}