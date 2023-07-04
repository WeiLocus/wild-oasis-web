import styled from "styled-components";
import { useState } from "react";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonText from "../../ui/ButtonText";
import BookingDataBox from "../bookings/BookingDataBox";
import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import Spinner from "../../ui/Spinner";
import CheckBox from "../../ui/CheckBox";

const Box = styled.div`
  padding: 2.4rem 4rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
`;

function CheckInBooking() {
  const [conformPaid, setConfirmPaid] = useState();

  const moveBack = useMoveBack();
  const { isLoading, booking: bookingData } = useBooking();

  if (isLoading) return <Spinner />;
  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = bookingData;
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox bookingData={bookingData} />

      <Box>
        <CheckBox>
          I confirm that {guests.fullName} has paid the total amount
        </CheckBox>
      </Box>

      <ButtonGroup>
        <Button>Check in booking #{bookingId}</Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckInBooking;
