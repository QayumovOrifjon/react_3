import React from "react";
import { MdNavigateNext } from "react-icons/md";
import Sun from "../../src/assets/Sun.png";

const SectionCompSix = () => {
  return (
    <div className="container mx-auto mb-[100px]">
      <div className="flex justify-between">
        <h2 className="text-[36px] font-bold leading-[50px]">
          Trending stories
        </h2>
        <button className="flex items-center text-[#FB8F1D] hover:text-[#E85900]">
          View all <MdNavigateNext />
        </button>
      </div>
      <div className="flex justify-center gap-9 mt-[70px]">
        <div className="w-[280px] h-[540px] border-[0.8px] border-[solid] rounded-lg">
          <img src={Sun} alt="" className="object-contain rounded-t-lg" />
          <h3 className="text-[19px] font-bold leading-[30px] max-w-full pl-3 pr-5 mt-3 mb-3">
            The many benefits of taking a healing holiday
          </h3>
          <p className="text-[15px] leading-[26px] pl-3 pr-5 mb-6">
            ‘Helaing holidays’ are on the rise tohelp maximise your health and
            happines...
          </p>
          <button className="text-[#FB8F1D] pl-3 hover:text-[#E85900]">
            Read more
          </button>
        </div>
        <div className="w-[280px] h-[540px] border-[0.8px] border-[solid] rounded-lg">
          <img src={Sun} alt="" className="object-contain rounded-t-lg" />
          <h3 className="text-[19px] font-bold leading-[30px] max-w-full pl-3 pr-5 mt-3 mb-3">
            The best Kyoto restaurant to try Japanese food
          </h3>
          <p className="text-[15px] leading-[26px] pl-3 pr-5 mb-6">
            From tofu to teahouses, here’s our guide to Kyoto’s best restaurants
            to visit...
          </p>
          <button className="text-[#FB8F1D] pl-3 hover:text-[#E85900]">
            Read more
          </button>
        </div>
        <div className="w-[280px] h-[540px] border-[0.8px] border-[solid] rounded-lg">
          <img src={Sun} alt="" className="object-contain rounded-t-lg" />
          <h3 className="text-[19px] font-bold leading-[30px] max-w-full pl-3 pr-5 mt-3 mb-3">
            Skip Chichen Itza and head to this remote Yucatan y
          </h3>
          <p className="text-[15px] leading-[26px] pl-3 pr-5 mb-6">
            It’s remote and challenging to get, but braving the jungle and
            exploring these ruins without the...
          </p>
          <button className="text-[#FB8F1D] pl-3 hover:text-[#E85900]">
            Read more
          </button>
        </div>
        <div className="w-[280px] h-[540px] border-[0.8px] border-[solid] rounded-lg">
          <img src={Sun} alt="" className="object-contain rounded-t-lg" />
          <h3 className="text-[19px] font-bold leading-[30px] max-w-full pl-3 pr-5 mt-3 mb-3">
            Surf’s up at these beginner spots around the world
          </h3>
          <p className="text-[15px] leading-[26px] pl-3 pr-5 mb-6">
            If learning to surf has in on your to- do list for a while, the good
            news is: it’s never too late...
          </p>
          <button className="text-[#FB8F1D] pl-3 hover:text-[#E85900]">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionCompSix;
