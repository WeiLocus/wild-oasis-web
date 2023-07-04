import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatedBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading: isCheckin, mutate: checkinConfirm } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updatedBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in`);
      queryClient.invalidateQueries({
        active: true,
      });
      navigate("/");
    },
    onError: () => toast.error("There was an error while checking in"),
  });
  return { isCheckin, checkinConfirm };
}
