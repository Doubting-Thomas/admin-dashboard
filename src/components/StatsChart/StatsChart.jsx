import React from "react";
import css from "./StatsChart.module.css";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const StatsChart = () => {
  const option = {
    // title: {
    //   text: "Stacked Line",
    // },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Email",
        type: "line",
        stack: "Total",
        data: [12000, 15820, 16400, 14700, 13600, 23000, 17000],
      },
      {
        name: "Union Ads",
        type: "line",
        stack: "Total",
        data: [24500, 24920, 20100, 31400, 23000, 14000, 18000],
      },
      {
        name: "Video Ads",
        type: "line",
        stack: "Total",
        data: [34000, 21920, 26100, 26400, 14000, 16000, 32000],
      },
      {
        name: "Direct",
        type: "line",
        stack: "Total",
        data: [23100, 12820, 10100, 12900, 19000, 23000, 41000],
      },
      {
        name: "Search Engine",
        type: "line",
        stack: "Total",
        data: [10000, 13230, 29100, 11400, 22340, 13000, 11000],
      },
    ],
  };
  return <ReactECharts option={option} />;
};
export default StatsChart;
