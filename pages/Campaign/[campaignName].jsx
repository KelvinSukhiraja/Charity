import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Loader, Navbar } from "../../components";
import Router, { useRouter } from "next/router";
import { useStateContext } from "../../context";

const Campaign = () => {
  //set the campaign from router query
  const router = useRouter();
  const campaign = router.query;

  //calculate days left
  const daysLeft = (deadline) => {
    const difference = deadline - Date.now();
    console.log("diff", difference);
    const remainingDays = difference / (1000 * 3600 * 24);

    return remainingDays.toFixed(0);
  };
  //show donators
  const { donate, getDonations, contract, address } = useStateContext();
  const [donators, setDonators] = useState([]);
  const fetchDonators = async () => {
    const data = await getDonations(campaign.pId);
    setDonators(data);
  };
  useEffect(() => {
    if (contract) fetchDonators();
  }, [contract, address]);

  //donate
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [name, setName] = useState();
  const [message, setMessage] = useState();
  const handleDonate = async () => {
    setIsLoading(true);
    console.log("here", campaign.pId, amount, name, message);
    try {
      await donate(campaign.pId, name, message, amount);
    } catch (error) {
      console.log("fail to submit form", error);
    }
    Router.reload();
    setIsLoading(false);
  };

  return (
    <div className="bg-body h-screen">
      <Navbar />
      <div className="flex bg-body h-screen">
        {isLoading && <Loader />}
        <div className="w-1/2 flex flex-col items-center">
          <img
            src={campaign.image}
            className="drop-shadow-3xl object-cover h-2/6 w-1/2 mt-4"
          />
          <div className="flex flex-col p-2">
            <label className="text-3xl font-bold m-2 mt-5">
              Donate to Campaign
            </label>
            <label className="text-lg">Amount:</label>
            <input
              type="number"
              name="amount"
              placeholder="ETH"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="my-1 p-2 outline-none bg-emerald-100 rounded-lg"
            />
            <label className="text-lg">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Kelvin Sukhiraja"
              onChange={(e) => setName(e.target.value)}
              className="my-1 p-2 outline-none bg-emerald-100 rounded-lg"
            />
            <label className="text-lg">Message: </label>
            <textarea
              type="text"
              name="message"
              placeholder="Leave your message here... "
              rows="3"
              maxLength="150"
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 mb-1 p-2 outline-none bg-emerald-100 rounded-lg"
            />
            <div className="text-sm">Max 150 Characters</div>
            <input
              type="submit"
              value="Donate"
              onClick={handleDonate}
              className="m-5 text-2xl text-white bg-theme py-4 px-20 rounded-3xl cursor-pointer transition ease-in-out hover:bg-indigo-500 hover:scale-110"
            />
          </div>
        </div>
        <div className="w-1/2 z-10">
          {/* Info Cards */}
          <div className="flex justify-center">
            <div className="bg-white text-center rounded-3xl p-5 text-md m-4">
              <div>Days Left </div>
              <div className="m-5 text-4xl font-bold">
                {daysLeft(campaign.deadline)}
              </div>
            </div>
            <div className="bg-white text-center rounded-3xl p-5 text-md m-4">
              <div>Funds Raised </div>
              <div className="m-5 text-4xl font-bold">
                {campaign.amountCollected}
              </div>
            </div>
            <div className="bg-white text-center rounded-3xl p-5 text-md m-4">
              <div>Goal </div>
              <div className="m-5 text-4xl font-bold">{campaign.target}</div>
            </div>
          </div>

          <div className="flex flex-col m-3">
            <div className="font-bold text-3xl my-3">
              Title: {campaign.title}
            </div>
            <div className="text-2xl">
              Name: <a className="text-xl">{campaign.name}</a>
            </div>
            <div className="text-2xl">
              Email: <a className="text-xl">{campaign.email}</a>
            </div>
            <div className="text-2xl">
              Website:{" "}
              <a href={campaign.website} className="underline text-xl">
                {campaign.website}
              </a>
            </div>
          </div>
          <div className="my-10 p-10 h-2/3 bg-white rounded-3xl ">
            <div className="text-3xl font-bold">Story:</div>
            <div className="my-5 p-5 text-3xl h-2/5 2xl:h-4/6 overflow-auto">
              {campaign.description}
            </div>
          </div>
        </div>
        <div className="fixed h-1/2 -bottom-1/3 transition ease-in-out duration-700 hover:-translate-y-2/4 bg-black  z-30 flex flex-col p-7 w-screen ">
          <div className="text-white text-3xl">Donators:</div>
          {/* <ul className="flex ml-10 mt-3 overflow-x-scroll h-2/3">
            <Donators />
          </ul> */}
          {console.log(donators)}
          <div className="flex flex-row overflow-x-scroll h-5/6 w-screen">
            {donators.length > 0 &&
              donators.map((item, index) => (
                <div
                  key={`${item.donator}-${index}`}
                  className="flex ml-10 mt-3"
                >
                  <div className="bg-theme rounded-t-3xl p-6 m-1 flex flex-col justify-between  max-w-sm">
                    <a className="text-2xl font-extralight">
                      {item.donorMessage}
                    </a>
                    <div className="text-xl truncate font-thin">
                      <div className="flex justify-between font-semibold">
                        <a>{item.donorName}</a>
                        <a>ETH {item.donation}</a>
                      </div>
                      {item.donator}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
