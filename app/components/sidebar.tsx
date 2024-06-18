import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({ 
    subsets: ["latin"] ,
    variable: '--font-playfair'
  });

export default function Sidebar() {


    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
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
    )
}