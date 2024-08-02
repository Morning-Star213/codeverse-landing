"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Codeverse = ({
  id,
  setActiveSection,
}: {
  id: string;
  setActiveSection: (id: string) => void;
}) => {

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
    <div className="pt-[150px]">
      <div id={id}>
        <div className="md:justify-normal xl:text-[152px] lg:text-[100px] md:text-[70px] sm:text-[75px] text-[50px] xl:leading-[130px] lg:leading-[100px] md:leading-[60px] sm:leading-[60px] leading-[70px] font-black flex textImage ">
          CODEVERSE
        </div>
        <div className="md:justify-normal  flex xl:text-[104px] lg:text-[70px] md:text-[50px] sm:text-[45px] text-[37px] xl:pl-[450px] lg:pl-[320px] md:pl-[220px] sm:pl-[220px]  xl:leading-[110px] lg:leading-[90px] font-black textImage ">
          TECHNOLOGIES
        </div>
        <div className="xl:text-[20px] lg:text-[15px] md:text-[10px] sm:text-[9px] text-[8px] xl:pl-[145px] lg:pl-[75px] md:pl-[50px] sm:pl-[60px] md:text-left">
          <div className="xl:w-[300px] lg:w-[250px] md:w-[150px] sm:w-[155px] w-[137px] absolute xl:top-[390px] lg:top-[350px] md:top-[315px] sm:top-[305px] top-[360px] ml-[27px] sm:ml-0">
            We are a leading software development company that specializes in
            providing cutting-edge solutions across a wide range of
            technologies.
          </div>
          <div className="xl:ml-[265px] lg:ml-[165px] md:ml-[137px] sm:ml-[70px] ml-[95px] xl:top-[510px] lg:top-[440px] md:top-[375px] sm:top-[360px] top-[410px] xl:w-[830px] lg:w-[630px] md:w-[430px] sm:w-[450px] w-[220px] absolute">
            With a team of highly skilled and experienced professionals, we
            offer comprehensive services in back-end development, front-end
            development, and blockchain technology.
          </div>
        </div>

        <div className="absolute -z-50 left-[0px]">
          <Image
            src="/image/circle1.svg"
            alt="portfolio"
            width={220}
            height={220}
            priority
          />
        </div>
        <div className="flex justify-center sm:pt-[187px] md:pt-[100px] xl:pt-[170px] pt-[50px]"></div>
        <div className="sm:hidden flex justify-center pt-[140px] text-gray-400 hover:cursor-pointer hover:text-white">
          <Link href={"/#contact"}>∨ </Link>
        </div>
      </div>
    </div>
  );
};

export default Codeverse;
