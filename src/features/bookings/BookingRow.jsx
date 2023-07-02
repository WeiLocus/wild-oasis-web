import styled from "styled-components";
import { format, isToday } from "date-fns";
import Table from "../../ui/Table";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helper";
import Modal from "../../ui/Modal";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

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
    guests: { fullName: guestName, email },
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
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </Stack>
      <div>{status}</div>
      <div>{formatCurrency(totalPrice)}</div>
      <Modal></Modal>
    </Table.Row>
  );
}

export default BookingRow;
