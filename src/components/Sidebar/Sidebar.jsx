import React from "react";
import css from "./Sidebar.module.css";
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillCalendar } from "react-icons/ai";
import { FaTasks, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { BarChart, BarChartOutlined } from "@mui/icons-material";
import { BiBarChart, BiLineChart, BiPieChart } from "react-icons/bi";

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
    {
      path: "/barchart",
      name: "Bar Chart",
      icon: <BiBarChart />,
    },
    {
      path: "/statschart",
      name: "Line Chart",
      icon: <BiLineChart />,
    },
    {
      path: "/piechart",
      name: "Pie Chart",
      icon: <BiPieChart />,
    },
    {
      path: "/login",
      name: "Login",
      icon: <BiPieChart />,
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
