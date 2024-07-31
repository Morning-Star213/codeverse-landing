"use client";
import React, { useState } from "react";
import Image from "next/image";

const Icon = () => {
  const [cam, setCam] = useState<boolean>(false);
  const [f, setF] = useState<boolean>(false);
  const [m, setM] = useState<boolean>(false);
  return (
    <div className="m-auto gap-6 hidden lg:flex">
      <Image
        src={cam ? "/image/cam2.svg" : "/image/cam1.svg"}
        alt="Logo"
        width={20}
        height={20}
        className=" hover:cursor-pointer"
        priority
        onMouseEnter={() => setCam(true)}
        onMouseLeave={() => setCam(false)}
      />
      <Image
        src={f ? "/image/f2.svg" : "/image/f1.svg"}
        alt="Logo"
        width={10}
        height={10}
        className=" hover:cursor-pointer"
        priority
        onMouseEnter={() => setF(true)}
        onMouseLeave={() => setF(false)}
      />
      <Image
        src={m ? "/image/m2.svg" : "/image/m1.svg"}
        alt="Logo"
        width={15}
        height={15}
        className=" hover:cursor-pointer"
        priority
        onMouseEnter={() => setM(true)}
        onMouseLeave={() => setM(false)}
      />
    </div>
  );
};

export default Icon;
