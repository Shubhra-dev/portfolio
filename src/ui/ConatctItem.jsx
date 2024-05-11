function ConatctItem({ children, title, link }) {
  return (
    <div
      onClick={() => window.open(link, "_blank")}
      className="flex items-center gap-4 px-5 bg-sub/20 rounded-md py-3 hover:text-sub cursor-pointer"
    >
      {children}
      <h2 className="text-2xl font-semibold font-mono">{title}</h2>
    </div>
  );
}

export default ConatctItem;
