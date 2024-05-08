import { Outlet } from "react-router-dom";
import Header from "./Header";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import FixedItem from "./FixedItem";
import { IoMdMailUnread } from "react-icons/io";

function AppLayout() {
  return (
    <div className="font-code">
      <div className="fixed bg-sub/10 top-[30%] sm:top-[40%] rounded-r-md shadow-sm p-2">
        <FixedItem>
          <FaGithub />
        </FixedItem>
        <FixedItem>
          <FaLinkedin />
        </FixedItem>
        <FixedItem>
          <FaFacebook />
        </FixedItem>
        <FixedItem>
          <IoMdMailUnread />
        </FixedItem>
      </div>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default AppLayout;
