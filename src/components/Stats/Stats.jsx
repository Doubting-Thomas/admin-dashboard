import React from "react";
import css from "./Stats.module.css";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import StatsChart from "../StatsChart/StatsChart";
import BarChart from "../BarChart/BarChart";

const Stats = () => {
  return (
    <div className={css.container}>
      <div className={css.stats}>
        <div className={css.header}>
          <h3 className={css.title}>Revenue Generated</h3>

          <BsFillArrowUpSquareFill size={20} />
        </div>

        <div className={css.chart}>
          <StatsChart />
        </div>
      </div>

      <div className={css.bar}>
        <BarChart />
      </div>
    </div>
  );
};
export default Stats;
