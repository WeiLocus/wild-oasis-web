import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatedBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { isLoading: isCheckout, mutate: checkoutConfirm } = useMutation({
    mutationFn: (bookingId) =>
      updatedBooking(bookingId, { status: "checked-out" }),
    onSuccess: (data) => {
      toast.success(`Booking ${data.id} successfully checked out`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error("There was an error while checking out"),
  });

  return { isCheckout, checkoutConfirm };
}
