import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Calendar from "./pages/Calendar/Calendar";
import UserData from "./pages/UserData/UserData";
//import { Navigate, Outlet, useLocation } from "react-router-dom";

const App = () => {
  //const { pathName } = useLocation();
  return (
    <div className="container">
      {/* having the dashboard as the default route */}
      {/* {pathName === "/" && <Navigate to="/dashboard" />} */}
      <BrowserRouter>
        <Sidebar>
          <Routes>
            {/* <Route path="/" element={<Sidebar />} /> */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/userdata" element={<UserData />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>

      {/* having the dashboard as the default route */}
      {/* <div className="content">
        <Outlet />
      </div> */}
    </div>
  );
};

export default App;
