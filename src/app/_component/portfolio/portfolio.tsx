"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import pf_data from "./pf-data";

const Portfolio = ({
  id,
  setActiveSection,
}: {
  id: string;
  setActiveSection: (id: string) => void;
}) => {
  const [more, setMore] = useState<any>(null);

  useEffect(() => {
    const sectionElement = document.getElementById(id);
    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(sectionElement);

    return () => {
      observer.unobserve(sectionElement);
    };
  }, [id, setActiveSection]);

  return (
    <div id={id} className=" relative">
      <div className=" absolute top-[100px] left-[-80px] -z-10">
        <Image
          src="/image/circle3.svg"
          alt="portfolio"
          width={200}
          height={200}
          priority
        />
      </div>

      <div className="pb-[49px] xl:pl-[145px] lg:pl-[75px] md:pl-[60px] sm:pl-[30px] pl-0  text-[25px] md:text-[31.11px] pt-[120px] sm:pt-[90px] lg:pt-[110px] xl:pt-[160px]">
        / PORTFOLIO
      </div>
      <div className="flex flex-row flex-wrap justify-center pb-8">
        {pf_data.map((val, index) => {
          return (
            <div
              className="bg-[#2E2E2E] mx-[20px] my-[22px] px-[30px] md:px-[50px] xl:px-[50px] lg:px-[30px] pt-[21px] sm:pt-[31px] w-[543px] sm:w-[430px] md:w-[543px] lg:w-[330px] xl:w-[430px] 2xl:w-[543px]"
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
                <div className="flexflex-col sm:m-0">
                  <div className="text-[15px] sm:text-[25px] md:text-[30px] lg:text-[23px] xl:text-[25px] 2xl:text-[30px] pt-2 sm:pt-4 pb-[12px] sm:pb-[14px] flex">
                    {val.title}
                  </div>
                  <div className=" text-[9px] sm:flex pb-10 md:text-[16px] lg:text-[9px] xl:text-[12px] 2xl:text-[16px]">
                    {val.text}
                  </div>
                </div>
                <div
                  className="scale-[0.7] sm:flex xl:scale-[0.8] 2xl:scale-100 hover:cursor-pointer"
                  onMouseEnter={() => setMore(index)}
                  onMouseLeave={() => setMore(null)}
                >
                  <Image
                    src={more == index ? "/image/btn2.svg" : "/image/btn1.svg"}
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
      <div className="text-[#959393] pb-[80px] flex flex-col m-auto "></div>
    </div>
  );
};

export default Portfolio;
