// import { useState } from "react";
import { useContext } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthContext";

export default function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="text-2xl font-quicksand w-screen h-screen bg-gray-800 text-white px-8 py-10">
      {!user && <Login />}

      {user?.role === "admin" && <AdminDashboard />}
      {user?.role === "employee" && <EmployeeDashboard />}
    </div>
  );
}
