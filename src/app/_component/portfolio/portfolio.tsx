import React from "react";
import Image from "next/image";
import pf_data from "./pf-data";
const Portfolio = () => {
  return (
    <div id="portfolio" className=" relative">
      <div className=" absolute top-[100px] left-[-80px] -z-10">
        <Image
          src="/image/circle3.svg"
          alt="portfolio"
          width={200}
          height={200}
          priority
        />
      </div>

      <div className="pb-[54px] xl:pl-[145px] lg:pl-[75px] md:pl-[60px] sm:pl-[30px] pl-0  text-[25px] md:text-[31.11px] pt-[70px] sm:pt-[90px] lg:pt-[110px] xl:pt-[160px]">
        / PORTFOLIO
      </div>
      <div className="flex flex-row flex-wrap justify-center pb-8">
        {pf_data.map((val, index) => {
          return (
            <div
              className="bg-[#2E2E2E] mx-[20px] my-[22px] px-[30px] md:px-[50px] pt-[21px] sm:pt-[31px] w-[543px] sm:w-[430px] md:w-[543px] xl:w-[430px] 2xl:w-[543px]"
              key={index}
            >
              <div className="flex justify-center">
                <Image
                  src={val.img}
                  alt="portfolio"
                  width={444}
                  height={253}
                  priority
                />
              </div>
              <div className="flex justify-between relative">
                <div className="flex flex-col m-auto sm:m-0">
                  <div className="text-[20px] sm:text-[25px] md:text-[30px] xl:text-[25px] 2xl:text-[30px] pt-2 sm:pt-4 pb-[12px] sm:pb-[14px] flex">
                    {val.title}
                  </div>
                  <div className="hidden sm:flex pb-10 md:text-[16px] xl:text-[12px] 2xl:text-[16px]">
                    {val.text}
                  </div>
                </div>
                <div className="my-auto hidden sm:flex xl:scale-[0.8]  2xl:scale-100">
                  <Image
                    src="\image\btn1.svg"
                    alt="Arrow"
                    width={77}
                    height={77}
                    priority
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-[#959393] pb-[113px] flex flex-col m-auto ">
        <div className="flex flex-col m-auto hover:cursor-pointer hover:text-white hover:scale-y-[1.01] transition delay-100">
          See more
          <div className="flex flex-col m-auto">∨</div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
