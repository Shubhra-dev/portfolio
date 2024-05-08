import About from "./About";
import Hero from "./Hero";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <div className="w-5/6 m-auto py-6" id="projects">
        <h1 className="text-center uppercase text-[40px] font-black pb-2">
          Projects
        </h1>
        <div className="w-max m-auto py-[3px] px-5 bg-sub rounded-md"></div>
      </div>
    </>
  );
}

export default Home;
