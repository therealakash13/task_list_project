import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import ActiveTask from "../Tasks/ActiveTask";
import NewTask from "../Tasks/NewTask";
import CompletedTask from "../Tasks/CompletedTask";
import FailedTask from "../Tasks/FailedTask";
import { taskSorter } from "../../utils/taskUtils";
import { TaskContext } from "../../context/TaskContext";

export default function TaskContainer() {
  const { user } = useContext(AuthContext);
  const { handleTaskStatus, handleTaskRemoval, getEmployeeTasks } =
    useContext(TaskContext);

  const tasks = getEmployeeTasks(user.email, user.id);
  const sortedTasks = taskSorter(tasks, user.sortBy);

  const handleRemoval = (taskId) => {
    if (!user || user.role !== "employee") {
      alert("Unauthorized.");
      return;
    }

    handleTaskRemoval(user.email, taskId);
  };

  const handleStatus = (taskId, status) => {
    if (!user || user.role !== "employee") {
      alert("Unauthorized.");
      return;
    }

    handleTaskStatus(user.email, taskId, status);
  };

  return (
    <div className="task-list flex-1 flex items-center flex-nowrap overflow-x-auto gap-5 w-full px-4">
      {sortedTasks.map((task, idx) => {
        switch (task.status) {
          case "active":
            return (
              <ActiveTask
                key={task.id ?? idx}
                id={task.id}
                title={task.taskTitle}
                description={task.taskDescription}
                priority={task.taskPriority}
                date={task.dueDate}
                category={task.category}
                status={task.status}
                handleStatus={handleStatus}
              />
            );

          case "new":
            return (
              <NewTask
                key={task.id ?? idx}
                id={task.id}
                title={task.taskTitle}
                description={task.taskDescription}
                priority={task.taskPriority}
                date={task.dueDate}
                category={task.category}
                status={task.status}
                handleStatus={handleStatus}
              />
            );

          case "completed":
            return (
              <CompletedTask
                key={task.id ?? idx}
                id={task.id}
                title={task.taskTitle}
                description={task.taskDescription}
                priority={task.taskPriority}
                date={task.dueDate}
                category={task.category}
                status={task.status}
                handleRemoval={handleRemoval}
                isRequested={task.removalRequested}
                requestedAt={task.removalRequestedAt}
              />
            );

          case "failed":
            return (
              <FailedTask
                key={task.id ?? idx}
                id={task.id}
                title={task.taskTitle}
                description={task.taskDescription}
                priority={task.taskPriority}
                date={task.dueDate}
                category={task.category}
                status={task.status}
                handleRemoval={handleRemoval}
                isRequested={task.removalRequested}
                requestedAt={task.removalRequestedAt}
              />
            );
          default:
            break;
        }
      })}
    </div>
  );
}
