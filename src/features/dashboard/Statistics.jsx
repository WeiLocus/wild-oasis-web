import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar } from "react-icons/hi2"
import Stat from "./Stat"

function Statistics({ bookings, confirmedStays }) {
  // stat1
  const numBookings = bookings.length

  // stat2

  return (
    <>
      <Stat icon={<HiOutlineBriefcase />} title="Bookings" color="blue" value={numBookings} />

      <Stat icon={<HiOutlineBanknotes />} title="Sales" color="green" />

      <Stat icon={<HiOutlineCalendarDays />} title="Check ins" color="indigo" />

      <Stat
        icon={<HiOutlineChartBar />}
        title="Occupancy rate"
        color="yellow"
      />
    </>
  );
}

export default Statistics
