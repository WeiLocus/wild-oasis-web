import styled from "styled-components"

const StyleStat = styled.div`
  display: grid;
  grid-template-columns: 6.4rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 1.6rem;
  row-gap: 0.4rem;
  padding: 1.6rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row: 1/-1;
  aspect-ratio: 1;
  border-radius: 50%;
  /* Make these dynamic, based on the received prop */
  background-color: var(--color-${(props) => props.color}-100);

  & svg {
    width: 3.2rem;
    height: 3.2rem;
    color: var(--color-${(props) => props.color}-700);
  }
`;

const Title = styled.h5`
  align-self: end;
  color: var(--color-grey-500);
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.5px;
`

const Value = styled.p`
  /* line-height: 1; */
  font-size: 2.4rem;
  font-weight: 500;

`

function Stat({icon, title, color, value}) {
  return (
    <StyleStat>
      <Icon color={color}>{icon}</Icon>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </StyleStat>
  );
}

export default Stat
