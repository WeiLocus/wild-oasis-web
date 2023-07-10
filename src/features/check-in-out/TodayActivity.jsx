import styled from "styled-components"
import Row from "../../ui/Row"
import Heading from "../../ui/Heading"

const StyledToday = styled.div`
  grid-column: 1 / span 2;
  padding: 3.2rem;
  padding-top: 2.4rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
`;

function TodayActivity() {
  return (
    <StyledToday>
      <Row>
        <Heading as="h2">Today</Heading>
      </Row>
    </StyledToday>
  )
}

export default TodayActivity
