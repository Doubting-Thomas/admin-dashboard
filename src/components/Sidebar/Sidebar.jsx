import React from "react";
import css from "./Sidebar.module.css";
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
import { FaTasks, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Sidebar = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggle = () => setIsCollapsed(!isCollapsed);

  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <MdSpaceDashboard />,
    },
    {
      path: "/calendar",
      name: "Calendar",
      icon: <AiFillCalendar />,
    },
    {
      path: "/userdata",
      name: "User Data",
      icon: <FaTasks />,
    },
  ];
  return (
    <div className={css.container}>
      <div
        style={{ width: isCollapsed ? "150px" : "50px" }}
        className={css.sidebar}
      >
        <div className={css.top}>
          <h1
            style={{ display: isCollapsed ? "block" : "none" }}
            className={css.logo}
          >
            Logo
          </h1>
          <div
            style={{ marginLeft: isCollapsed ? "50px" : "0px" }}
            className={css.bars}
          >
            <FaBars onClick={toggle} />
          </div>
        </div>

        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={css.link}
            activeClassName={css.active}
          >
            <div className={css.icon}>{item.icon}</div>
            <div
              style={{ display: isCollapsed ? "block" : "none" }}
              className={css.text}
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};
export default Sidebar;
