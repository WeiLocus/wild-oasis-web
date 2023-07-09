import styled from "styled-components"
import { useRecentBookings } from "./useRecentBookings"
import Spinner from "../../ui/Spinner"

const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`

function DashboardLayout() {
  const { isLoadingDate, bookings } = useRecentBookings()
  if (isLoadingDate) return <Spinner />
  console.log(bookings);

  return (
    <StyledDashboard>
      <div>Statistics</div>
      <div>Today's activity</div>
      <div>Chart stay durations</div>
      <div>Chart sales</div>
    </StyledDashboard>
  )
}

export default DashboardLayout
