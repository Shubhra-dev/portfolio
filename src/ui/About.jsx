import { useSelector } from "react-redux";
import ExperienceItem from "./ExperienceItem";
import SkillItem from "./SkillItem";
function About() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <div
      id="about"
      className={`w-5/6 m-auto py-6 ${darkTheme ? "text-prime" : ""}`}
    >
      <h1 className="text-center uppercase text-[40px] font-black pb-2">
        about me
      </h1>
      <div className="w-max m-auto py-[3px] px-5 bg-sub rounded-md"></div>
      <p className="text-lg font-medium py-6 text-center">
        Greetings, I am Shubhradev Chakrabarty, a committed front-end developer
        with a fervent dedication to crafting exceptional web applications. My
        primary expertise lies in
        <span className=" text-sub"> ReactJs </span>
        and <span className=" text-sub">Tailwind CSS</span>, enabling me to
        deliver impeccable user interfaces that harmoniously balance aesthetics
        and functionality.
      </p>
      <div className="sm:flex items-start py-8">
        <div className="sm:basis-1/2 px-4">
          <h2 className="text-center sm:text-left text-2xl font-semibold text-sub pb-4">
            Experiences
          </h2>
          <ExperienceItem
            duration={"Aug '23 - Present"}
            name={"OSCORP IT"}
            role={"Frontend Developer"}
            dark={darkTheme}
          />
          <ExperienceItem
            duration={"Feb '22 - Feb '23"}
            name={"ShortStay Solutions"}
            role={"Web & Shiny Developer"}
            dark={darkTheme}
          />
          <ExperienceItem
            duration={"Feb '18 - Present"}
            name={"AK Software"}
            role={"Web Designer & Developer (Freelance)"}
            dark={darkTheme}
          />
        </div>
        <div className="basis-[50%] px-4">
          <h2 className="text-2xl font-semibold text-sub pb-4 text-center sm:text-left">
            My Skills
          </h2>
          <div className="flex gap-4 flex-wrap justify-center sm:justify-normal pb-4">
            <SkillItem dark={darkTheme} text={"ReactJs"} />
            <SkillItem dark={darkTheme} text={"Redux"} />
            <SkillItem dark={darkTheme} text={"Tailwind CSS"} />
            <SkillItem dark={darkTheme} text={"JavaScript"} />
            <SkillItem dark={darkTheme} text={"WordPress Design"} />
            <SkillItem dark={darkTheme} text={"Elementor"} />
            <SkillItem dark={darkTheme} text={"HTML5"} />
            <SkillItem dark={darkTheme} text={"CSS3"} />
            <SkillItem dark={darkTheme} text={"Python"} />
            <SkillItem dark={darkTheme} text={"C Programming"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
