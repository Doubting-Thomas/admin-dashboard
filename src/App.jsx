import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Calendar from "./pages/Calendar/Calendar";
import UserData from "./pages/UserData/UserData";
import PieChartData from "./components/PieChart/PieChart";
import StatsChart from "./components/StatsChart/StatsChart";
import BarChart from "./components/BarChart/BarChart";
const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/userdata" element={<UserData />} />
            <Route path="/piechart" element={<PieChartData />} />
            <Route path="/statschart" element={<StatsChart />} />
            <Route path="/barchart" element={<BarChart />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
};

export default App;
