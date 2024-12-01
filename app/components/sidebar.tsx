import Link from "next/link";
import closeSidebar from "../functions/closeSidebar";

export default function Sidebar() {


    return (
        <div className="w-32 h-48 pb-1 [&>*]:font-marker text-md shadow-sm shadow-black bg-white border-l border-b border-neutral-600 font-bold flex flex-col items-center justify-around">
            <Link href="/" onClick={closeSidebar}>
                        Home
                    </Link>
            <Link href="/booking" onClick={closeSidebar}>
                        Book Us
                    </Link>

                    <Link href="/services" onClick={closeSidebar} >
                        Services
                    </Link>

                    <Link href="/contact" onClick={closeSidebar} >
                        Contact
                    </Link>
        </div>
    )
}