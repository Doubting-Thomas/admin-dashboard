import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="dashboard">
      <h1>Let's get started</h1>
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
