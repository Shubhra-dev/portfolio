import hero from "../assets/hero.png";
import { GoDotFill } from "react-icons/go";
import Button from "./Button";
import scrollToTargetDiv from "../targetDiv";
import { useSelector } from "react-redux";
function Hero() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <div
      className={`${
        darkTheme ? "text-prime" : ""
      } flex flex-col text-center lg:text-left lg:flex-row lg:flex items-center justify-center w-5/6 m-auto py-6`}
    >
      <div className="lg:basis-[55%]">
        <div className="bg-sub/20 p-2 flex capitalize gap-2 w-max rounded-md items-center m-auto lg:m-0">
          <GoDotFill className=" text-green-600" />
          <h4 className="font-semibold">online</h4>
        </div>
        <h2 className="text-transparent text-2xl sm:text-[32px] laptop:text-5xl font-black py-6 gradient-text animate-grad">
          Myself Shubhradev Chakrabarty
        </h2>
        <h5 className="text-lg sm:text-xl font-medium pb-6">
          A result-Oriented
          <span className="text-sub font-bold"> Frontend Developer </span>
          building
          <span className="text-sub font-bold"> Web Applications</span> that
          leads to the success of the overall product
        </h5>
        <div className="flex items-center gap-4 w-max m-auto lg:m-0">
          <Button onClick={() => scrollToTargetDiv("projects")}>
            projects
          </Button>
          <Button onClick={() => scrollToTargetDiv("about")}>Experience</Button>
        </div>
      </div>
      <div className="md:basis-[30%] lg:basis-[45%] px-2 animate-fade">
        <img src={hero} alt="hero" className="object-cover object-top w-full" />
      </div>
    </div>
  );
}

export default Hero;
