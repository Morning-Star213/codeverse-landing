"use client";
import React, { useState } from "react";
import Image from "next/image";
import Nav from "./nav";
import Icon from "./icon";
import Link from "next/link";
import DropNav from "./dropNav";

const Header = () => {
  const [isDropdownNavbar, setIsDropdownNavbar] = useState<boolean>(false);
  return (
    <div className="fixed w-full h-[70px] bg-[#2E2E2E] bg-opacity-85 z-50 lg:flex flex justify-between lg:px-0 px-[80px]">
      <div className="lg:pl-[195px] flex my-auto">
        <Link href="/#home">
          <Image
            src="codeverse.svg"
            alt="Logo"
            className="hover:cursor-pointer"
            width={117}
            height={41}
            priority
          />
        </Link>
      </div>
      <Icon />
      <Nav />
      {isDropdownNavbar && (
        <DropNav setIsDropdownNavbar={setIsDropdownNavbar} />
      )}
      <div className="flex">
        <button
          className="lg:hidden"
          onClick={() => setIsDropdownNavbar(!isDropdownNavbar)}
        >
          <svg
            className="w-6 h-6 text-white hover:text-blue-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
