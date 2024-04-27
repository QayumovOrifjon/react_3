import React from "react";
import Thousand from "../../src/assets/thousand.png";

const SectionComp = () => {
  return (
    <div className="flex justify-between container mx-auto mb-[270px]">
      <div>
        <h1 className="text-[64px] font-[700] leading-[80px] mt-[115px]">
          Explore and Travel
        </h1>
        <h4 className="text-[22px] font-[600] leading-[27px]  mt-[74px] mb-[21px]">
          Holiday finder
        </h4>
        <span className="block rounded border-[1px] border-[solid] border-black w-[32px] mb-[48px]"></span>
        <div className="flex gap-8">
          <select
            className="border-[0.8px] border-[solid] border-[rgb(175,176,185)] rounded-md py-[16px] pl-[31px] pr-[81px]"
            name="Location"
            id=""
          >
            <option value="">Location</option>
          </select>
          <select
            className="border-[0.8px] border-[solid] border-[rgb(175,176,185)] rounded-md py-[16px] pl-[31px] pr-[81px]"
            name="Activity"
            id=""
          >
            <option value="">Activity</option>
          </select>
        </div>
        <div className="flex gap-8 mt-8">
          {" "}
          <select
            className="border-[0.8px] border-[solid] border-[rgb(175,176,185)] rounded-md py-[16px] pl-[31px] pr-[100px]"
            name="Grade"
            id=""
          >
            <option value="">Grade</option>
          </select>
          <select
            className="border-[0.8px] border-[solid] border-[rgb(175,176,185)] rounded-md py-[16px] pl-[31px] pr-[100px]"
            name="Date"
            id=""
          >
            <option value="">Date</option>
          </select>
        </div>
        <button className="rounded-lg bg-[#FB8F1D] text-white px-[60px] py-4 mt-10 hover:bg-white  hover:text-[#FB8F1D] border-[#FB8F1D] hover:border">
          Explore
        </button>
      </div>
      <img className="mt-[72px]" src={Thousand} alt="" />
    </div>
  );
};

export default SectionComp;
