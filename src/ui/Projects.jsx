import gro from "../assets/gro.jpg";
import grocery from "../assets/grocery.png";
import agri from "../assets/agri.jpg";
import pres from "../assets/agri.png";
import invest from "../assets/invest.jpg";
import fin from "../assets/image 2.png";
import zaka from "../assets/zaka.png";
import logo from "../assets/logo.png";
import ak from "../assets/ak.png";
import aksoft from "../assets/aksoft.jpg";
import ProjectItem from "./ProjectItem";
const project = [
  {
    id: "1",
    bgImg: gro,
    image: grocery,
    title: "E-Grocery",
    description:
      "Fully functional grocery e-commerce as an online grocery service provider",
  },
  {
    id: "2",
    bgImg: invest,
    image: fin,
    title: "Fintech",
    description:
      "Fully functional grocery e-commerce as an online grocery service provider",
  },
  {
    id: "3",
    bgImg: agri,
    image: pres,
    title: "Agri Prescription",
    description:
      "Prescription writing tool for agriculture specialist with huge database of agri medicines in bengali language.",
  },
  {
    id: "4",
    bgImg: zaka,
    image: logo,
    title: "Zakat Foundation",
    description:
      "Zakat Foundation helps Muslims in need by giving them food, clothing, a roof over their heads, skills for work, and education.",
  },
  {
    id: "5",
    bgImg: aksoft,
    image: ak,
    title: "Ak Software",
    link: "https://aksoftware.com.bd",
    description:
      "AK SOFTWARE is working with Tally Software in Bangladesh from 15 years, with having various categories of satisfied client around in Bangladesh.",
  },
];
function Projects() {
  return (
    <div className="w-5/6 m-auto py-6" id="projects">
      <h1 className="text-center uppercase text-[40px] font-black pb-2">
        Projects
      </h1>
      <div className="w-max m-auto py-[3px] px-5 bg-sub rounded-md"></div>
      <div className="py-8 flex justify-center items-center gap-8 flex-wrap">
        {project.map((item, index) => (
          <ProjectItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
