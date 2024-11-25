import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";

const serviceCard = {
  hover: {
    scale: 1.02,
    transition: { duration: 0.5 },
  },
};

const Services: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between w-full py-20">
        
            <Header />
        
        
      <h1 className="text-center text-4xl border-b-[1px] max-w-[50%] my-8 pb-2 mx-auto border-black">
        Services
      </h1>
      <div className="w-10/12 m-auto flex flex-wrap content-evenly items-center">
        <div className="relative rounded-xl shadow-black shadow-lg w-44 h-60 mx-auto my-3 bg-opacity-90 bg-white border-solid border-black border-[1px] p-2">
          <Image
            width={200}
            height={200}
            alt="8x10ft Arch"
            className="m-auto  object-contain aspect-square"
            src="/bbp/8x10-arch.png"
          />
          <h1 className="text-center py-1 font-bold ">8x10ft Arch</h1>
          <h1 className="text-center">
            Starting at{" "}
            <span className="text-green-500 font-bold underline">$300</span>
          </h1>
        </div>

        <div className="relative rounded-xl shadow-black shadow-lg w-44 h-60 mx-auto my-3 bg-opacity-90 bg-white border-solid border-black border-[1px] p-2">
          <Image
            width={200}
            height={200}
            alt="6ft Organic Demi-Arch"
            className="m-auto object-contain aspect-square"
            src="/bbp/6ft-organic-demi-arch.png"
          />
          <h1 className="text-center  font-bold ">
            6ft Organic Arch
          </h1>
          <h1 className="text-center">
            Starting at{" "}
            <span className="text-green-500 font-bold underline">$250</span>
          </h1>
        </div>

        <div className="relative rounded-xl shadow-black shadow-lg w-44 h-60 mx-auto my-3 bg-opacity-90 bg-white border-solid border-black border-[1px] p-2">
          <Image
            width={200}
            height={200}
            alt="8x8ft Organic Wall"
            className="m-auto object-contain aspect-square"
            src="/bbp/7ft-organic-wall.png"
          />
          <h1 className="text-center py-1  font-bold ">
            8x8ft Organic Wall
          </h1>
          <h1 className="text-center">
            Starting at{" "}
            <span className="text-green-500 font-bold underline">$500</span>
          </h1>
        </div>

        <div className="relative rounded-xl shadow-black shadow-lg w-44 h-60 mx-auto my-3 bg-opacity-90 bg-white border-solid border-black border-[1px] p-2">
          <Image
            width={200}
            height={200}
            alt="Jumbo Topper Centerpiece"
            className="m-auto object-contain h-[75%]"
            src="/bbp/Centerpiece-with-jumbo.png"
          />
          <h1 className="text-center mx-auto text-sm font-bold ">
            Jumbo Topper Centerpiece
          </h1>
          <h1 className="text-center">
            Starting at{" "}
            <span className="text-green-500 font-bold underline">$15</span>
          </h1>
        </div>

        <div className="relative rounded-xl shadow-black shadow-lg w-44 h-60 mx-auto my-3 bg-opacity-90 bg-white border-solid border-black border-[1px] p-2">
          <Image
            width={200}
            height={200}
            alt="Classic Column"
            className="m-auto object-contain h-[73%]"
            src="/bbp/Classic-Column.png"
          />
          <h1 className="text-center py-1  font-bold ">
            Classic Column
          </h1>
          <h1 className="text-center">
            Starting at{" "}
            <span className="text-green-500 font-bold underline">$75</span>
          </h1>
        </div>

        <div className="relative rounded-xl shadow-black shadow-lg w-44 h-60 mx-auto my-3 bg-opacity-90 bg-white border-solid border-black border-[1px] p-2">
          <Image
            width={200}
            height={200}
            alt="Box Organic Arch"
            className="m-auto object-contain aspect-square"
            src="/bbp/organic-arch-1.png"
          />
          <h1 className="text-center py-1  font-bold ">
            Box Organic Arch
          </h1>
          <h1 className="text-center">
            Starting at{" "}
            <span className="text-green-500 font-bold underline">$300</span>
          </h1>
        </div>

        <div className="relative rounded-xl shadow-black shadow-lg w-44 h-60 mx-auto my-3 bg-opacity-90 bg-white border-solid border-black border-[1px] p-2">
          <Image
            width={200}
            height={200}
            alt="8x10ft Organic Arch"
            className="m-auto object-contain aspect-square"
            src="/bbp/organic-arch-2.png"
          />
          <h1 className="text-center py-1  font-bold ">
            {" "}
            8x10ft Organic Arch
          </h1>
          <h1 className="text-center">
            Starting at{" "}
            <span className="text-green-500 font-bold underline">$350</span>
          </h1>
        </div>

        <div className="relative rounded-xl shadow-black shadow-lg w-44 h-60 mx-auto my-3 bg-opacity-90 bg-white border-solid border-black border-[1px] p-2">
          <Image
            width={200}
            height={200}
            alt="6'/8' Roman Column"
            className="m-auto object-contain h-[73%]"
            src="/bbp/Roman-Column.png"
          />
          <h1 className="text-center py-1  font-bold ">
            6ft Roman Column
          </h1>
          <h1 className="text-center">
            Starting at{" "}
            <span className="text-green-500 font-bold underline">$85</span>
          </h1>
        </div>

        <div className="relative rounded-xl shadow-black shadow-lg w-44 h-60 mx-auto my-3 bg-opacity-90 bg-white border-solid border-black border-[1px] p-2">
          <Image
            width={200}
            height={200}
            alt="8x8 Square Arch"
            className="m-auto object-contain h-[73%]"
            src="/bbp/Square-arch-1.png"
          />
          <h1 className="text-center py-1  font-bold ">
            8x8ft Box Arch
          </h1>
          <h1 className="text-center">
            Starting at{" "}
            <span className="text-green-500 font-bold underline">$250</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
