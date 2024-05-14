import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaSquareUpwork,
} from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import Button from "./Button";
import ConatctItem from "./ConatctItem";
import { TbBrandFiverr } from "react-icons/tb";
import { useSelector } from "react-redux";

function Contact() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <div
      className={`w-5/6 m-auto py-6 ${darkTheme ? "text-prime" : ""}`}
      id="contact"
    >
      <h1 className="text-center uppercase text-[40px] font-black pb-2">
        Contact
      </h1>
      <div className="w-max m-auto py-[3px] px-5 bg-sub rounded-md"></div>
      <div className="py-6">
        <h2 className="text-center text-2xl font-semibold py-2">
          Submit your <span className="text-sub">email address</span> here & I
          will conatct you
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-4 justify-center px-2">
          <input
            placeholder="eg:your@mail.com"
            type="email"
            name="mail"
            id="mail"
            className={`${
              darkTheme ? "bg-prime/30" : ""
            } text-lg font-mono border-2 border-sub rounded-md py-2.5 px-2 w-full md:w-2/4 lg:w-1/4`}
          />
          <Button>Submit</Button>
        </div>
        <h2 className="text-center text-2xl font-semibold pt-6">
          Or <span className="text-sub">connect</span> me on
        </h2>
        <div className="w-fulll lg:w-4/6 m-auto flex items-center gap-4 justify-center flex-wrap px-2 py-3">
          <ConatctItem
            dark={darkTheme}
            title={"GitHub"}
            link={"https://github.com/Shubhra-dev"}
          >
            <FaGithub className="text-3xl" />
          </ConatctItem>
          <ConatctItem
            dark={darkTheme}
            title={"LinkedIn"}
            link={"https://www.linkedin.com/in/shuvs/"}
          >
            <FaLinkedin className="text-3xl" />
          </ConatctItem>
          <ConatctItem
            dark={darkTheme}
            title={"Facebook"}
            link={"https://www.facebook.com/shuuvro.dev/"}
          >
            <FaFacebook className="text-3xl" />
          </ConatctItem>
          <ConatctItem
            dark={darkTheme}
            title={"Fiverr"}
            link={"https://www.fiverr.com/shubhra_dev"}
          >
            <TbBrandFiverr className="text-3xl" />
          </ConatctItem>
          <ConatctItem
            dark={darkTheme}
            title={"Upwork"}
            link={"https://www.upwork.com/freelancers/~0109882fbce57dfddc"}
          >
            <FaSquareUpwork className="text-3xl" />
          </ConatctItem>
          <ConatctItem
            dark={darkTheme}
            title={"shuuvro.dev@gmail.com"}
            link={
              "https://mail.google.com/mail/?view=cm&fs=1&to=shuuvro.dev@gmail.com&su=GREETINGS!!"
            }
          >
            <SiGmail className="text-3xl" />
          </ConatctItem>
        </div>
      </div>
    </div>
  );
}

export default Contact;
