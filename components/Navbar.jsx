import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import { useStateContext } from "../context";
const Navbar = () => {
  const { address } = useStateContext();
  const router = useRouter();
  // if (!address) {
  //   router.push("/");
  // }
  return (
    <div className="flex justify-between items-center mx-auto md:px-14 w-full">
      <div className="flex flex-row w-screen justify-between p-2 hover:text-slate-800">
        <Link href="/Homepage">
          <img
            src="/logo.svg"
            className="cursor-pointer stroke-white"
            alt="logo"
          />
        </Link>

        <div className="flex items-center bg-white rounded-large bg-opacity-70 px-3 backdrop-blur-sm">
          <Link href="/Form">
            <img
              className="cursor-pointer hover:bg-secondary rounded-full p-2 mx-3"
              src="/add.svg"
            />
          </Link>
          <Link href="/Board">
            <img
              className="cursor-pointer hover:bg-secondary rounded-full p-2 mx-3"
              src="/dashboard.svg"
            />
          </Link>

          {/* <img
            className="cursor-pointer hover:bg-secondary rounded-full p-2 mx-3"
            src="/profile.svg"
          /> */}
          <div className="mx-3">
            <ConnectWallet theme="light" accentColor="navy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
