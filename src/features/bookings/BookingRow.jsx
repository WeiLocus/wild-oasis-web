import styled from "styled-components";
import { format, isToday } from "date-fns";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helper";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Tag from "../../ui/Tag";

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

  const statusToTagName = {
    unconfirmed: "blue",
    "check-in": "green",
    "check-out": "sliver"
  }

  console.log(formatDistanceFromNow(startDate));
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
      <Tag type={statusToTagName[status]}>{status.replace("-", "")}</Tag>
      <Amount>{formatCurrency(totalPrice)}</Amount>
      <Modal></Modal>
    </Table.Row>
  );
}

export default BookingRow;