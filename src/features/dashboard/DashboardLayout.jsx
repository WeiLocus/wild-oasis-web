import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStatys";
import Spinner from "../../ui/Spinner";
import Statistics from "./Statistics";

const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoadingDate, bookings } = useRecentBookings();
  const { isLoadingStays, stays, confirmedStays } = useRecentStays();

  if (isLoadingDate || isLoadingStays) return <Spinner />;
  console.log(bookings);

  return (
    <StyledDashboard>
      <Statistics />
    </StyledDashboard>
  );
}

export default DashboardLayout;
