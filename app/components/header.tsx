import Image from "next/image"
import Link from "next/link"

export default function Header() {

    return(
        <div className=" flex flex-col max-w-6xl md:flex-row justify-between items-center mx-auto w-full bg-gradient-radial from-transparent from-25% via-fuchsia-200 via-45% to-65% to-transparent">
          <Image height={350} width={350} alt="Three Balloons" src='/BellasBalloons.svg' className="mx-auto my-auto"/>
          <div className="md:w-[30rem] w-4/5 mx-auto my-auto flex flex-col gap-4">
            <h1 className='font-marker w-full text-center md:text-left text-xl'>Bella&apos;s Balloons & Backdrops</h1>
            <p className='font-roboto mx-auto text-lg'>Elevate your event with our stunning photo backdrops and balloon decorations. We add a touch of <span className=' font-marker italic'>magic</span> to your celebrations. Let&apos;s make your moments unforgettable!</p>
            <Link href="/booking" className="mx-auto md:ml-0">
              <button className="button ">Order Now!</button>
            </Link>
          </div>
          
        </div>
    )
}