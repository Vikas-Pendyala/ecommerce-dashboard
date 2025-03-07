import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNavbar from "./components/SideNavbar/SideNavbar";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import UserManagement from "./pages/UserManagement";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="app-container">
        <SideNavbar />
        <div className="main-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/" element={<Dashboard />} /> {/* Default route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
