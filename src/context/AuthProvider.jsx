import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { getLocalStorage } from "../utils/LocalStorage";

export default function AuthProvider(props) {
  const [user, setUser] = useState(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    return storedUser ? storedUser : null;
  });

  const loginHandler = (email, password) => {
    const { employees, admin } = getLocalStorage();

    const adminData = admin.find(
      (a) => a.email === email && a.password === password,
    );

    if (adminData) {
      const userData = {
        role: "admin",
        email: adminData.email,
        id: adminData.id,
        name: adminData.adminName,
      };
      return setUser(userData);
    }

    const employeeData = employees.find(
      (e) => e.email === email && e.password === password,
    );

    if (employeeData) {
      const userData = {
        role: "employee",
        email: employeeData.email,
        id: employeeData.id,
        name: employeeData.employeeName,
        sortBy: user?.sortBy ?? "default",
      };
      return setUser(userData);
    }

    return alert("Incorrect email or password");
  };

  const logoutHandler = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
    return;
  };

  const changeSort = (value) => {
    setUser((prev) => (prev ? { ...prev, sortBy: value } : prev));
  };

  useEffect(() => {
    if (!user) return;
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  }, [user]);

  return (
    <div>
      <AuthContext.Provider
        value={{
          user,
          loginHandler,
          logoutHandler,
          changeSort,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    </div>
  );
}
