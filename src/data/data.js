import { IoIosPeople } from "react-icons/io";
import { FaMoneyBillAlt } from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";
import { HiViewBoards } from "react-icons/hi";

export const cardInfo = [
  {
    title: "Revenue",
    color: {
      backGround: "#ffffff",
      boxShadow: "0 2.4rem 4.8rem rgba(0, 0, 0, 0.075)",
    },
    // percentage design
    barValue: 75,
    // dollar value beside the percentage
    value: `$45,600`,
    // icon
    icon: <FaMoneyBillAlt size={25} />,
    // icon: FaMoneyBillAlt,
    // this is for the graph that pops up when we click
    description: "Revenue Generated",
    series: [
      {
        name: "Revenue",
        data: [51, 30, 38, 21, 42, 115, 110],
      },
    ],
  },
  {
    title: "Sales",
    color: {
      backGround: "#ffffff",
      boxShadow: "0 2.4rem 4.8rem rgba(0, 0, 0, 0.075)",
    },
    barValue: 80,
    value: "39,570",
    icon: <TbMoneybag size={25} />,
    // icon: TbMoneybag,
    description: "Sales Completed",
    series: [
      {
        name: "Sales",
        data: [50, 70, 60, 90, 20, 30, 40],
      },
    ],
  },
  {
    title: "Customers",
    color: {
      backGround: "#ffffff",
      boxShadow: "0 2.4rem 4.8rem rgba(0, 0, 0, 0.075)",
    },
    barValue: 55,
    value: "10,130",
    icon: <IoIosPeople size={25} />,
    // icon: IoIosPeople,
    description: "New Customers",
    series: [
      {
        name: "Customers",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },

  {
    title: "Traffic",
    color: {
      backGround: "#ffffff",
      boxShadow: "0 2.4rem 4.8rem rgba(0, 0, 0, 0.075)",
    },
    barValue: 83,
    value: "1,348,908",
    icon: <HiViewBoards size={25} />,
    // icon: HiViewBoards,
    description: "Traffic Generated",
    series: [
      {
        name: "Traffic",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];
