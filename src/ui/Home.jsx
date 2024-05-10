import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaSquareUpwork,
} from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import About from "./About";
import Button from "./Button";
import Hero from "./Hero";
import Projects from "./Projects";
import ConatctItem from "./ConatctItem";
import { TbBrandFiverr } from "react-icons/tb";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <div className="w-5/6 m-auto py-6" id="contact">
        <h1 className="text-center uppercase text-[40px] font-black pb-2">
          Contact
        </h1>
        <div className="w-max m-auto py-[3px] px-5 bg-sub rounded-md"></div>
        <div className="py-6">
          <h2 className="text-center text-2xl font-semibold py-2">
            Submit your email address here & I will conatct you
          </h2>
          <div className="flex items-center gap-4 justify-center px-2">
            <input
              placeholder="eg:your@mail.com"
              type="email"
              name="mail"
              id="mail"
              className="text-lg font-mono border-2 border-sub rounded-md py-2.5 px-2 w-1/4"
            />
            <Button>Submit</Button>
          </div>
          <h2 className="text-center text-2xl font-semibold pt-6">
            Also connect me on
          </h2>
          <div className="w-4/6 m-auto flex items-center gap-4 justify-center flex-wrap px-2 py-3">
            <ConatctItem title={"GitHub"}>
              <FaGithub className="text-3xl" />
            </ConatctItem>
            <ConatctItem title={"LinkedIn"}>
              <FaLinkedin className="text-3xl" />
            </ConatctItem>
            <ConatctItem title={"Facebook"}>
              <FaFacebook className="text-3xl" />
            </ConatctItem>
            <ConatctItem title={"Gmail"}>
              <SiGmail className="text-3xl" />
            </ConatctItem>
            <ConatctItem title={"Fiverr"}>
              <TbBrandFiverr className="text-3xl" />
            </ConatctItem>
            <ConatctItem title={"Upwork"}>
              <FaSquareUpwork className="text-3xl" />
            </ConatctItem>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
