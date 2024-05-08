function Button({ children }) {
  return (
    <div className="pr-1 cursor-pointer pb-1 bg-sub rounded-md">
      <button className="capitalize text-sub py-2 px-5 rounded-md border-2 border-sub bg-prime text-lg font-medium hover:bg-sub hover:text-prime">
        {children}
      </button>
    </div>
  );
}

export default Button;
