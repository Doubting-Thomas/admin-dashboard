import React from "react";
import css from "./CardChart.module.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import { TiTimes } from "react-icons/ti";

const CardChart = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// const cardIcon = param.icon;
// const yup = 5;
// const nope = 7;

// function test({ param, setExpanded }) {
//   yup;
//   const cardIcons = param.icon;
//   return (
//     <motion.div style={{ background: param.color.backgrund }}>
//       <cardIcons />
//     </motion.div>
//   );
// }

function CompactCard({ param, setExpanded }) {
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.background,
        color: "var(--color-primary-2)",
        boxShadow: param.color.boxShadow,
        padding: `1.5rem`,
        borderRadius: `0.5rem`,
        cursor: `pointer`,
        transition: `all 0.3s`,
      }}
      onClick={setExpanded}
      layoutId="expandableCard"
    >
      {param.icon}
      <h2>{param.title}</h2>

      <div className={css.cardInfo}>
        <div
          className={css.CardData}
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className={css.cardText}>
            <p style={{ fontSize: `2rem`, fontWeight: `700` }}>{param.value}</p>

            <p style={{ fontWeight: `700` }}>{param.description}</p>
          </div>
          <div className={css.percentage} style={{ maxWidth: `30%` }}>
            <CircularProgressbar
              styles={{ width: `4rem` }}
              style={{ width: `4rem` }}
              value={param.barValue}
              text={`${param.barValue}%`}
            />
          </div>
        </div>
        {/* <div className={css.percentage}>
          <CircularProgressbar
            value={param.barValue}
            text={`${param.barValue}%`}
          />
        </div> */}
      </div>
    </motion.div>
  );
}

function ExpandedCard({ param, setExpanded }) {
  const options = {
    color: "#ffffff",

    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },

    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      backgroundColor: "#fb8500",
      borderWidth: 0,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
      show: false,
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: {
          show: false,
        },
      },
    ],

    series: [
      {
        type: "line",
        smooth: true,
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              //color: "rgb(255, 191, 0)",
              color: "#023e8a",
            },
            {
              offset: 1,
              // color: "#F450D3",
              color: "#023e8a",
            },
          ]),
          width: 4,
        },
        areaStyle: {
          opacity: 0.5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
            {
              offset: 0,
              color: "#023e8a",
            },
            {
              offset: 1,
              // color: "rgba(255,144,70,0.1)",
              color: "#023e8a",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        showSymbol: false,
        data: [28000, 19000, 32000, 18000, 41000, 30000, 26000],
        //data: [param.series],
      },
    ],
  };

  return (

    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
        padding: `1rem`,
        //height: `100%`,
        width: `30rem`,
        maxWidth: `44rem`,
      }}
      layoutId="expandableCard"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginLeft: "auto",
          cursor: "pointer",
          color: "#023e8a",
        }}
      >
        <TiTimes onClick={setExpanded} size={15} />
      </div>
      <h2 className={css.CardTitle}>{param.title}</h2>
      {/* <div className="chartContainer" style={{ width: `100%` }}> */}
      <ReactECharts option={options} series={param.series} />
      {/* </div> */}
      {/* <span>Last 24 hours</span> */}
    </motion.div>
  );
}
export default CardChart;
