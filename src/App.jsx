import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNavbar from "./components/SideNavbar/SideNavbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Inventory from "./pages/Inventory/Inventory";
import UserManagement from "./pages/UserManagement/UserManagement";

// Import subpages
import Overview from "./pages/Dashboard/Overview";
import Reports from "./pages/Dashboard/Reports";
import Analytics from "./pages/Dashboard/Analytics";
import Settings from "./pages/Dashboard/Settings";

import Stock from "./pages/Inventory/Stock";
import Orders from "./pages/Inventory/Orders";
import Suppliers from "./pages/Inventory/Suppliers";
import Warehouses from "./pages/Inventory/Warehouses";

import Users from "./pages/UserManagement/Users";
import Roles from "./pages/UserManagement/Roles";
import Permissions from "./pages/UserManagement/Permissions";
import ActivityLog from "./pages/UserManagement/ActivityLog";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <SideNavbar />
        <div className="main-content">
          <Routes>
            {/* Main Pages */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/" element={<Dashboard />} />

            {/* Dashboard Subpages */}
            <Route path="/dashboard/overview" element={<Overview />} />
            <Route path="/dashboard/reports" element={<Reports />} />
            <Route path="/dashboard/analytics" element={<Analytics />} />
            <Route path="/dashboard/settings" element={<Settings />} />

            {/* Inventory Subpages */}
            <Route path="/inventory/stock" element={<Stock />} />
            <Route path="/inventory/orders" element={<Orders />} />
            <Route path="/inventory/suppliers" element={<Suppliers />} />
            <Route path="/inventory/warehouses" element={<Warehouses />} />

            {/* User Management Subpages */}
            <Route path="/user-management/users" element={<Users />} />
            <Route path="/user-management/roles" element={<Roles />} />
            <Route path="/user-management/permissions" element={<Permissions />} />
            <Route path="/user-management/activity-log" element={<ActivityLog />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
