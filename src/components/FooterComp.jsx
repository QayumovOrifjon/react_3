import React from "react";
import SiteLogo from "../../src/assets/SiteLogo.svg";
import social_media from "../../src/assets/social_media.svg";

const FooterComp = () => {
  return (
    <div className="bg-[#F9F9FB] h-[100%]">
      <div className="flex justify-between items-center container mx-auto gap-[120px]">
        <div>
          <img
            className="border-[15px] border-[#51B084]  border-[solid] rounded-[50%] mt-[78px] mb-[26px] "
            src={SiteLogo}
            alt=""
          />
          <p className="w-[391px] text-[18px] font-[300] leading-[28px] mb-[55px]">
            Plan and book your perfect trip with expert advice, travel tips
            destination information from us
          </p>
          <p className="w-[391px] text-[18px] font-[300] leading-[28px] mb-[55px]">
            ©2020 Thousand Sunny. All rights reserved
          </p>
        </div>
        <div className="flex gap-[250px] ">
          {" "}
          <nav>
            <ul>
              <li className="text-[19px] font-bold leading-[60px]">
                Destinations
              </li>
              <li className="text-[18px] font-light leading-[38px] cursor-pointer">
                Africa
              </li>
              <li className="text-[18px] font-light leading-[38px] cursor-pointer">
                Antarctica
              </li>
              <li className="text-[18px] font-light leading-[38px] cursor-pointer">
                Asia
              </li>
              <li className="text-[18px] font-light leading-[38px] cursor-pointer">
                Europe
              </li>
              <li className="text-[18px] font-light leading-[38px] cursor-pointer">
                America
              </li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li className="text-[19px] font-bold leading-[60px]">Shop</li>
              <li className="text-[18px] font-light leading-[38px] cursor-pointer">
                Destination Guides
              </li>
              <li className="text-[18px] font-light leading-[38px] cursor-pointer">
                Pictorial & Gifts
              </li>
              <li className="text-[18px] font-light leading-[38px] cursor-pointer">
                Special Offers
              </li>
              <li className="text-[18px] font-light leading-[38px] cursor-pointer">
                Delivery Times
              </li>
              <li className="text-[18px] font-light leading-[38px] cursor-pointer">
                FAQs
              </li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li className="text-[19px] font-bold leading-[60px]">
                Interests
              </li>
              <li className="text-[18px] font-light leading-[38px] cursor-pointer">
                Adventure Travel
              </li>
              <li className="text-[18px] font-light leading-[38px] cursor-pointer">
                Art And Culture
              </li>
              <li className="text-[18px] font-light leading-[38px] cursor-pointer">
                Wildlife And Nature
              </li>
              <li className="text-[18px] font-light leading-[38px] cursor-pointer">
                Family Holidays
              </li>
              <li className="text-[18px] font-light leading-[38px] cursor-pointer">
                Food And Drink
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <hr className="container mx-auto border mb-5" />
      <img className="flex mx-auto my-8 mb-10px" src={social_media} alt="" />
      <p className="text-[#F9F9FB]">a</p>
    </div>
  );
};

export default FooterComp;
