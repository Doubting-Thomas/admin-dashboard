import React from "react";
import Topbar from "../components/Topbar/Topbar";
import Card from "../components/Card/Card";
import Stats from "../components/Stats/Stats";
import css from "./Dashboard.module.css";
// import OrderTable from "../components/TableData/TableData";
import OrderTable from "../components/TableData/TableData";
import PieChartData from "../components/PieChart/PieChart";

const Dashboard = () => {
  return (
    <div>
      <Topbar />
      <h2>Dashboard</h2>
      <Card />
      <Stats />

      <div className={css.dashboard__bottom}>
        <OrderTable />

        <div className={css.dashboard__pie}>
          {/* <h3 className={css.heading}>Revenue</h3>; */}
          <PieChartData />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
