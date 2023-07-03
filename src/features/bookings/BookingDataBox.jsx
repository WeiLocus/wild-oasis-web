import { HiOutlineHomeModern } from "react-icons/hi2";
import styled from "styled-components";

const StyledBox = styled.section`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  background-color: var(--color-brand-500);
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;

  svg {
    width: 3.2rem;
    height: 3.2rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-size: 1.8rem;
    font-weight: 600;
  }

  & span {
    margin-left: 4px;
    font-size: 2rem;
    font-family: "Sono";
  }
`;

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
