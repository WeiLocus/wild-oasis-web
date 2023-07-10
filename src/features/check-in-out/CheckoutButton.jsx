import Button from "../../ui/Button"
import { useCheckout } from "./useCheckout"

function CheckoutButton({bookingId}) {
  const { isCheckout, checkoutConfirm } = useCheckout()

  return (
    <Button size="small" variation="primary" onClick={() => checkoutConfirm(bookingId)} disabled={isCheckout}>
      Check out
    </Button>
  )
}

export default CheckoutButton
