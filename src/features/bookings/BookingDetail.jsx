import styled from "styled-components";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";

const HeadingGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`

function BookingDetail() {
  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #bookingId</Heading>
          <Tag>status</Tag>
        </HeadingGroup>
        <button>&larr; Back</button>
      </Row>
      Booking Detail
    </>
  );
}

export default BookingDetail;
