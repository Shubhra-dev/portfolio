import { useSelector } from "react-redux";

function NavItem({ title, onClick }) {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <div className="w-full lg:w-1/4 text-center pb-2 lg:pb-0 text-md lg:text-xl">
      <h3
        onClick={onClick}
        className={`group font-semibold ${
          darkTheme ? "hover:text-gray-300" : "hover:text-gray-600"
        } cursor-pointer`}
      >
        <span className="hidden group-hover:inline text-sub">{"{"}</span>
        {title}
        <span className="hidden group-hover:inline text-sub">{"}"}</span>
      </h3>
    </div>
  );
}

export default NavItem;
