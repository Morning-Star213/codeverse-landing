import React from "react";
import Link from "next/link";

const DropNav = ({ setIsDropdownNavbar }: { setIsDropdownNavbar: any }) => {
  return (
    <div className="fixed left-0 w-full h-screen flex flex-col justify-center items-center z-40 bg-[#2E2E2E] bg-opacity-85 text-center">
      <Link
        href="/#home"
        className="py-2 text-3xl hover:text-theme text-white font-semibold transition ease-in duration-400"
        onClick={() => setIsDropdownNavbar(false)}
      >
        Home
      </Link>
      <Link
        href="/#about"
        className="py-2 text-3xl hover:text-theme text-white font-semibold transition ease-in duration-400"
        onClick={() => setIsDropdownNavbar(false)}
      >
        ABout
      </Link>
      <Link
        href="/#skills"
        className="py-2 text-3xl hover:text-theme text-white font-semibold transition ease-in duration-400"
        onClick={() => setIsDropdownNavbar(false)}
      >
        Skills
      </Link>
      <Link
        href="/#portfolio"
        className="py-2 text-3xl hover:text-theme text-white font-semibold transition ease-in duration-400"
        onClick={() => setIsDropdownNavbar(false)}
      >
        Portfolio
      </Link>
    </div>
  );
};

export default DropNav;
