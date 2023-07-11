import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBookings() {
  const [searchParams] = useSearchParams();

  // 定義searchParams value
  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  // 計算當下日期和要比較的numDays，作為參數傳給getBookingsAfterDate
  // subDays 第一個參數日期(current date) - 指定的日期，回傳新的日期
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading: isLoadingDate, data: bookings } = useQuery({
    queryKey: ["bookings", `last-${numDays}`],
    queryFn: () => getBookingsAfterDate(queryDate),
  });

  return { isLoadingDate, bookings };
}

