import React from "react";
import Thousand_2 from "../../src/assets/Thousand_2.png";

const SectionCopmTwo = () => {
  return (
    <div className="flex justify-between container mx-auto pr-[200px] mb-[262px]">
      <img src={Thousand_2} alt="" />
      <div>
        <h1 className="text-[36px] font-bold leading-[50[px] mt-[112px]">
          A new way to explore the world{" "}
        </h1>
        <p className="w-[450px] font-light leading-8 mt-5">
          For decades travellers have reached for Lonely Planet books when
          looking to plan and execute their perfect trip, but now, they can also
          let Lonely Planet Experiences lead the way
        </p>
        <button className="bg-[#FB8F1D] text-white px-9 py-3 rounded-lg mt-8 hover:bg-white  hover:text-[#FB8F1D] border-[#FB8F1D] hover:border">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default SectionCopmTwo;
