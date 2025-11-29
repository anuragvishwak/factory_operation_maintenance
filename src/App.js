import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Login from "./Login";
import MaintenanceEngineerDashboard from "./Maintenance Engineer/MaintenanceEngineerDashboard";
import AdminDashboard from "./Admin (Factory Owner)/AdminDashboard";
import MachineOperatorDashboard from "./Machine Operator/MachineOperatorDashboard";
import QualityEngineerDashboard from "./Quality Engineer/QualityEngineerDashboard";
import SignUp from "./SignUp";
import SafetyOfficerDashboard from "./Safety Officer/SafetyOfficerDashboard";
import SupplierContractManagementDashboard from "./Supplier & Contractor Management/SupplierContractManagementDashboard";
import StoreInventoryManagerDashboard from "./Store and inventory manager/StoreInventoryManagerDashboard";
import UserManagement from "./Admin (Factory Owner)/UserManagement";
import AdminOperations from "./Admin (Factory Owner)/AdminOperations/AdminOperations";
import AdminMaintenance from "./Admin (Factory Owner)/AdminMaintenance/AdminMaintenance";
import AdminInventoryManagement from "./Admin (Factory Owner)/AdminInventoryManagement";
import AdminSafetyQuality from "./Admin (Factory Owner)/Safety Quality/AdminSafetyQuality";
import FinanceVendor from "./Admin (Factory Owner)/Finance and Vendor/FinanceVendor";
import MachineOverview from "./Maintenance Engineer/MachineOverview";
import ActiveJobs from "./Maintenance Engineer/ActiveJobs";
import MaintenanceBreakdown from "./Maintenance Engineer/MaintenanceBreakdown";
import PreventiveMaintenanceSchedule from "./Maintenance Engineer/PreventiveMaintenanceSchedule";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/MaintenanceEngineerDashboard"
            element={<MaintenanceEngineerDashboard />}
          />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />

          <Route path="/AdminOperations" element={<AdminOperations />} />
          <Route path="/AdminMaintenance" element={<AdminMaintenance />} />

          <Route
            path="/SafetyOfficerDashboard"
            element={<SafetyOfficerDashboard />}
          />

          <Route path="/AdminSafetyQuality" element={<AdminSafetyQuality />} />
          <Route path="/FinanceVendor" element={<FinanceVendor />} />


          <Route
            path="/MachineOperatorDashboard"
            element={<MachineOperatorDashboard />}
          />

          <Route
            path="/AdminInventoryManagement"
            element={<AdminInventoryManagement />}
          />

          <Route
            path="/QualityEngineerDashboard"
            element={<QualityEngineerDashboard />}
          />

          <Route
            path="/ActiveJobs"
            element={<ActiveJobs />}
          />

          <Route
            path="/MaintenanceBreakdown"
            element={<MaintenanceBreakdown />}
          />

          <Route
            path="/PreventiveMaintenanceSchedule"
            element={<PreventiveMaintenanceSchedule />}
          />

          <Route
            path="/SupplierContractManagementDashboard"
            element={<SupplierContractManagementDashboard />}
          />

           <Route
            path="/MachineOverview"
            element={<MachineOverview />}
          />

          <Route
            path="/StoreInventoryManagerDashboard"
            element={<StoreInventoryManagerDashboard />}
          />

          <Route path="/UserManagement" element={<UserManagement />} />

          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
