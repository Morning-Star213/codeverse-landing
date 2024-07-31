import React from "react";
import Image from "next/image";
import Icon from "./icon";
import Link from "next/link";
import Submit from "../submit/submit";

const Footer = () => {
  return (
    <div className="pt-[30px] bg-[#2E2E2E]">
      <div className="pb-10">
        <Submit />
      </div>
      <div className=" flex justify-between pb-10 pr-24">
        <div className="pl-[118px] flex my-auto ">
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
        <div className="flex justify-end">
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
