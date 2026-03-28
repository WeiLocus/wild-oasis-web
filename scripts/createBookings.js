import { createClient } from '@supabase/supabase-js'
import { differenceInDays, parseISO, isFuture, isPast, isToday } from 'date-fns'
import { bookings } from '../src/data/data-bookings.js'
import { cabins } from '../src/data/data-cabins.js'

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase URL and key are required')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)))

async function deleteBookings() {
  const { error } = await supabase.from('bookings').delete().gt('id', 0)
  if (error) console.log(error.message)
}

async function createBookings() {
  const { data: guestsIds } = await supabase
    .from('guests')
    .select('id')
    .order('id')
  const allGuestIds = guestsIds.map((guest) => guest.id)
  const { data: cabinsIds } = await supabase
    .from('cabins')
    .select('id')
    .order('id')
  const allCabinIds = cabinsIds.map((cabin) => cabin.id)

  const finalBookings = bookings.map((booking) => {
    const cabin = cabins.at(booking.cabinId - 1)
    const numNights = subtractDates(booking.endDate, booking.startDate)
    const cabinPrice = numNights * (cabin.regularPrice - cabin.discount)
    const extrasPrice = booking.hasBreakfast
      ? numNights * 15 * booking.numGuests
      : 0 // hardcoded breakfast price
    const totalPrice = cabinPrice + extrasPrice

    let status
    if (
      isPast(new Date(booking.endDate)) &&
      !isToday(new Date(booking.endDate))
    )
      status = 'checked-out'
    if (
      isFuture(new Date(booking.startDate)) ||
      isToday(new Date(booking.startDate))
    )
      status = 'unconfirmed'
    if (
      (isFuture(new Date(booking.endDate)) ||
        isToday(new Date(booking.endDate))) &&
      isPast(new Date(booking.startDate)) &&
      !isToday(new Date(booking.startDate))
    )
      status = 'checked-in'

    return {
      ...booking,
      numNights,
      cabinPrice,
      extrasPrice,
      totalPrice,
      guestId: allGuestIds.at(booking.guestId - 1),
      cabinId: allCabinIds.at(booking.cabinId - 1),
      status,
    }
  })

  const { error } = await supabase.from('bookings').insert(finalBookings)
  if (error) console.log(error.message)
}

async function main() {
  // Only delete and recreate bookings, assuming guests and cabins exist
  await deleteBookings()
  await createBookings()
}

main().catch(console.error)
