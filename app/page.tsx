import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import Carousel2 from "./components/carousel2";
import Carousel1 from "./components/carousel1";
import Header from "./components/header";

const playfair = Playfair_Display({ 
  subsets: ["latin"] ,
  variable: '--font-playfair'
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20">
      <div className="">  
        <Header />      
        <Carousel2 />
        
        <div id="container" className="md:max-w-4xl mx-auto w-4/5">
        <div className="flex w-full flex-col-reverse md:flex-row justify-around items-center">
        <div className=' pt-1  md:max-w-[40%] '>
            <h1 className='text-center text-2xl border-b-[1px] max-w-[50%] my-4 pb-2 mx-auto border-black'>About Us</h1>
            <div className='text-xl '>
              <p className=' mx-auto indent-6 mb-8'>Bella Backdrops & Props LLC specializes in creating a visually stunning party or event that leaves a memorable impression! We design custom props, backdrops, and balloon decor for any event.</p>
              <p className=' mx-auto indent-6 mb-8'>We <span className='font-bold text-shadow text-[aquamarine]'>CREATE</span> set designs for birthday parties, baby showers, gender reveals, graduations/high school proms, Corporate events and MORE!</p>
              <p className=' mx-auto indent-6 mb-8'>We <span className='font-bold text-shadow  text-[fuchsia]'>PRIDE</span> ourselves on providing excellent customer service and attention to detail is our top priority. Providing the newest and most quality theme props.</p>
              <p className=' mx-auto indent-6 mb-8'>We <span className='font-bold text-shadow  text-yellow-500'>GUARANTEE</span> on time delivery, professional set up, and clean up.</p>
            </div>
            <Link className=' font-bold flex justify-center hover:no-underline w-fit mx-auto gentium ' href='/services' ><button className=' bg-[aquamarine] hover:text-white hover:bg-yellow-500 hover:scale-105 text-xl rounded border-solid text-black border-[1px] border-black px-2 py-2 m-0'>What Do We Offer?</button></Link>
          </div>

        <div className="pt-1 md:max-w-[40%]">
          <Image src="calendar.svg" alt="Calendar" width={400} height={400} className="mx-auto"/>
          <Link href={'/booking'} className="mt-4 font-bold flex justify-center hover:no-underline w-fit mx-auto"><button className="bg-[aquamarine] hover:text-white hover:bg-[fuchsia] hover:scale-105 mx-auto font-bold text-xl rounded border-solid text-black border-[1px] border-black px-2 py-2 m-0">Book Us</button></Link>
        </div>
        </div>

        <div className=' md:p-8 pt-1 text-black mx-auto my-6 '>
          <h1 className='dancing text-center text-2xl font-medium border-b-[1px] max-w-[60%] my-4 pb-2 mx-auto border-black'>Thank You!</h1>
            
          <p className='  mx-auto indent-6 mb-8 text-xl'>We would like to thank all of our lovely customers for your orders! Also to those who like, comment, share, and recommend us! It does not go unnoticed and we are thankful for the support!</p>
            
          <h1 className=' text-center text-2xl font-medium border-b-[1px] min-w-fit max-w-[50%] my-4 pb-2 mx-auto border-black'>Bella Backdrops & Props</h1>
          
          <div className='text-center text-xl'>
            <Link href='tel:3134095785' className='hover:text-[aquamarine] underline  w-fit gentium mx-auto'> (313)-409-5785 </Link>
          </div>

          <div className='text-center w-full text-lg'>
            <Link href='mailto:bellabackdropsandprops@gmail.com' className='hover:text-[aquamarine] underline mx-auto mb-4'>bellabackdropsandprops@gmail.com</Link>
          </div>
        </div>
      </div>
      <Carousel1 />
      </div>
      
    </main>
  );
}
