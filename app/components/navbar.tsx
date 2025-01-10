"use client"
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./sidebar";
import  toggleSidebar  from "../functions/toggleSidebar";
import closeSidebar from "../functions/closeSidebar";
import Image from "next/image";


export default function Navbar() {



    return(
        <nav className="w-full h-16 bg-zinc-100 border-b border-black font-medium z-20 fixed flex items-center">
            <div className="max-w-7xl text-lg flex w-full mx-auto">
                <div className="ml-2 ">
                    <Link href="/" onClick={closeSidebar} className='font-marker'>
                        <Image width={165} height={165} src="/BellasBalloonsBasic.svg" alt="BellasBalloons" className="hover:scale-105 transition-all ease-in-out duration-200 w-auto"/>
                    </Link>
                </div>
                
                <div className="hidden lg:flex text-sm gap-2 justify-around content-center my-auto ml-auto  ">
                    <Link href="/" onClick={closeSidebar} className='navlink font-marker'>
                        Home
                    </Link>
                    <Link href="/services" onClick={closeSidebar} className='navlink font-marker'>
                        Services
                    </Link>

                    <Link href="/contact" onClick={closeSidebar} className='navlink font-marker'>
                        Contact
                    </Link>
                    <Link href="/booking" onClick={closeSidebar} className=' font-marker bg-black font-extrabold text-sky-300 hover:text-black py-2 px-4 hover:bg-neutral-200 hover:shadow transition-all ease-in-out duration-300 shadow-black rounded-full'>
                        Order Now!
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