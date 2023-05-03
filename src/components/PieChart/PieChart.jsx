import React from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import css from "./PieChart.module.css";

const PieChartData = () => {
  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Category",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 5678, name: "Search Engine" },
          { value: 4535, name: "Direct" },
          { value: 4510, name: "Email" },
          { value: 3484, name: "Union Ads" },
          { value: 2300, name: "Video Ads" },
        ],
      },
    ],
  };
  return <ReactECharts style={{ width: "50rem" }} option={option} />;
};

export default PieChartData;
