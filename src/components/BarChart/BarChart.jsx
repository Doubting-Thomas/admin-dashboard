import React from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const BarChart = () => {
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Revenue",
        type: "bar",
        barWidth: "60%",
        data: [6590, 5200, 7800, 3340, 5700, 8000, 10000],
      },
      {
        name: "Sales",
        type: "bar",
        barWidth: "60%",
        data: [1000, 1500, 2000, 3340, 3900, 3300, 2200],
      },
    ],
  };
  return <ReactECharts option={option} />;
};
export default BarChart;
