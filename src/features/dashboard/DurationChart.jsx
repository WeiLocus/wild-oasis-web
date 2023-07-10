import styled from "styled-components";
import { PieChart, ResponsiveContainer, Pie } from "recharts";
import Heading from "../../ui/Heading";

const ChartBox = styled.div`
  grid-column: 3 / span 2;
  padding: 2.4rem 3.2rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  & > *:first-child {
    margin-bottom: 1.6rem;
  }
`;

// data
const startDataLight = [
  {
    duration: "1 night",
    value: 5,
    color: "#ef4444",
  },
  {
    duration: "2 nights",
    value: 3,
    color: "#f97316",
  },
  {
    duration: "3 nights",
    value: 8,
    color: "#eab308",
  },
  {
    duration: "4-5 nights",
    value: 1,
    color: "#84cc16",
  },
  {
    duration: "6-7 nights",
    value: 2,
    color: "#22c55e",
  },
  {
    duration: "8-14 nights",
    value: 0,
    color: "#14b8a6",
  },
  {
    duration: "15-21 nights",
    value: 1,
    color: "#3b82f6",
  },
  {
    duration: "21+ nights",
    value: 1,
    color: "#a855f7",
  },
];

const startDataDark = [
  {
    duration: "1 night",
    value: 0,
    color: "#b91c1c",
  },
  {
    duration: "2 nights",
    value: 0,
    color: "#c2410c",
  },
  {
    duration: "3 nights",
    value: 0,
    color: "#a16207",
  },
  {
    duration: "4-5 nights",
    value: 0,
    color: "#4d7c0f",
  },
  {
    duration: "6-7 nights",
    value: 0,
    color: "#15803d",
  },
  {
    duration: "8-14 nights",
    value: 0,
    color: "#0f766e",
  },
  {
    duration: "15-21 nights",
    value: 0,
    color: "#1d4ed8",
  },
  {
    duration: "21+ nights",
    value: 0,
    color: "#7e22ce",
  },
];

function DurationChart({ confirmedStays }) {
  return (
    <ChartBox>
      <Heading as="h2">Stay duration summary</Heading>
      <ResponsiveContainer height={250} width="100%">
        <PieChart>
          <Pie
            data={startDataLight}
            nameKey="duration"
            dataKey="value"
            innerRadius={70}
            outerRadius={110}
            cx="40%"
            cy="50%"
            paddingAngle={1}
          >
            
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </ChartBox>
  );
}

export default DurationChart;
