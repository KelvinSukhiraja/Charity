import { ConnectWallet } from "@thirdweb-dev/react";
import Hero from "./Hero";
import Homepage from "./Homepage";
import { useStateContext } from "../context";

export default function Home() {
  const { address } = useStateContext();
  return (
    <div className="bg-body h-screen font-urbanist">
      {address ? <Homepage /> : <Hero />}
    </div>
  );
}
