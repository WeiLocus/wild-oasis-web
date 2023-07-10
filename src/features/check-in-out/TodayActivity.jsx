import { useTodayActivity } from "./useTodayActivity";
import styled from "styled-components";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";
import TodayItem from "./TodayItem";

const StyledToday = styled.div`
  grid-column: 1 / span 2;
  padding: 3.2rem;
  padding-top: 2.4rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
`;

const TodayList = styled.div`
  overflow: scroll;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  margin-top: 0.8rem;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
`;

function TodayActivity() {
  const { isLoading, activityData } = useTodayActivity();

  if (isLoading) return <Spinner />;

  let renderedItem;
  if (activityData.length > 0) {
    <TodayList>
      {
        (renderedItem = activityData.map((data) => (
          <TodayItem key={data.id} data={data} />
        )))
      }
    </TodayList>;
  }
  if (activityData.length === 0) {
    renderedItem = <NoActivity>No activity today</NoActivity>;
  }

  return (
    <StyledToday>
      <Row>
        <Heading as="h2">Today</Heading>
      </Row>
      {renderedItem}
    </StyledToday>
  );
}

export default TodayActivity;
