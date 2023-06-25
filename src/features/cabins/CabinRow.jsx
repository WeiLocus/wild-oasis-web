import styled from "styled-components";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

function CabinRow({ cabinData }) {
  console.log("a", cabinData);
  const { name, maxCapacity , regularPrice, discount, image } =
    cabinData;

  return (
    <TableRow>
      <img src={image} alt="cabin 1" />
      <div>{name}</div>
      <div>Fits up to {maxCapacity} guests</div>
      <div>{regularPrice}</div>
      <div>{discount}</div>
    </TableRow>
  );
}

export default CabinRow;
