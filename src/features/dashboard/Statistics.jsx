import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar } from "react-icons/hi2"
import Stat from "./Stat"

function Statistics() {
  return (
    <>
      <Stat icon={<HiOutlineBriefcase />} title="Bookings" />

      <Stat icon={<HiOutlineBanknotes />} title="Sales" />

      <Stat icon={<HiOutlineCalendarDays />} title="Check ins" />

      <Stat icon={<HiOutlineChartBar />} title="Occupancy rate" />
    </>
  );
}

export default Statistics
