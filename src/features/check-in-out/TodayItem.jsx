import styled from "styled-components";
import Tag from "../../ui/Tag";
import Flag from "../../ui/Flag";
import Button from "../../ui/Button";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);
  font-size: 1.4rem;
`;

const Guest = styled.div`
  font-weight: 500;
`

function TodayItem({ data }) {
  const {
    id,
    status,
    guests: { fullName, countryFlag, country },
    numNights,
  } = data;
  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
      {status === "checked-in" && <Tag type="blue">Departing</Tag>}

      <Flag src={countryFlag} alt={`Flag of ${country}`} />
      <Guest>{fullName}</Guest>
      <div>{numNights} nights</div>

      {status === "unconfirmed" && <Button size="small" variation="primary">Check in</Button>}
    </StyledTodayItem>
  );
}

export default TodayItem;
