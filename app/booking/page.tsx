import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'

// TODO: TURN INTO MODAL
//50% Deposit Due Immediately / Remainder Due 48hrs before Event
const Booking: NextPage = () => {
  return (
    <>
        <Head key={'booking'}>
            <title>Booking</title>
        </Head>
        
        <div className='flex min-h-screen flex-col mx-auto mb-10 w-10/12 py-16'>
            <Header />
            <h1 className='dancing text-center text-3xl font-bold border-b-[1px] max-w-[50%] my-5 pb-2 mx-auto border-black'>
                Payment
            </h1>
            <p className='text-2xl gentium font-bold mb-4'>
                50% Payment Deposit due on the date of booking.
            </p>
            <p className='text-2xl gentium font-bold mb-4'>
                Bookings MUST be made <span className='underline text-yellow-700'>TWO WEEKS</span> prior to your Event.<span className='underline text-mustard text-outline'>(Rush Fees Apply Otherwise)</span> 
            </p>
            <p className='text-2xl gentium font-bold mb-4'>
                Full Payment MUST be made a minimum of <span className='underline text-orange-700'>48 HOURS</span> before the date of your booked event.
            </p>
            <p className='text-2xl gentium font-bold mb-4'>
                Past due deposits risk booking <span className='underline text-red-700 text-shadow'>CANCELLATION.</span>
            </p>
            <Link className='text-2xl' href='https://www.honeybook.com/widget/bella_backdrops_props_226668' >
                <button className='font-bold bg-[aquamarine] hover:text-white hover:bg-[fuchsia] rounded border-solid text-black border-[1px] border-black px-2 py-2 mt-6'>
                    Book Us!
                </button>
            </Link>
        </div>

    </>
  )
}

export default Booking