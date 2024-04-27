import React from "react";
import Thousand_03 from "../../src/assets/Thousand_03.png";

const SectionCompFour = () => {
  return (
    <div className="flex justify-between container mx-auto mt-[173px] mb-[248px]">
      <div>
        <h1 className="text-[36px] font-bold leading=[50px] mt-[152px] mb-[20px]">
          Guides by Thousand Sunny
        </h1>
        <p className="w-[450px] text-[17px] font-light leading-8 mb-8">
          Packed with tips and advice from our on-the-ground experts, our city
          guides app (iOS and Android) is the ultimate resource before and
          during a trip.
        </p>
        <button className="bg-[#FB8F1D] px-[43px] py-3 rounded-lg text-white hover:bg-white  hover:text-[#FB8F1D] border-[#FB8F1D] hover:border">
          Download
        </button>
      </div>
      <img src={Thousand_03} alt="" />
    </div>
  );
};

export default SectionCompFour;
