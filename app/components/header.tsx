import Image from "next/image"
import Link from "next/link"

export default function Header() {

    return(
        <div className="hero flex flex-col md:h-[70vh] text-outline border-b border-black text-white font-semibold md:flex-row justify-between items-center mx-auto py-4 w-[100%]">
          <Image height={350} width={350} alt="Three Balloons" src='/BellasBalloons.svg' className="mx-auto my-auto"/>
          <div className="md:w-[30rem] w-4/5 mx-auto my-auto flex flex-col gap-4">
            <h1 className='font-marker w-full text-center md:text-left text-2xl font-black'>Bella&apos;s Balloons & Backdrops</h1>
            <p className='font-roboto mx-auto text-xl'>Elevate your event with our stunning photo backdrops and balloon decorations. We add a touch of <span className='animated-gradient remove-text-outline font-marker italic bg-gradient-to-r pr-1 from-[aquamarine] via-yellow-500 to-[fuchsia] text-transparent bg-clip-text font-black'>Magic</span> to your celebrations. Let&apos;s make your moments unforgettable!</p>
            <Link href="/booking" className="mx-auto md:ml-0">
              <button className="button text-outline bg-slate-200 bg-opacity-20 backdrop-blur-lg">Order Now!</button>
            </Link>
          </div>
          
        </div>
    )
}