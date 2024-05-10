import { FaCode } from "react-icons/fa";
import NavItem from "./NavItem";
import { IoIosSunny } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import scrollToTargetDiv from "../targetDiv";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="h-[88px] border border-gray-100 shadow-md">
      <div className="w-11/12 h-full m-auto flex items-center">
        <div className="w-3/6 md:w-2/6 text-lg lg:text-3xl font-bold text-sub cursor-pointer flex items-center gap-2">
          <FaCode />
          <h2>SHUBHRA.DEV</h2>
        </div>
        <div className="hidden lg:w-4/6 lg:flex lg:items-center lg:justify-end">
          <NavItem
            title={"About Me"}
            onClick={() => scrollToTargetDiv("about")}
          />
          <NavItem
            title={"Projects"}
            onClick={() => scrollToTargetDiv("projects")}
          />
          <NavItem
            title={"Contact"}
            onClick={() => scrollToTargetDiv("contact")}
          />
        </div>
        <div className="w-2/6 relative lg:hidden">
          <TiThMenu
            className="w-full text-xl m-auto hover:text-sub"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          {menuOpen && (
            <div className="absolute w-full bg-prime rounded-lg py-2">
              <NavItem
                title={"About Me"}
                onClick={() => setMenuOpen(!menuOpen)}
              />
              <NavItem
                title={"Projects"}
                onClick={() => setMenuOpen(!menuOpen)}
              />
              <NavItem
                title={"Contact"}
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </div>
          )}
        </div>
        <div className="w-1/6 lg:w-2/6 flex items-center justify-end text-2xl">
          <IoIosSunny className="text-prime" />
          <MdDarkMode className="text-dark" />
        </div>
      </div>
    </div>
  );
}

export default Header;
