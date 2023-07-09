import { formatCurrency } from "../../utils/helper";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";

function Statistics({ bookings, confirmedStays, numDays, cabinsCount }) {
  // stat1
  const numBookings = bookings.length;

  // stat2
  const sales = bookings.reduce((acc, current) => acc + current.totalPrice, 0);

  // stat3
  const checkins = confirmedStays.length;

  // stat4
  // num checked in nights / all available nights(night days * num cabins)
  // guests stayed for a total num night
  const totalStayNum = confirmedStays.reduce(
    (acc, current) => acc + current.numNights,
    0
  );

  const availableNight = numDays * cabinsCount
  const occupation = Math.round((totalStayNum / availableNight) * 100) + " %"

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

      <Stat
        icon={<HiOutlineCalendarDays />}
        title="Check ins"
        color="indigo"
        value={checkins}
      />

      <Stat
        icon={<HiOutlineChartBar />}
        title="Occupancy rate"
        color="yellow"
        value={occupation}
      />
    </>
  );
}

export default Statistics;
