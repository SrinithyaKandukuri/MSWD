import { NavLink, useNavigate } from "react-router-dom";
import { LogoHolder, SidebarContainer, SidebarItem } from "./style";
import {Icon} from "@iconify/react"
const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    navigate("/login");
  }

  return (
    <SidebarContainer>
      <div className="flex m-3 justify-around">
        <LogoHolder>
          <Icon icon={"ic:round-directions-car"} color="white" fontSize={"24px"} />
        </LogoHolder>
        <p className="text-2xl">Garage</p>
      </div>
      <div>
        <ul className="relative">
          <NavLink to={"/"}>
          <SidebarItem>Home</SidebarItem>
          </NavLink>
          <NavLink to={"/home"}>
          <SidebarItem>Cars</SidebarItem>
          </NavLink>
          <NavLink to={"/profile"}>
          <SidebarItem>Profile</SidebarItem>
          </NavLink>
          <SidebarItem onClick={handleLogout}>Log out</SidebarItem>
        </ul>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
