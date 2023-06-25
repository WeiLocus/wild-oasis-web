import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getCabins } from "../../services/apiCabins";

const Table = styled.div`
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-grey-200);
  background-color: var(--color-grey-0);
  font-size: 1.4rem;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.6rem 2.4rem;
  /* border-bottom: 1px solid var(--color-grey-100); */
  background-color: var(--color-grey-50);
  color: var(--color-grey-600);
  text-transform: uppercase;
`;

function CabinTable() {
  const {
    isLoading,
    data: cabinsData,
    error,
  } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });
  console.log("cabinsData",cabinsData)


  if (isLoading) return <div>Spinner</div>;

  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>name</div>
        <div>capacity</div>
        <div>Price</div>
        <div>discount</div>
      </TableHeader>
    </Table>
  );
}

export default CabinTable;
