import styled from "styled-components";
import { formatCurrency } from "../../utils/helper";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

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

const Img = styled.img`
  display: block;
  width: 6.4rem;
  object-fit: cover;
  object-position: center;
  aspect-ratio: 3 / 2;
  transform: scale(1.5) translateX(-5px);
`;

const Cabin = styled.div`
  color: var(--color-grey-600);
  font-size: 1.6rem;
  font-weight: 600;
  font-family: "Sono";
`;

const Price = styled.div`
  font-weight: 600;
  font-family: "Sono";
`;

const Discount = styled.div`
  color: var(--color-green-700);
  font-weight: 500;
  font-family: "Sono";
`;

function CabinRow({ cabinData }) {
  console.log("a", cabinData);
  const { id: cabinId, name, maxCapacity , regularPrice, discount, image } =
    cabinData;

  const queryClient = useQueryClient()

  // 處理delete , 解構mutate callback function
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCabin,
    // when mutation success, re-fetch data
    onSuccess: () => {
      toast.success("Cabin successfully deleted!")
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      })
    },
    onError: err => toast.error(err.message),
  })

  return (
    <TableRow>
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      <Discount>{formatCurrency(discount)}</Discount>
      <button onClick={() => mutate(cabinId)} disabled={isDeleting}>Delete</button>
    </TableRow>
  );
}

export default CabinRow;