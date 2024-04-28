import React from "react";
import { sample } from "../assets";
import Image from "next/image";

const Card = (campaign) => {
  return (
    <div className="flex flex-col cursor-pointer bg-white hover:bg-gray-200 rounded-large text-center drop-shadow-3xl w-[30rem] m-4">
      <div className="m-10 flex flex-col justify-aroun items-center">
        {/* <Image
          src={image}
          alt="thumbnail"
          className="rounded-full overflow-hidden"
        /> */}
        <img
          src={campaign.image}
          alt="thumbnail"
          placeholder="sample.jpg"
          className="rounded-3xl object-cover h-64 w-80"
        />
        <p className="text-xl my-5 2xl:px-10 h-36 max-w-md text-ellipsis overflow-hidden text-justify tracking-tight">
          {campaign.description}
        </p>
        <h2 className="text-3xl font-bold">{campaign.title}</h2>
      </div>
    </div>
  );
};

export default Card;
