import { formatDistance, parseISO } from "date-fns";
import { differenceInDays } from "date-fns/esm";

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );
