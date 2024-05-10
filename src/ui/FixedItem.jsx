function FixedItem({ children, link }) {
  return (
    <div
      onClick={() => window.open(link, "_blank")}
      className="p-2 sm:px-3 sm:py-4 cursor-pointer rounded-md hover:bg-prime hover:text-sub text-black text-2xl md:text-3xl"
    >
      {children}
    </div>
  );
}

export default FixedItem;
