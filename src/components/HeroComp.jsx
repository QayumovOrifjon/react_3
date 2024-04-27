import React from "react";
import SiteLogo from "../../src/assets/SiteLogo.svg";

const HeroComp = () => {
  return (
    <div className="flex container mx-auto justify-between py-[27px]">
      <img
        className="border-[15px] border-[#51B084]  border-[solid] rounded-[50%]  "
        src={SiteLogo}
        alt=""
      />
      <div className="flex items-center gap-[34px]">
        <nav>
          <ul className="flex gap-[34px]">
            <li className="leading-[19px] font-[500] hover:cursor-[pointer] text-[#B8BECD] hover:text-black">
              Home
            </li>
            <li className="leading-[19px] font-[500] hover:cursor-[pointer] text-[#B8BECD] hover:text-black">
              Destinations
            </li>
            <li className="leading-[19px] font-[500] hover:cursor-[pointer] text-[#B8BECD] hover:text-black">
              About
            </li>
            <li className="leading-[19px] font-[500] hover:cursor-[pointer] text-[#B8BECD] hover:text-black">
              Partner
            </li>
          </ul>
        </nav>
        <div className="flex gap-[18px]">
          <button className="text-[#FB8F1D] font-[500] border-[2px] border-[solid] border-[#FB8F1D] rounded-lg px-[46px] py-[12px] hover:bg-[#FB8F1D] hover:text-white">
            Login
          </button>
          <button className="text-[#FB8F1D] font-[500] border-[2px] border-[solid] border-[#FB8F1D] rounded-lg px-[36px] py-[12px] hover:bg-[#FB8F1D] hover:text-white">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroComp;
