import { useState } from "react";

function ProjectItem({ item }) {
  const [flip, setFlip] = useState("");
  const { id, image, title, description, bgImg } = item;
  return (
    <div
      className="h-[350px] w-[90%] sm:w-[45%] lg:w-1/3 rounded-md bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
      onMouseEnter={() => setFlip(id)}
      onMouseLeave={() => setFlip("")}
    >
      <div
        className={`${
          flip === id ? "bg-sub" : "bg-sub/40"
        } p-4 h-full rounded-md`}
      >
        {flip === id && (
          <div className="text-center flex items-center animate-fade h-full">
            <div>
              <h2 className="text-3xl font-semibold text-prime">{title}</h2>
              <p className="py-4 text-prime text-lg font-medium font-mono">
                {description}
              </p>
              <button className="py-2 px-5 border border-prime rounded-md capitalize text-md font-semibold text-prime hover:bg-prime hover:text-sub">
                visit project
              </button>
            </div>
          </div>
        )}
        {flip !== id && (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        )}
      </div>
    </div>
  );
}

export default ProjectItem;
