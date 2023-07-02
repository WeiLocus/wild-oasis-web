import TableOperations from "../../ui/TableOperations"
import Filter from "../../ui/Filter"

function BookingTableOperator() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-in", label: "Checked In" },
          { value: "checked-out", label: "Checked Out" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperator