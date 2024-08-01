// "use client";
import Link from "next/link";
import React, { useState } from "react";

const Nav = () => {
  // const [home, setHome] = useState<boolean>(true);
  // const [about, setAbout] = useState<boolean>(false);
  // const [skills, setSkills] = useState<boolean>(false);
  // const [portfolio, setPortfolio] = useState<boolean>(false);
  return (
    <div className="lg:flex hidden my-auto pr-[80px]">
      <div className="text-[#959393] flex gap-3 text-[18px]">
        <div
          // className={`${home ? "text-white" : ""} hover:cursor-pointer`}
          // onClick={() => {
          //   setHome(true);
          //   setAbout(false);
          //   setPortfolio(false);
          //   setSkills(false);
          // }}
          className="hover:cursor-pointer text-white hover:scale-y-[1.01] transition delay-100"
        >
          <Link href="/#home">Home</Link>
        </div>
        <span className="">/</span>
        <div
          // className={`${
          //   about ? "text-white" : ""
          // } hover:cursor-pointer hover:text-white`}
          // onClick={() => {
          //   setHome(false);
          //   setAbout(true);
          //   setPortfolio(false);
          //   setSkills(false);
          // }}
          className="hover:cursor-pointer hover:text-white hover:scale-y-[1.01] transition delay-100"
        >
          <Link href="/#contact">Contact</Link>
        </div>
        <span className="">/</span>
        <div
          // className={`${
          //   skills ? "text-white" : ""
          // } hover:cursor-pointer  hover:text-white`}
          // onClick={() => {
          //   setHome(false);
          //   setAbout(false);
          //   setSkills(true);
          //   setPortfolio(false);
          // }}
          className="hover:cursor-pointer hover:text-white hover:scale-y-[1.01] transition delay-100"
        >
          <Link href="/#skills">Skills</Link>
        </div>
        <span className="">/</span>
        <div
          // className={`${
          //   portfolio ? "text-white" : ""
          // } hover:cursor-pointer  hover:text-white`}
          // onClick={() => {
          //   setHome(false);
          //   setAbout(false);
          //   setSkills(false);
          //   setPortfolio(true);
          // }}
          className="hover:cursor-pointer hover:text-white hover:scale-y-[1.01] transition delay-100"
        >
          <Link href="/#portfolio">Portfolio</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
