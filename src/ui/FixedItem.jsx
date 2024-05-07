function FixedItem({ children }) {
  return (
    <div className="p-2 sm:p-4 cursor-pointer rounded-md hover:bg-prime hover:text-sub text-black text-2xl md:text-3xl">
      {children}
    </div>
  );
}

export default FixedItem;
