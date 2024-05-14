import { IoLink } from "react-icons/io5";

function ExperienceItem({ duration, name, role, dark }) {
  return (
    <div className="flex gap-2 pb-4">
      <div className="basis-[30%]">
        <h2
          className={`text-base font-medium ${
            dark ? "bg-prime/20" : "bg-sub/10"
          } h-max px-1 rounded-md sm:w-max`}
        >
          {duration}
        </h2>
      </div>
      <div className="font-semibold basis-[70%]">
        <h2 className="text-lg">
          {name} |
          <span className="px-2">
            <IoLink className="inline text-3xl hover:text-sub" />
          </span>
        </h2>
        <p className={`${dark ? "text-prime" : "text-black/60"}`}>{role}</p>
      </div>
    </div>
  );
}

export default ExperienceItem;
