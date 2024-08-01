import Image from "next/image";
import Portfolio from "./_component/portfolio/portfolio";
import Skills from "./_component/skills/skills";
import Aboutus from "./_component/aboutus/aboutus";
import Codeverse from "./_component/home/codeverse";
import Experience from "./_component/experience/experience";
import Video from "./_component/video/video";

export default function Home() {
  return (
    <div>
      <Codeverse />
      {/* <Aboutus /> */}
      <Experience />
      <Skills />
      <Video />
      <Portfolio />
    </div>
  );
}
