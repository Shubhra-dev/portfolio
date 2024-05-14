function FixedItem({ children, link, dark }) {
  return (
    <div
      onClick={() => window.open(link, "_blank")}
      className={`p-2 sm:px-3 sm:py-4 cursor-pointer rounded-md ${
        dark
          ? "text-prime hover:bg-prime/70 hover:text-sub"
          : "text-black hover:bg-prime hover:text-sub"
      } text-2xl md:text-3xl`}
    >
      {children}
    </div>
  );
}

export default FixedItem;
