import Link from "next/link";
import { Playfair_Display, Lobster_Two } from "next/font/google";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./sidebar";
import  toggleSidebar  from "../functions/toggleSidebar";
import Image from "next/image";


const playfair = Playfair_Display({ 
    subsets: ["latin"] ,
    variable: '--font-playfair',
    display: 'swap'
  });

  const lobster = Lobster_Two({ 
    subsets: ["latin"] ,
    weight: "700",
    variable: '--font-lobster',
    display: 'swap'
  });

export default function Navbar() {

    return(
        <nav className="w-full h-16 bg-white shadow-sm shadow-black font-medium z-20 fixed flex items-center">
            <div className="max-w-7xl text-lg flex w-full mx-auto">
                <div className="ml-2 ">
                    <Link href="/" className={lobster.className}>
                        <Image width={250} height={5} src="/BellasBalloonsBasic.svg" alt="BellasBalloons" className=""/>
                    </Link>
                </div>
                
                <div className="hidden lg:flex text-xl justify-around content-center my-auto ml-auto w-1/2 md:w-1/3">
                    <Link href="/booking" className={playfair.className}>
                        Book Us
                    </Link>

                    <Link href="/services" className={playfair.className}>
                        Services
                    </Link>

                    <Link href="/contact" className={playfair.className}>
                        Contact
                    </Link>
                </div>
                <button onClick={toggleSidebar} id="hamburger" className="lg:hidden inline-flex items-center text-3xl ml-auto mr-12">
                    <GiHamburgerMenu />
                </button>

                <div id="sidebar" className="hidden absolute right-0 top-16 ">
                    <Sidebar />
                </div>
                


                
                
            </div>
            
            

        </nav>
    )
}