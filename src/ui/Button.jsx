import { useSelector } from "react-redux";

function Button({ children, onClick }) {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <div
      className="pr-1 cursor-pointer pb-1 bg-sub rounded-md"
      onClick={onClick}
    >
      <button
        className={`capitalize text-sub py-2 px-5 rounded-md border-2 border-sub ${
          darkTheme ? "bg-prime/70" : "bg-prime"
        } text-lg font-medium hover:bg-sub hover:text-prime`}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
