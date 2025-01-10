import { NextPage } from "next"
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import { FaFacebook } from "react-icons/fa";


const Contact: NextPage = () => {

    return (
        <div>
            <Head key={'contact'}>
                <title>Contact</title>
                <meta key={'contact description'} name="description" content="Bella's Balloons & Backdrops Contact Information" />
            </Head>
            <div className='flex min-h-screen flex-col items-center justify-between  py-16'>
                <Header />
                <h1 className='font-marker text-2xl border-b-[1px] max-w-[50%] my-4 pb-2 mx-auto border-black'>
                    Contact
                </h1>
                <div>
                    <Link href='tel:3134095785' className='hover:text-[aquamarine] text-xl w-fit mx-auto'> (313)-409-5785 </Link>
                </div>
                <div className="my-2">
                    <Link href='mailto:bellabackdropsandprops@gmail.com' className='hover:text-[aquamarine] text-xl mx-auto mb-4'>bellabackdropsandprops@gmail.com</Link>
                </div>
                <div className="mt-4" >
                    <Link className="inline-flex " href='https://www.facebook.com/104008648045683' > <FaFacebook className="icon text-blue-700 text-2xl"/> </Link>
                </div>
                <h1 className='text-2xl border-b-[1px] max-w-[50%] my-4 pb-2 mx-auto border-black'>
                    Call Hours
                </h1>
                <p className='text-xl mx-auto ' >
                    Tuesday - Sunday: 10:00am - 6:00pm
                </p>
            </div>
        </div>
    )
}

export default Contact;