import React from "react";
import Image from "next/image";

const Experience = () => {
  return (
    <div
      className="pt-[56px] sm:pt-[76px] md:pt-[90px] lg:pt-[116px] xl:pl-[145px] lg:pl-[75px] md:pl-[60px] sm:pl-[30px] pl-0 relative"
      id="experience"
    >
      <div className="pb-[54px] text-[25px] md:text-[30px] ">
        / OUR EXPERIENCE
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:pr-[40px]">
        <div className="pb-1">
          <div className="xl:text-[90px] lg:text-[60px] sm:text-[80px] text-[70px] leading-[60px] sm:leading-[100px] lg:leading-[80px] xl:leading-[100px] text-center textImage font-black">
            $200K
          </div>
          <div className="xl:text-[20px] text-[12px] text-center">
            customer profit
          </div>
        </div>
        <div className="pb-1">
          <div className="xl:text-[90px] lg:text-[60px] sm:text-[80px] text-[70px] leading-[60px] sm:leading-[100px] lg:leading-[80px] xl:leading-[100px] text-center textImage font-black">
            865
          </div>
          <div className="xl:text-[20px] text-[12px] text-center">
            projects complete
          </div>
        </div>
        <div className="pb-1">
          <div className="xl:text-[90px] lg:text-[60px] sm:text-[80px] text-[70px] leading-[60px] sm:leading-[100px] lg:leading-[80px] xl:leading-[100px] text-center textImage font-black">
            10
          </div>
          <div className="xl:text-[20px] text-[12px] text-center">
            years of experience
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
