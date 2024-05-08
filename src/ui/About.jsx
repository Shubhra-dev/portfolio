import ExperienceItem from "./ExperienceItem";
import SkillItem from "./SkillItem";
function About() {
  return (
    <div id="about" className="w-5/6 m-auto py-6">
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
          />
          <ExperienceItem
            duration={"Feb '22 - Feb '23"}
            name={"ShortStay Solutions"}
            role={"Web & Shiny Developer"}
          />
          <ExperienceItem
            duration={"Feb '18 - Present"}
            name={"AK Software"}
            role={"Web Designer & Developer (Freelance)"}
          />
        </div>
        <div className="basis-[50%] px-4">
          <h2 className="text-2xl font-semibold text-sub pb-4 text-center sm:text-left">
            My Skills
          </h2>
          <div className="flex gap-4 flex-wrap justify-center sm:justify-normal pb-4">
            <SkillItem text={"ReactJs"} />
            <SkillItem text={"Redux"} />
            <SkillItem text={"Tailwind CSS"} />
            <SkillItem text={"JavaScript"} />
            <SkillItem text={"WordPress Design"} />
            <SkillItem text={"Elementor"} />
            <SkillItem text={"HTML5"} />
            <SkillItem text={"CSS3"} />
            <SkillItem text={"Python"} />
            <SkillItem text={"C Programming"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
