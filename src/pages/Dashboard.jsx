import React from "react";
import Topbar from "../components/Topbar/Topbar";
import Card from "../components/Card/Card";
import Stats from "../components/Stats/Stats";

const Dashboard = () => {
  return (
    <div>
      <Topbar />
      <h2>Dashboard</h2>
      <Card />
      <Stats />
    </div>
  );
};
export default Dashboard;
