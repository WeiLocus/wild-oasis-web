import { formatCurrency } from "../../utils/helper";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";

function Statistics({ bookings, confirmedStays }) {
  // stat1
  const numBookings = bookings.length;

  // stat2
  const sales = bookings.reduce((acc, current) => acc + current.totalPrice, 0);

  // stat3
  const checkins = confirmedStays.length

  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        title="Bookings"
        color="blue"
        value={numBookings}
      />

      <Stat
        icon={<HiOutlineBanknotes />}
        title="Sales"
        color="green"
        value={formatCurrency(sales)}
      />

      <Stat icon={<HiOutlineCalendarDays />} title="Check ins" color="indigo"
      value={checkins} />

      <Stat
        icon={<HiOutlineChartBar />}
        title="Occupancy rate"
        color="yellow"
      />
    </>
  );
}

export default Statistics;
