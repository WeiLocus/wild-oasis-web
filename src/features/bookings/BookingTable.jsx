import Menus from "../../ui/Menus"
import Table from "../../ui/Table"
import Empty from "../../ui/Empty"

function BookingTable() {
  const bookingList = []

  if (!bookingList.length) return <Empty resourceName="bookings"/>
  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>
        <Table.Body data={bookingList}>
        </Table.Body>
      </Table>
    </Menus>
  );
}

export default BookingTable
