import React from "react";
import stars from "../../src/assets/stars.svg";
import next from "../../src/assets/next.svg";
import previous from "../../src/assets/previous_2.svg";

const SectionCompFive = () => {
  return (
    <div className="flex justify-between container mx-auto mb-[50px]">
      <div>
        <h2 className="text-[36px] font-bold leading-[50px] mb-[145px]">
          Testimonials
        </h2>
        <img src={stars} alt="" />
        <p className="w-[480px] text-[24px] leading-[36px] mt-8 mb-[40px]">
          “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus
          ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis
          nec”
        </p>
        <h4 className="text-[22px] font-bold leading-[48px] ">
          Edward Newgate
        </h4>
        <p className="text-[]18px leading-[48px]">Founder Circle</p>
      </div>
      <div className="relative rounded-lg  w-[384px] h-[500px] bg-[url('../../src/assets/image_6.png')] mt-[110px] mr-[295px] bg-no-repeat bg-cover bg-center">
        <button className="flex justify-center gap-5 absolute rounded-tl-lg rounded-br-lg pl-2 top-[90.7%] right-[0%] bg-white w-[40%] border-[1px] border-[solid] border-[#F7F7F9]">
          <img
            className="border-[2px] rounded-[50px] border-black "
            src={previous}
            alt=""
          />
          <img className="w-[45px] hover:border-[#D7D7D7]" src={next} alt="" />
        </button>
      </div>
    </div>
  );
};

export default SectionCompFive;
