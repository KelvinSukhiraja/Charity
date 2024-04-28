import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Link from "next/link";
import { useStateContext } from "../context";

const Board = () => {
  const [campaigns, setCampaigns] = useState([]);
  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    const data = await getCampaigns();
    setCampaigns(data);
  };
  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <div className="bg-body h-screen">
      <Navbar />
      <div className="bg-body h-full">
        <div className="text-5xl font-bold mx-10 my-16">
          Causes around the World ({campaigns.length})
        </div>
        {console.log(campaigns)}
        <div className="flex flex-wrap flex-row justify-evenly bg-body p-5">
          {campaigns.length > 0 &&
            campaigns.map((campaign) => (
              <Link
                href={{
                  pathname: "/Campaign/[slug]",
                  as: "/Campaign/",
                  query: {
                    slug: campaign.title,
                    name: campaign.name,
                    email: campaign.email,
                    website: campaign.website,
                    title: campaign.title,
                    description: campaign.description,
                    deadline: campaign.deadline,
                    image: campaign.image,
                    owner: campaign.owner,
                    target: campaign.target,
                    amountCollected: campaign.amountCollected,
                    pId: campaign.pId,
                  },
                }}
              >
                <Card key={campaign.id} {...campaign} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
