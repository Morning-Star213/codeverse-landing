"use client";
import React, { useState } from "react";
import Image from "next/image";

const Codeverse = () => {
  const [contact, setContact] = useState<boolean>(false);
  return (
    <div className="pt-[130px]">
      <div id="home">
        {/* //xl:text-[90px] lg:text-[60px] sm:text-[80px] text-[70px] */}
        <div className="md:justify-normal justify-center xl:text-[152px] lg:text-[100px] md:text-[70px] sm:text-[60px] text-[80px] xl:leading-[130px] lg:leading-[100px] md:leading-[60px] sm:leading-[55px] leading-[70px] font-black flex textImage ">
          CODEVERSE
        </div>
        <div className="md:justify-normal justify-center flex xl:text-[104px] lg:text-[70px] md:text-[50px] sm:text-[35px] text-[35px] xl:pl-[450px] lg:pl-[320px] md:pl-[220px]  xl:leading-[110px] lg:leading-[90px] font-black textImage ">
          TECHNOLOGIES
        </div>
        <div className="xl:text-[20px] lg:text-[15px] md:text-[10px] sm:text-[13px] xl:pl-[145px] lg:pl-[75px] md:pl-[60px] md:text-left text-center md:justify-normal justify-center sm:flex hidden">
          <div className="xl:w-[300px] lg:w-[250px] md:w-[150px] sm:w-[450px] absolute xl:top-[290px] lg:top-[250px] md:top-[215px] sm:top-[260px]">
            We are a leading software development company that specializes in
            providing cutting-edge solutions across a wide range of
            technologies.
          </div>
          <div className="xl:ml-[265px] lg:ml-[165px] md:ml-[137px] xl:top-[410px] lg:top-[340px] md:top-[275px] sm:top-[320px] xl:w-[830px] lg:w-[630px] md:w-[430px] sm:w-[450px] absolute">
            With a team of highly skilled and experienced professionals, we
            offer comprehensive services in back-end development, front-end
            development, and blockchain technology.
          </div>
        </div>

        <div className="absolute left-[0px]">
          <Image
            src="/image/circle1.svg"
            alt="portfolio"
            width={220}
            height={220}
            priority
          />
        </div>
        <div className="flex justify-center sm:pt-[187px] md:pt-[100px] xl:pt-[170px] pt-[40px]">
          <div className=" scale-75 md:scale-100">
            <Image
              src={contact ? "/image/contactus2.svg" : "/image/contactus1.svg"}
              alt="contactus"
              className="hover:cursor-pointer"
              width={284}
              height={55}
              onMouseEnter={() => setContact(true)}
              onMouseLeave={() => setContact(false)}
              priority
            />
          </div>
        </div>
        <div className="flex justify-center pt-[35px]">∨</div>
      </div>
    </div>
  );
};

export default Codeverse;
