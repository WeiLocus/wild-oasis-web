import BookingTable from "../features/bookings/BookingTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Bookings</Heading>
        <p>filter/ sort</p>
      </Row>
      <BookingTable />
    </>
  );
}

export default Bookings;
