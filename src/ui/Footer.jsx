import { useSelector } from "react-redux";

function Footer() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <div className={`${darkTheme ? "text-prime" : ""} py-4 w-11/12 m-auto`}>
      <div className="border-t border-t-sub text-center text-sm font-bold py-2 font-mono">
        <h2>
          © Copyright 2024.
          <span className="block sm:inline">
            Made by Shubhradev |
            <span className="text-sub"> shuuvro.dev@gmail.com</span>
          </span>
        </h2>
      </div>
    </div>
  );
}

export default Footer;
