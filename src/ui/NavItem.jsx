function NavItem({ title, onClick }) {
  return (
    <h3
      onClick={onClick}
      className="group pb-2 lg:pb-0 text-md lg:text-xl font-semibold w-full lg:w-1/4 hover:text-gray-600 text-center cursor-pointer"
    >
      <span className="hidden group-hover:inline text-sub">{"{"}</span>
      {title}
      <span className="hidden group-hover:inline text-sub">{"}"}</span>
    </h3>
  );
}

export default NavItem;
