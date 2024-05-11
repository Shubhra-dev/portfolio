import { Outlet } from "react-router-dom";
import Header from "./Header";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import FixedItem from "./FixedItem";
import { IoMdMailUnread } from "react-icons/io";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="font-code">
      <div className="fixed bg-sub/10 top-[30%] sm:top-[40%] rounded-r-md shadow-sm p-2">
        <FixedItem link={"https://github.com/Shubhra-dev"}>
          <FaGithub />
        </FixedItem>
        <FixedItem link={"https://www.linkedin.com/in/shuvs/"}>
          <FaLinkedin />
        </FixedItem>
        <FixedItem link={"https://www.facebook.com/shuuvro.dev/"}>
          <FaFacebook />
        </FixedItem>
        <FixedItem
          link={
            "https://mail.google.com/mail/?extsrc=mailto&url=mailto%3Ashuuvro.dev%40gmail.com%3Fsubject%3DSUBJECT"
          }
        >
          <IoMdMailUnread />
        </FixedItem>
      </div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
