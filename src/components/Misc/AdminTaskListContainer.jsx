import { useContext } from "react";
import AdminTask from "./AdminTask";
import { TaskContext } from "../../context/TaskContext";

export default function AdminTaskListContainer() {
  const { employeesData, getTaskCount } = useContext(TaskContext);

  return (
    <div className="flex-1 flex flex-col">
      <div className="grid grid-cols-5 text-center font-semibold text-xl text-gray-300">
        <p className="bg-gray-700  py-3 ">Employee</p>
        <p className="bg-cyan-800  py-3 ">New</p>
        <p className="bg-green-700 py-3 ">Completed</p>
        <p className="bg-gray-100 text-gray-700  py-3 ">Active</p>
        <p className="bg-rose-700  py-3">Failed</p>
      </div>
      {employeesData.map((employee, idx) => (
        <AdminTask
          key={idx}
          employee={employee.employeeName}
          taskCount={getTaskCount(employee.email)}
        />
      ))}
    </div>
  );
}
