import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useStateContext } from "../context";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { Loader } from "../components";

const Form = () => {
  const { createCampaign } = useStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });
  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("here");
    try {
      setIsLoading(true);
      await createCampaign({
        ...form,
        target: ethers.utils.parseUnits(form.target, 18),
      });
      setIsLoading(false);
      router.push("/");
    } catch (error) {
      console.log("fail to submit form", error);
    }
  };
  return (
    <div className="bg-body h-screen">
      <Navbar />
      <div className="p-5 flex justify-center bg-body">
        {isLoading && <Loader />}
        <form
          onSubmit={handleSubmit}
          className="w-2/3 my-10 py-12 px-20 bg-white h-full rounded-large"
        >
          <div className="text-5xl font-bold">Create a Fundraiser</div>
          <div className="mx-8 my-14">
            <label className="text-xl">Name:</label>
            <div>
              <input
                type="text"
                name="Name"
                placeholder="Great Charity"
                onChange={(e) => handleFormFieldChange("name", e)}
                className="w-full my-3 p-3 outline-theme bg-gray-300 rounded-full "
              />
            </div>
            <label className="text-xl">Email:</label>
            <div>
              <input
                type="email"
                name="Email"
                placeholder="campaign@gmail.com"
                onChange={(e) => handleFormFieldChange("email", e)}
                className="w-full my-3 p-3 outline-theme bg-gray-300 rounded-full "
              />
            </div>
            <label className="text-xl">Website:</label>
            <div>
              <input
                type="text"
                name="Website"
                placeholder="www.mycampaign.org"
                onChange={(e) => handleFormFieldChange("website", e)}
                className="w-full my-3 p-3 outline-theme bg-gray-300 rounded-full "
              />
            </div>
            <label className="text-xl">Title:</label>
            <div>
              <input
                type="text"
                name="Title"
                placeholder="My Campaign"
                onChange={(e) => handleFormFieldChange("title", e)}
                className="w-full my-3 p-3 outline-theme bg-gray-300 rounded-full"
              />
            </div>
            <label className="text-xl">Story:</label>
            <div>
              <textarea
                type="text"
                name="message"
                placeholder="Leave your message here... (300 max characters)"
                rows="5"
                maxLength="300"
                onChange={(e) => handleFormFieldChange("description", e)}
                className="w-full my-3 p-3 outline-theme bg-gray-300 rounded-2xl"
              />
            </div>
            <label className="text-xl">Goal:</label>
            <div>
              <input
                type="number"
                name="Goal"
                placeholder="ETH"
                onChange={(e) => handleFormFieldChange("target", e)}
                className="w-full my-3 p-3 outline-theme bg-gray-300 rounded-full"
              />
            </div>
            <label className="text-xl">End Date:</label>
            <div>
              <input
                type="date"
                name="Deadline"
                onChange={(e) => handleFormFieldChange("deadline", e)}
                className="w-full my-3 p-3 outline-theme bg-gray-300 rounded-full"
              />
            </div>
            <label className="text-xl">Image Link:</label>
            <div>
              <input
                type="url"
                name="Link"
                placeholder="Link"
                onChange={(e) => handleFormFieldChange("image", e)}
                className="w-full my-3 p-3 outline-theme bg-gray-300 rounded-full"
              />
            </div>
            <div className="w-full flex justify-center items-center">
              <input
                type="submit"
                value="Submit"
                className="cursor-pointer justify-self-center my-8 text-2xl text-white bg-body py-5 px-20 rounded-3xl transition ease-in-out hover:bg-theme hover:scale-110"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
