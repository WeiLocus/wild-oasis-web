import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineHomeModern,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
} from "react-icons/hi2";
import { format, isToday } from "date-fns";
import { formatDistanceFromNow, formatCurrency } from "../../utils/helper";
import styled from "styled-components";
import Flag from "../../ui/Flag";
import DataItem from "../../ui/DataItem";

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

const Section = styled.section`
  padding: 3.2rem 4rem 1.2rem;
`;

const Guest = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.4rem;
  padding: 1.6rem 3.2rem;
  border-radius: var(--border-radius-sm);

  background-color: ${(props) =>
    props.isPaid ? "var(--color-green-100)" : "var(--color-yellow-100)"};
  color: ${(props) =>
    props.isPaid ? "var(--color-green-700)" : "var(--color-yellow-700)"};

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor;
  }

  & p {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
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
    observations,
    cabins: { name: cabinName },
    guests: { fullName: guestName, email, country, nationalID, countryFlag },
  } = bookingData;

  return (
    <StyledBox>
      <Header>
        <div>
          <HiOutlineHomeModern />
          <p>
            {numNights} night in Cabin <span>{cabinName}</span>
          </p>
        </div>
        <p>
          {format(new Date(startDate), "EEE, MMM dd yyyy")}(
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>
      </Header>
      <Section>
        <Guest>
          {countryFlag && <Flag src={countryFlag} alt={`Flag of ${country}`} />}
          <p>
            {guestName} {numGuests > 1 ? `+  ${numGuests - 1} guests` : ""}
          </p>
          <span>&bull;</span>
          <p>{email}</p>
          <span>&bull;</span>
          <p>National ID {nationalID}</p>
        </Guest>

        {observations && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText />}
            label="Observations"
          >
            {observations}
          </DataItem>
        )}

        <DataItem icon={<HiOutlineCheckCircle/>} label="Breakfast included?">
          {hasBreakfast ? "Yes" : "No"}
        </DataItem>

        <Price isPaid={isPaid}>
          <DataItem icon={<HiOutlineCurrencyDollar />} label="Total Price">
            {formatCurrency(totalPrice)}
            {hasBreakfast &&
              `
              ${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                extrasPrice
              )} breakfast
            `}
          </DataItem>
          <p>{isPaid ? "Paid" : "Will pay at property"}</p>
        </Price>
      </Section>
    </StyledBox>
  );
}

export default BookingDataBox;
