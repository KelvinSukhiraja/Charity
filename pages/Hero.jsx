import React from "react";
import { Card } from "../components";
import { useStateContext } from "../context";
import { ConnectWallet } from "@thirdweb-dev/react";
import { sample } from "../assets";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="absolute w-1/2 bg-secondary h-screen flex flex-col justify-center overflow-hidden">
        <div className="m-7">
          <div className="font-bold text-8xl">
            <p>They Need Our</p>
            <p className="text-white my-2 hover:text-theme">Help.</p>
            <p className="text-xl font-normal my-4">
              Charity is an act of a kind heart. <br />
              Connect now and donate to a cause of your choosing.
            </p>
          </div>
          <div>
            <ConnectWallet
              btnTitle="Connect"
              className="mt-3 py-5 px-12 font-bold text-xl text-white bg-body rounded-none hover:bg-indigo-500 "
            />
          </div>
        </div>
        <div className="whitespace-nowrap text-7xl font-bold text-white opacity-60 animate-marquee-infinite flex my-5">
          <div>
            Help Keep Humanity Help Keep Humanity Help Keep Humanity Help Keep
            Humanity
          </div>
          <div>
            Help Keep Humanity Help Keep Humanity Help Keep Humanity Help Keep
            Humanity
          </div>
        </div>
      </div>
      {/* <div className="w-full flex justify-center">
        <a className="absolute w-5/6 flex justify-end text-lg mt-10 font-extralight">
          Create Campaign
        </a>
      </div> */}

      <div className="h-screen flex justify-center items-end">
        <Image src={sample} className="w-5/6 h-[90%] object-cover" />
      </div>
    </div>
  );
};

export default Hero;
