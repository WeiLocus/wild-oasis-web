import styled from "styled-components";
import { useState, useEffect } from "react";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import { formatCurrency } from "../../utils/helper";
import { useCheckin } from "./useCheckin";
import { useSettings } from "../settings/useSettings";
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
  const [conformPaid, setConfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);

  const moveBack = useMoveBack();
  const { isLoading, booking: bookingData } = useBooking();
  const { isCheckin, checkinConfirm } = useCheckin();
  const { isLoading: isLoadingSettings, settingsData } = useSettings();

  useEffect(() => {
    setConfirmPaid(bookingData?.isPaid ?? false);
  }, [bookingData]);

  if (isLoading || isLoadingSettings) return <Spinner />;
  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = bookingData;

  const breakfastPrice = settingsData.breakfastPrice * numGuests * numNights;

  function handleCheckin() {
    if (!conformPaid) return;
    if (addBreakfast) {
      checkinConfirm({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: breakfastPrice,
          totalPrice: totalPrice + breakfastPrice,
        },
      });
    } else {
      checkinConfirm({bookingId, breakfast: {}});
    }
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox bookingData={bookingData} />

      {!hasBreakfast && (
        <Box>
          <CheckBox
            id="breakfast"
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((add) => !add);
              setConfirmPaid(false);
            }}
          >
            Want to add breakfast for {formatCurrency(breakfastPrice)}?
          </CheckBox>
        </Box>
      )}

      <Box>
        <CheckBox
          id="confirm"
          checked={conformPaid}
          disabled={conformPaid || isCheckin}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
        >
          I confirm that {guests.fullName} has paid the total amount of{" "}
          {!addBreakfast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(totalPrice + breakfastPrice)} (${formatCurrency(
                totalPrice
              )} + ${formatCurrency(breakfastPrice)})`}
        </CheckBox>
      </Box>

      <ButtonGroup>
        <Button disabled={!conformPaid || isCheckin} onClick={handleCheckin}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckInBooking;
