import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

// TODO: TURN INTO MODAL
//50% Deposit Due Immediately / Remainder Due 48hrs before Event
const Booking: NextPage = () => {
  return (
    <div>
        <Head key={'booking'}>
            <title>Booking</title>
        </Head>
        
        <div className='flex min-h-screen items-center flex-col mx-auto mb-10 py-16'>

            <Image height={350} width={350} alt="Bellas Balloons Logo" src='/BellasBalloons.svg' className="mx-auto my-auto"/>
            <div className='max-w-4xl w-4/5'>
            <h1 className=' text-center text-3xl border-b-[1px] max-w-[50%] my-5 pb-2 mx-auto border-black'>
                Payment
            </h1>
            <p className='text-2xl mb-4'>
                50% Payment Deposit due on the date of booking.
            </p>
            <p className='text-2xl mb-4'>
                Bookings MUST be made <span className='underline text-orange-500 text-shadow'>TWO WEEKS</span> prior to your Event.<span className='underline text-orange-500 text-shadow'>(Rush Fees Apply Otherwise)</span> 
            </p>
            <p className='text-2xl mb-4'>
                Full Payment MUST be made a minimum of <span className='underline text-orange-500 text-shadow'>48 HOURS</span> before the date of your booked event.
            </p>
            <p className='text-2xl mb-4'>
                Past due deposits risk booking <span className='underline text-red-700 text-shadow'>CANCELLATION.</span>
            </p>
            <Link className='text-2xl' href='https://www.honeybook.com/widget/bella_backdrops_props_226668' >
                <button className='button'>
                    Book Us!
                </button>
            </Link>
            </div>

        </div>

    </div>
  )
}

export default Booking