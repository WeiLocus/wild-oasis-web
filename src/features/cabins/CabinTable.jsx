import { useCabins } from "./useCabins";
import CabinRow from "./CabinRow";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

function CabinTable() {
  const { isLoading, cabinsData } = useCabins();
  const [searchParams] = useSearchParams();
  const filteredValue = searchParams.get("discount") || "all";

  if (isLoading) return <Spinner />;
  if (!cabinsData.length) return <Empty resourceName="cabins" />;

  // Filter
  let filteredCabins;
  if (filteredValue === "all") filteredCabins = cabinsData;

  if (filteredValue === "no-discount")
    filteredCabins = cabinsData.filter((cabin) => cabin.discount === 0);

  if (filteredValue === "with-discount")
    filteredCabins = cabinsData.filter((cabin) => cabin.discount > 0);

  // Sort
  const sortBy = searchParams.get("sortBy") || "startDate-asc"
  const [field, direction] = sortBy.split("-")
  const sortDirection = direction === "asc" ? 1: -1
  const sortedCabins = filteredCabins.sort((a, b) => (a[field] - b[field]) * sortDirection)

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>name</div>
          <div>capacity</div>
          <div>Price</div>
          <div>discount</div>
        </Table.Header>
        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow key={cabin.id} cabinData={cabin} />}
        ></Table.Body>
      </Table>
    </Menus>
  );
}

export default CabinTable;
