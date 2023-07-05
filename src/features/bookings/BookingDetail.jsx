import { useBooking } from "./useBooking";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../check-in-out/useCheckout";
import styled from "styled-components";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import Spinner from "../../ui/Spinner";
import ButtonText from "../../ui/ButtonText";
import BookingDataBox from "./BookingDataBox";
import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";

const HeadingGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

function BookingDetail() {
  const navigate = useNavigate();
  const { isLoading, booking: bookingData } = useBooking();
  const { isCheckout, checkoutConfirm } = useCheckout();
  const moveBack = useMoveBack();
  if (isLoading) return <Spinner />;

  const { id: bookingId, status } = bookingData;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>
      <BookingDataBox bookingData={bookingData} />

      {/* Render buttons based on state conditions  */}
      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check in
          </Button>
        )}
        {status === "checked-in" && <Button onClick={() => checkoutConfirm(bookingId)}>Check out</Button>}
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
