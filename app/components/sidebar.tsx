import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import closeSidebar from "../functions/closeSidebar";

const playfair = Playfair_Display({ 
    subsets: ["latin"] ,
    variable: '--font-playfair'
  });

export default function Sidebar() {


    return (
        <div className="w-32 h-32 pb-1 shadow-sm shadow-black bg-white border-l border-b border-neutral-600 font-bold flex flex-col items-center justify-around">
            <Link href="/booking" onClick={closeSidebar}  className={playfair.className}>
                        Book Us
                    </Link>

                    <Link href="/services" onClick={closeSidebar} className={playfair.className}>
                        Services
                    </Link>

                    <Link href="/contact" onClick={closeSidebar} className={playfair.className}>
                        Contact
                    </Link>
        </div>
    )
}