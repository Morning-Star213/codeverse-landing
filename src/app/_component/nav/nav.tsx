import Link from "next/link";
import React from "react";

const Nav = ({ activeSection }: { activeSection: string }) => {
  return (
    <div className="fixed bg-[#3C3C3C] bg-opacity-75 text-center bottom-4 px-4 h-[50px] rounded-lg z-50">
      <div className="flex m-3">
        <div className="text-[#959393] flex gap-1 text-[16px]">
          <div
            className={`hover:cursor-pointer hover:text-white hover:scale-y-[1.01] ${
              activeSection === "home"
                ? "text-white underline"
                : "text-[#959393]"
            } transition delay-100`}
          >
            <Link href="/#home">Home</Link>
          </div>
          <span>/</span>
          <div
            className={`hover:cursor-pointer hover:text-white hover:scale-y-[1.01] ${
              activeSection === "skills"
                ? "text-white underline"
                : "text-[#959393]"
            } transition delay-100`}
          >
            <Link href="/#skills">Skills</Link>
          </div>
          <span>/</span>
          <div
            className={`hover:cursor-pointer hover:text-white hover:scale-y-[1.01] ${
              activeSection === "portfolio"
                ? "text-white underline"
                : "text-[#959393]"
            } transition delay-100`}
          >
            <Link href="/#portfolio">Portfolio</Link>
          </div>
          <span>/</span>
          <div
            className={`hover:cursor-pointer hover:text-white hover:scale-y-[1.01] ${
              activeSection === "contact"
                ? "text-white underline"
                : "text-[#959393]"
            } transition delay-100`}
          >
            <Link href="/#contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
