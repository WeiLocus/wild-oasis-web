import styled from "styled-components"
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts"
import Heading from "../../ui/Heading"

const DashboardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 3.2rem;
  background-color: var(--color-grey-0);
`;

const StyledSalesChart = styled(DashboardBox)`
  grid-column:  1/-1;
`

function SalesChart() {
  return (
    <StyledSalesChart>
      <Heading as="h2">Sales</Heading>
      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={OLDdata}>
          <XAxis dataKey="label" />
          <YAxis unit="$" />
          <CartesianGrid  strokeDasharray="4"/>
          <Tooltip />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke="red"
            fill="orange"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
}

export default SalesChart



const OLDdata = [
  { label: "Jun 09", totalSales: 480, extrasSales: 320 - 300 },
  { label: "Jun 10", totalSales: 580, extrasSales: 400 - 300 },
  { label: "Jun 11", totalSales: 550, extrasSales: 450 - 300 },
  { label: "Jun 12", totalSales: 600, extrasSales: 350 - 300 },
  { label: "Jun 13", totalSales: 700, extrasSales: 550 - 300 },
  { label: "Jun 14", totalSales: 800, extrasSales: 650 - 500 },
  { label: "Jun 15", totalSales: 700, extrasSales: 700 - 500 },
  { label: "Jun 16", totalSales: 650, extrasSales: 500 - 300 },
  { label: "Jun 17", totalSales: 600, extrasSales: 600 - 300 },
  { label: "Jun 18", totalSales: 550, extrasSales: 400 - 300 },
  { label: "Jun 19", totalSales: 700, extrasSales: 600 - 500 },
  { label: "Jun 20", totalSales: 800, extrasSales: 700 - 500 },
  { label: "Jun 21", totalSales: 700, extrasSales: 600 - 500 },
  { label: "Jun 22", totalSales: 810, extrasSales: 550 - 500 },
  { label: "Jun 23", totalSales: 950, extrasSales: 750 - 500 },
  { label: "Jun 24", totalSales: 970, extrasSales: 600 - 500 },
  { label: "Jun 25", totalSales: 900, extrasSales: 700 - 500 },
  { label: "Jun 26", totalSales: 950, extrasSales: 800 - 500 },
  { label: "Jun 27", totalSales: 850, extrasSales: 700 - 500 },
  { label: "Jun 28", totalSales: 900, extrasSales: 600 - 500 },
  { label: "Jun 29", totalSales: 800, extrasSales: 800 - 500 },
  { label: "Jun 30", totalSales: 950, extrasSales: 700 - 500 },
  { label: "Jul 01", totalSales: 1200, extrasSales: 900 - 500 },
  { label: "Jul 02", totalSales: 1250, extrasSales: 800 - 500 },
  { label: "Jul 03", totalSales: 1400, extrasSales: 950 - 500 },
  { label: "Jul 04", totalSales: 1500, extrasSales: 1000 - 500 },
  { label: "Jul 05", totalSales: 1400, extrasSales: 1100 - 500 },
  { label: "Jul 06", totalSales: 1450, extrasSales: 900 - 500 },
];