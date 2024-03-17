import Link from "next/link";
import Icon from "../common/Icon";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  return (
    <div className="bg-white h-full rounded-3xl p-5 flex flex-col justify-between items-center">
      <div>
        <Link href={"/"}>
          <Icon classes={"w-16 h-13 "} alt="IDR-Dua" name={"dua-logo.svg"} />
        </Link>
      </div>
      <SidebarMenu />
      <div className="bg-primary size-13 rounded-lg flex items-center justify-center">
        <Icon classes={"size-6"} alt="IDR-Dua" name={"support.svg"} />
      </div>
    </div>
  );
};

export default Sidebar;
