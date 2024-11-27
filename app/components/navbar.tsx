"use client"
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./sidebar";
import  toggleSidebar  from "../functions/toggleSidebar";
import closeSidebar from "../functions/closeSidebar";
import Image from "next/image";


export default function Navbar() {



    return(
        <nav className="w-full h-16 bg-white shadow-sm shadow-black font-medium z-20 fixed flex items-center">
            <div className="max-w-7xl text-lg flex w-full mx-auto">
                <div className="ml-2 ">
                    <Link href="/" onClick={closeSidebar} className='font-marker'>
                        <Image width={250} height={5} src="/BellasBalloonsBasic.svg" alt="BellasBalloons" className="hover:scale-105 transition-all ease-in-out duration-75"/>
                    </Link>
                </div>
                
                <div className="hidden lg:flex text-xl justify-around content-center my-auto ml-auto w-1/2 md:w-1/3">
                    <Link href="/booking" onClick={closeSidebar} className='navlink font-marker'>
                        Book Us
                    </Link>

                    <Link href="/services" onClick={closeSidebar} className='navlink font-marker'>
                        Services
                    </Link>

                    <Link href="/contact" onClick={closeSidebar} className='navlink font-marker'>
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