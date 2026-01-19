import { useEffect, useState } from "react";
import { TaskContext } from "./TaskContext";
import { nanoid } from "nanoid";

export const TaskProvider = (props) => {
  const [employeesData, setEmployeesData] = useState(() => {
    const storedEmployees = localStorage.getItem("employees");
    return storedEmployees ? JSON.parse(storedEmployees) : [];
  });

  const addTask = (taskDetails, assignTo) => {
    setEmployeesData((prevEmployees) => {
      if (!prevEmployees) return prevEmployees;

      const employeeExists = prevEmployees.find(
        (emp) => emp.email.toLowerCase() === assignTo.toLowerCase(),
      );

      if (!employeeExists) {
        alert("No such employee exists."); // ui should handle it.
        return prevEmployees;
      }

      const updatedEmployees = prevEmployees.map((emp) => {
        if (emp.email.toLowerCase() !== assignTo.toLowerCase()) return emp;

        const newTask = {
          ...taskDetails,
          status: "new",
          id: nanoid(),
          creationDate: new Date().toISOString().split("T")[0],
        };

        if (new Date(newTask.dueDate) < new Date(newTask.creationDate)) {
          return emp; // UI should show toast
        }

        const updatedTasks = [...emp.tasks, newTask];

        const taskCount = {
          active: updatedTasks.filter((t) => t.status === "active").length,
          new: updatedTasks.filter((t) => t.status === "new").length,
          completed: updatedTasks.filter((t) => t.status === "completed")
            .length,
          failed: updatedTasks.filter((t) => t.status === "failed").length,
        };

        return { ...emp, tasks: updatedTasks, taskCount };
      });
      return updatedEmployees;
    });
  };

  const handleTaskStatus = (email, taskId, status) => {
    setEmployeesData((prev) =>
      prev.map((emp) =>
        emp.email === email
          ? {
              ...emp,
              tasks: emp.tasks.map((task) =>
                task.id === taskId ? { ...task, status } : task,
              ),
            }
          : emp,
      ),
    );
  };

  const handleTaskRemoval = (email, taskId) => {
    setEmployeesData((prev) =>
      prev.map((emp) =>
        emp.email === email
          ? {
              ...emp,
              tasks: emp.tasks.map((task) =>
                task.id === taskId &&
                ["completed", "failed"].includes(task.status)
                  ? {
                      ...task,
                      removalRequested: true,
                      removalRequestedAt: new Date()
                        .toISOString()
                        .split("T")[0],
                    }
                  : task,
              ),
            }
          : emp,
      ),
    );
  };

  const approveTaskRemoval = (email, taskId) => {
    setEmployeesData((prev) =>
      prev.map((emp) =>
        emp.email === email
          ? {
              ...emp,
              tasks: emp.tasks.filter(
                (task) => !(task.id === taskId && task.removalRequested),
              ),
            }
          : emp,
      ),
    );
  };

  const getTaskCount = (email) => {
    const employee = employeesData.find((emp) => emp.email === email);

    if (!employee || !employee.tasks) {
      return { new: 0, active: 0, completed: 0, failed: 0 };
    }

    return employee.tasks.reduce(
      (acc, task) => {
        acc[task.status] += 1;
        return acc;
      },
      { new: 0, active: 0, completed: 0, failed: 0 },
    );
  };

  const getEmployeeTasks = (email, id) => {
    const employee = employeesData.find(
      (e) => e.email === email || e.id === id,
    );
    if (!employee) return [];
    return employee.tasks;
  };

  const getRemovalRequests = () => {
    const removalRequests = employeesData.flatMap((emp) =>
      emp.tasks
        .filter((task) => task.removalRequested)
        .map((task) => ({
          taskId: task.id,
          taskTitle: task.taskTitle,
          employeeEmail: emp.email,
          employeeName: emp.employeeName,
          requestedAt: task.removalRequestedAt,
        })),
    );
    return removalRequests;
  };

  useEffect(() => {
    if (!employeesData) return;
    localStorage.setItem("employees", JSON.stringify(employeesData));
  }, [employeesData]);

  return (
    <div>
      <TaskContext.Provider
        value={{
          employeesData,
          setEmployeesData,
          addTask,
          handleTaskStatus,
          handleTaskRemoval,
          getTaskCount,
          getEmployeeTasks,
          getRemovalRequests,
          approveTaskRemoval,
        }}
      >
        {props.children}
      </TaskContext.Provider>
    </div>
  );
};
