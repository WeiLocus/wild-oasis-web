import { formatDistance, parseISO } from "date-fns";
import { differenceInDays } from "date-fns/esm";

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );

// Return the distance between the given dates in words
export const formatDistanceFromNow = (dateStr) => {
  formatDistance(parseISO(dateStr), new Date(), { addSuffix: true })
    .replace("about", "")
    .replace("in", "In");
};
