import styled from "styled-components";
import Heading from "../../ui/Heading";

const ChartBox = styled.div`
  grid-column: 3 / span 2;
  padding: 2.4rem 3.2rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  & > *:first-child {
    margin-bottom: 1.6rem;
  }
`


function DurationChart({ confirmedStays }) {

  return <ChartBox>
    <Heading as="h2">Stay duration summary</Heading>
  </ChartBox>;
}

export default DurationChart
