import React, { useEffect } from "react";
import Image from "next/image";
import Icon from "./icon";
import Link from "next/link";
import Submit from "../submit/submit";

const Footer = ({
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
    <div className="pt-[30px] bg-[#2E2E2E]" id={id}>
      <div className="pb-10">
        <Submit />
      </div>
      <div className="w-full px-4 h-[70px] bg-[#2E2E2E] bg-opacity-85 z-50 flex justify-between">
        <div className="lg:px-[71px] px-4 flex my-auto">
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
        <div className=" flex my-auto">
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
