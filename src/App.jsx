import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Calendar from "./pages/Calendar/Calendar";
import UserData from "./pages/UserData/UserData";

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
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
};

export default App;
