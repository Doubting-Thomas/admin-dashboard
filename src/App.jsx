import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="dashboard">
      <BrowserRouter>
        <Sidebar>
          <Routes>
            {/* <Route path="/" element={<Sidebar />} /> */}
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
};

export default App;
