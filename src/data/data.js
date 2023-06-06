import { IoIosPeople } from "react-icons/io";
import { FaMoneyBillAlt } from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";
import { HiViewBoards } from "react-icons/hi";
import moment from "moment/moment";

export const cardInfo = [
  {
    title: "Revenue",
    color: {
      backGround: "#ffffff",
      boxShadow: "0 2.4rem 4.8rem rgba(0, 0, 0, 0.075)",
      // 0px 13px 20px 0px #80808029
    },
    barValue: 75,
    value: `$45,600`,
    icon: <FaMoneyBillAlt size={25} />,
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
    description: "Traffic Generated",
    series: [
      {
        name: "Traffic",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

let events = 0;
let currentDate = moment().format("YYYY-MM-DD");
export const calendarEvents = [
  {
    id: eventID(),
    title: "Dinner Meeting",
    start: currentDate + "T10:00:00",
  },
  {
    id: eventID(),
    title: "Strategic Meeting",
    start:
      moment(currentDate).add(1, "days").format("YYYY-MM-DD") + "T19:00:00",
  },
  {
    id: eventID(),
    title: "Crunch Meeting",
    start:
      moment(currentDate).add(2, "days").format("YYYY-MM-DD") + "T21:00:00",
  },
  {
    id: eventID(),
    title: "VC Meeting",
    start:
      moment(currentDate).add(3, "days").format("YYYY-MM-DD") + "T10:00:00",
  },
  {
    id: eventID(),
    title: "Strategic Meeting",
    start:
      moment(currentDate).add(5, "days").format("YYYY-MM-DD") + "T14:00:00",
  },
  {
    id: eventID(),
    title: "Lunch Meeting",
    start:
      moment(currentDate).add(6, "days").format("YYYY-MM-DD") + "T14:00:00",
  },
];

export function eventID() {
  return String(events++);
}

export const userInfo = [
  {
    name: {
      firstName: "Mary",
      lastName: "Doe",
    },
    address: "23 Pillarman Street",
    city: "Colorado",
    state: "Denver",
  },
  {
    name: {
      firstName: "Jane",
      lastName: "Poppins",
    },
    address: "69 Dominic Street",
    city: "Dover",
    state: "Delaware",
  },
  {
    name: {
      firstName: "William",
      lastName: "Bright",
    },
    address: "26 South Park",
    city: "Arizona",
    state: "Phoenix",
  },
  {
    name: {
      firstName: "James",
      lastName: "Vauhagn",
    },
    address: "28 Emilie Road",
    city: "Hartford",
    state: "Connecticut",
  },
  {
    name: {
      firstName: "Joshua",
      lastName: "Brooks",
    },
    address: "32 Sharp Turnpike",
    city: "Alabama",
    state: "Montgomery",
  },
  {
    name: {
      firstName: "Charles",
      lastName: "Woods",
    },
    address: "64 Dominic Grove",
    city: "Juneau",
    state: "Alaska",
  },
  {
    name: {
      firstName: "James",
      lastName: "Vauhagn",
    },
    address: "28 Emilie Road",
    city: "Hartford",
    state: "Connecticut",
  },
  {
    name: {
      firstName: "Charles",
      lastName: "Woods",
    },
    address: "64 Dominic Grove",
    city: "Juneau",
    state: "Alaska",
  },
  {
    name: {
      firstName: "Jane",
      lastName: "Poppins",
    },
    address: "69 Dominic Street",
    city: "Dover",
    state: "Delaware",
  },
];
