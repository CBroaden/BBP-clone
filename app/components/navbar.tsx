import Link from "next/link";
import { Playfair_Display, Lobster_Two } from "next/font/google";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./sidebar";
import  toggleSidebar  from "../functions/toggleSidebar";


const playfair = Playfair_Display({ 
    subsets: ["latin"] ,
    variable: '--font-playfair'
  });

  const lobster = Lobster_Two({ 
    subsets: ["latin"] ,
    weight: "700",
    variable: '--font-lobster'
  });

export default function Navbar() {

    return(
        <nav className="w-full h-12 font-medium z-10 fixed flex items-center">
            <div className="max-w-5xl text-lg flex w-full mx-auto">
                <div className="ml-2 [&>a]:hover:underline">
                    <Link href="/" className={lobster.className}>
                        <p className="md:text-3xl italic">BellaBackdrops&Props</p>
                    </Link>
                </div>
                
                <div className="hidden lg:flex text-2xl justify-around content-center font-bold my-auto ml-auto w-1/2 md:w-1/3">
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
                <button onClick={toggleSidebar} id="hamburger" className="lg:hidden inline-flex items-center text-3xl ml-auto mr-8">
                    <GiHamburgerMenu />
                </button>

                <div id="sidebar" className="lg:hidden absolute right-4 top-10 ">
                    <Sidebar />
                </div>
                


                
                
            </div>
            
            

        </nav>
    )
}