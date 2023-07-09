import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStatys";
import Spinner from "../../ui/Spinner";
import Statistics from "./Statistics";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";

const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoadingDate, bookings } = useRecentBookings();
  const { isLoadingStays, stays, confirmedStays, numDays } = useRecentStays();

  // get cabinData to calculate the number of cabins
  const {isLoading: isLoadingCabin, cabinsData} = useCabins()

  if (isLoadingDate || isLoadingStays || isLoadingCabin) return <Spinner />;

  return (
    <StyledDashboard>
      <Statistics
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinsCount={cabinsData.length}
      />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboard>
  );
}

export default DashboardLayout;
