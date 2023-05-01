import React from "react";
import Topbar from "../components/Topbar/Topbar";
import Card from "../components/Card/Card";
import Stats from "../components/Stats/Stats";
import css from "./Dashboard.module.css";
// import OrderTable from "../components/TableData/TableData";
import OrderTable from "../components/TableData/TableData";

const Dashboard = () => {
  return (
    <div>
      <Topbar />
      <h2>Dashboard</h2>
      <Card />
      <Stats />

      <div className={css.bottom}>
        <OrderTable />
      </div>
    </div>
  );
};
export default Dashboard;
