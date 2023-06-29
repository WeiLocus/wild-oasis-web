import { useCabins } from "./useCabins";
import CabinRow from "./CabinRow";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";

function CabinTable() {
  const { isLoading, cabinsData } = useCabins();

  if (isLoading) return <Spinner />;

  const renderedCabinRow = cabinsData.map((cabin) => (
    <CabinRow key={cabin.id} cabinData={cabin} />
  ));

  return (
    <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header>
        <div></div>
        <div>name</div>
        <div>capacity</div>
        <div>Price</div>
        <div>discount</div>
      </Table.Header>
      {renderedCabinRow}
    </Table>
  );
}

export default CabinTable;
