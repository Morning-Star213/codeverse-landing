import React from "react";
import Image from "next/image";

const Aboutus = () => {
  return (
    <div
      className=" pt-[116px] plx-0 sm:px-[50px] md:px-[90px] lg:px-[140px] xl:px-[189px] relative"
      id="about"
    >
      <div className="pb-[54px] text-[25px] md:text-[30px] ">/ ABOUT US</div>
      <div className="text-[15px] md:text-[20px] pb-[189px]">
        <div>
          Our back-end expertise spans{" "}
          <span className="textImage text-[15px] md:text-[20px]">Python</span>{" "}
          frameworks like{" "}
          <span className="textImage text-[15px] md:text-[20px]">
            Django, Flask, and FastAPI
          </span>
          , as well as{" "}
          <span className="textImage text-[15px] md:text-[20px]">Node.js</span>{" "}
          with Express and{" "}
          <span className="textImage text-[15px] md:text-[20px]">
            NestJS, PHP
          </span>{" "}
          with
          <span className="textImage text-[15px] md:text-[20px]">
            CodeIgniter, Laravel, and CakePHP, and C# with ASP.NET
          </span>
          . This diverse range of capabilities allows us to tackle complex
          server-side challenges and deliver robust, scalable, and secure
          applications.
        </div>
        <div className="py-[30px]">
          In the{" "}
          <span className="textImage text-[15px] md:text-[20px]">
            front-end
          </span>{" "}
          domain, we excel in building dynamic and responsive user interfaces
          using popular frameworks such as{" "}
          <span className="textImage text-[15px] md:text-[20px]">
            React, Angular, and Vue
          </span>
          . Our front-end developers are adept at crafting visually appealing
          and intuitive web experiences that engage users and drive business
          success.
        </div>
        <div>
          Recognizing the growing importance of{" "}
          <span className="textImage text-[15px] md:text-[20px]">
            blockchain technology
          </span>
          , Codeverse Technologies also offers specialized services in this
          domain. Our experts are well-versed in developing smart contracts,
          working with the{" "}
          <span className="textImage text-[15px] md:text-[20px]">
            Solana blockchain
          </span>
          , and leveraging{" "}
          <span className="textImage text-[15px] md:text-[20px]">Solidity</span>{" "}
          to create innovative decentralized applications.
        </div>
      </div>
      <div className=" grid">
        <div className=" absolute bottom-[-140px] right-[-80px] flex justify-end px-0 mx-0">
          <Image
            src="/image/circle2.svg"
            className=" max-w-[100%] h-auto px-0 mx-0"
            alt="portfolio"
            width={220}
            height={220}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
