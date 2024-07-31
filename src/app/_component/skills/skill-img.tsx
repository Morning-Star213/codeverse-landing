import React from "react";
import Image from "next/image";

const Img = () => {
  return (
    <div className="pr-[24px] flex">
      <Image
        src="\image\arrow.svg"
        alt="Logo"
        width={30}
        height={30}
        priority
      />
    </div>
  );
};

export default Img;
