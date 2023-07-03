import { HiOutlineHomeModern } from "react-icons/hi2";
import styled from "styled-components";

const StyledBox = styled.section`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
`;

const Header = styled.header``;

function BookingDataBox({ bookingData }) {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    status,
    hasBreakfast,
    isPaid,
    cabins: { name: cabinName },
    guests: { fillName: guestName, email, country, nationalID, countryFlag },
  } = bookingData;
  return (
    <StyledBox>
      <Header>
        <div>
          <HiOutlineHomeModern />
          <p>{numNights} night in Cabin <span>{cabinName}</span></p>
        </div>
      </Header>
    </StyledBox>
  );
}

export default BookingDataBox;
