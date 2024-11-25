import Image from "next/image"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ 
    subsets: ["latin"] ,
    variable: '--font-playfair'
  });

export default function Header() {

    return(
        <div className="flex flex-col items-center mx-auto font-bold w-fit bg-gradient-radial from-white from-15% via-fuchsia-300 via-40% to-70% to-white">
          <Image height={350} width={350} alt="Three Balloons" src='/BellasBalloons.svg' 
          className="mx-auto my-auto"/>
          
        </div>
    )
}