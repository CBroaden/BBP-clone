import Image from "next/image"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ 
    subsets: ["latin"] ,
    variable: '--font-playfair'
  });

export default function Header() {

    return(
        <div className="flex flex-col items-center h-[50vh] max-w-4xl mx-auto text-5xl text-center font-bold border-b border-black">
          <Image height={125} width={125} alt="Three Balloons" src='/bloons.svg' 
          className="mx-auto"/>
          <h1 className={playfair.className}>Balloons by</h1>
          <h1 className={playfair.className}>Bella Backdrops</h1>
          <h1 className={playfair.className}>& Props</h1>
          
        </div>
    )
}