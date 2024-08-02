import React from "react";
import Image from "next/image";

const Img = ({ hover }: { hover: boolean }) => {
  return (
    <div className="pr-[24px] flex">
      <Image
        src={hover ? "image/arrow.svg" : "image/arrow1.svg"}
        alt="Logo"
        width={30}
        height={30}
        priority
      />
    </div>
  );
};

export default Img;
