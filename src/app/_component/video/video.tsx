import React from "react";

const Video = () => {
  return (
    <div className="pt-[70px] sm:pt-[90px] lg:pt-[110px] xl:pt-[160px]">
      <div className="xl:pl-[190px] lg:pl-[110px] md:pl-[90px] sm:pl-[50px] pl-5 xl:pr-[60px] lg:pr-[35px] md:pr-[30px] sm:pr-[30px] pr-5">
        <video controls width="1500">
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Video;
