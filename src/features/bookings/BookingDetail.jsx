import styled from "styled-components";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import { useBooking } from "./useBooking";
import Spinner from "../../ui/Spinner";
import ButtonText from "../../ui/ButtonText";

const HeadingGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`

function BookingDetail() {
  const { isLoading, booking: bookingData } = useBooking();
  if(isLoading) return <Spinner />

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
          <Tag type={statusToTagName[status]}>{status.replace("-"," ")}</Tag>
        </HeadingGroup>
        <ButtonText>&larr; Back</ButtonText>
      </Row>
      Booking Detail
    </>
  );
}

export default BookingDetail;
