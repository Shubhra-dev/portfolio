import hero from "../assets/hero.png";
import { GoDotFill } from "react-icons/go";
import Button from "./Button";
function Hero() {
  return (
    <div className="flex flex-col text-center lg:text-left lg:flex-row lg:flex items-center justify-center w-5/6 m-auto py-6">
      <div className="lg:basis-[55%]">
        <div className="bg-sub/20 p-2 flex capitalize gap-2 w-max rounded-md items-center m-auto lg:m-0">
          <GoDotFill className=" text-green-600" />
          <h4 className="font-semibold">online</h4>
        </div>
        <h2 className="text-2xl sm:text-[32px] laptop:text-5xl font-black py-6">
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
          <Button>projects</Button>
          <Button>Experience</Button>
        </div>
      </div>
      <div className="md:basis-[30%] lg:basis-[45%] px-2">
        <img src={hero} alt="hero" className="object-cover object-top w-full" />
      </div>
    </div>
  );
}

export default Hero;
