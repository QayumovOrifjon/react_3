import React from "react";
import { MdNavigateNext } from "react-icons/md";

const SectionCompThree = () => {
  return (
    <div className="container mx-auto mb-[60px]">
      <div className="flex justify-between mb-[56px]">
        <h3 className="text-[36px] font-bold leading-[50px]">
          Featured destinations
        </h3>
        <button className="flex items-center text-[#FB8F1D] hover:text-[#E85900]">
          View all <MdNavigateNext />
        </button>
      </div>
      <div className="flex gap-6">
        <div className="relative rounded-lg  w-[364px] h-[400px] bg-[url('../../src/assets/image.png')]">
          <div className="absolute rounded-tr-lg rounded-bl-lg pl-2 top-[88%] bg-white w-[40%] border-[1px] border-[solid] border-[#F7F7F9]">
            <h2 className="text-[18px] font-semibold leading-[27px]">
              Raja Ambat
            </h2>
            <p className="text-[#80918E]">Indonezia</p>
          </div>
        </div>
        <div className="relative rounded-lg  w-[364px] h-[400px] bg-[url('../../src/assets/Screen.png')]">
          <div className="absolute rounded-tr-lg rounded-bl-lg pl-2 top-[88%] bg-white w-[40%] border-[1px] border-[solid] border-[#F7F7F9]">
            <h2 className="text-[18px] font-semibold leading-[27px]">
              Fanjingshan
            </h2>
            <p className="text-[#80918E]">China</p>
          </div>
        </div>
        <div className="relative rounded-lg  w-[364px] h-[400px] bg-[url('../../src/assets/Shot.png')] bg-no-repeat bg-cover">
          <div className="absolute rounded-tr-lg rounded-bl-lg pl-2 top-[88%] bg-white w-[40%] border-[1px] border-[solid] border-[#F7F7F9]">
            <h2 className="text-[18px] font-semibold leading-[27px]">Vevey</h2>
            <p className="text-[#80918E]">Switzerland</p>
          </div>
        </div>
        <div className="relative rounded-lg  w-[364px] h-[400px] bg-[url('../../src/assets/Screen_Shot.png')] bg-no-repeat bg-cover">
          <div className="absolute rounded-tr-lg rounded-bl-lg pl-2 top-[88%] bg-white w-[40%] border-[1px] border-[solid] border-[#F7F7F9]">
            <h2 className="text-[18px] font-semibold leading-[27px]">Skadar</h2>
            <p className="text-[#80918E]">Montenegro</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCompThree;
