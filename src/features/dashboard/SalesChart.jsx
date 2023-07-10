import styled from "styled-components";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { eachDayOfInterval, subDays, format, isSameDay } from "date-fns";
import Heading from "../../ui/Heading";
import { useDarkMode } from "../../context/DarkModeContext";

const DashboardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 3.2rem;
  background-color: var(--color-grey-0);
`;

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1/-1;

  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

function SalesChart({ bookings, numDays }) {
  const { isDarkMode } = useDarkMode();
  const colors = isDarkMode
    ? {
        totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
        extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
        extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
        text: "#374151",
        background: "#fff",
      };

  // 計算要呈現的日期區間
  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  const dataList = allDates.map((data) => {
    // 計算 totalSales: 篩選符合日期區間的資料再做加總
    const totalSales = bookings
      .filter((booking) => isSameDay(data, new Date(booking.created_at)))
      .reduce((acc, current) => acc + current.totalPrice, 0);

    // 計算 extrasSales: 篩選符合日期區間的資料再做加總
    const extrasSales = bookings
      .filter((booking) => isSameDay(data, new Date(booking.created_at)))
      .reduce((acc, current) => acc + current.extrasPrice, 0);

    return {
      label: format(data, "MMM dd"),
      totalSales: totalSales,
      extrasSales: extrasSales
    };
  });

  return (
    <StyledSalesChart>
      <Heading as="h2">
        Sales from {format(allDates.at(0), "MMM dd yyyy")} &mdash;{" "}
        {format(allDates.at(-1), "MMM dd yyyy")}
      </Heading>
      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={dataList}>
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit="$"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth={2}
            name="Total sales"
            unit="$"
          />
          <Area
            dataKey="extrasSales"
            type="monotone"
            stroke={colors.extrasSales.stroke}
            fill={colors.extrasSales.fill}
            strokeWidth={2}
            name="Extras sales"
            unit="$"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
}

export default SalesChart;
