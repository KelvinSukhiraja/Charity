import React from "react";
import { Board, Campaign, Form, Navbar } from "../components";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="h-screen bg-body overflow-hidden">
      <Navbar />
      <div className="static h-5/6 flex flex-col justify-evenly">
        <div className="whitespace-nowrap text-7xl 2xl:text-9xl font-bold text-white opacity-60 animate-marquee-infinite flex">
          <div>
            Help Keep Humanity Help Keep Humanity Help Keep Humanity Help Keep
            Humanity
          </div>
          <div>
            Help Keep Humanity Help Keep Humanity Help Keep Humanity Help Keep
            Humanity
          </div>
        </div>
        <div className="whitespace-nowrap text-7xl 2xl:text-9xl font-bold text-white opacity-60 animate-marquee-infinite-rev flex">
          <div>
            Help Keep Humanity Help Keep Humanity Help Keep Humanity Help Keep
            Humanity
          </div>
          <div>
            Help Keep Humanity Help Keep Humanity Help Keep Humanity Help Keep
            Humanity
          </div>
        </div>
        <div className="whitespace-nowrap text-7xl 2xl:text-9xl font-bold text-white opacity-60 animate-marquee-infinite flex">
          <div>
            Help Keep Humanity Help Keep Humanity Help Keep Humanity Help Keep
            Humanity
          </div>
          <div>
            Help Keep Humanity Help Keep Humanity Help Keep Humanity Help Keep
            Humanity
          </div>
        </div>
        <div className="whitespace-nowrap text-7xl 2xl:text-9xl font-bold text-white opacity-60 animate-marquee-infinite-rev flex">
          <div>
            Help Keep Humanity Help Keep Humanity Help Keep Humanity Help Keep
            Humanity
          </div>
          <div>
            Help Keep Humanity Help Keep Humanity Help Keep Humanity Help Keep
            Humanity
          </div>
        </div>
        <div className="absolute self-center backdrop-blur-md bg-white/30 p-52 rounded-xl flex flex-col text-center">
          <Link href="/Form">
            <div className="text-5xl font-bold opacity-70 hover:text-white transition ease-in-out ">
              Create a Campaign
            </div>
          </Link>
          <div className="text-xl m-10 text-white">OR</div>
          <Link href="/Board">
            <div className="text-5xl font-bold opacity-70 hover:text-white transition ease-in-out ">
              Donate
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
