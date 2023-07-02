import BookingTable from "../features/bookings/BookingTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTableOperator from "../features/bookings/BookingTableOperations";

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Bookings</Heading>
        <BookingTableOperator />
      </Row>
      <BookingTable />
    </>
  );
}

export default Bookings;
