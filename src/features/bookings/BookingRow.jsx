import styled from "styled-components";
import Table from "../../ui/Table";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stack = styled.div`
`

function BookingRow({ bookingsData }) {
  console.log(bookingsData);
  const {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guest: { fullName: guestName, email },
    cabins: { name: cabinName },
  } = bookingsData;
  return (
    <Table.Row>
      <Cabin>{cabinName}</Cabin>
      <Stack>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stack>
      <Stack>
        {}
      </Stack>
    </Table.Row>
  );
}

export default BookingRow;

// <Stacked>
//   <span>
//     {isToday(new Date(startDate))
//       ? "Today"
//       : formatDistanceFromNow(startDate)}{" "}
//     &rarr; {numNights} night stay
//   </span>
//   <span>
//     {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
//     {format(new Date(endDate), "MMM dd yyyy")}
//   </span>
// </Stacked>;