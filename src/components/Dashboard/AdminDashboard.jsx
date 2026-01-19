import { useContext } from "react";
import AdminTaskListContainer from "../Misc/AdminTaskListContainer";
import CreateTask from "../Misc/CreateTask";
import Header from "../Misc/Header";
import RemovalRequests from "../Misc/RemovalRequests";
import { AuthContext } from "../../context/AuthContext";
import { TaskContext } from "../../context/TaskContext";

export default function AdminDashboard() {
  const { user } = useContext(AuthContext);
  const { getRemovalRequests, approveTaskRemoval } = useContext(TaskContext);
  const requestList = getRemovalRequests();

  const handleRemoval = (email, taskId) => {
    if (user.role !== "admin") {
      return alert("Unauthorized.");
    }

    approveTaskRemoval(email, taskId);
  };

  return (
    <div className="task-list flex flex-col h-full gap-10 overflow-y-auto">
      <Header />
      <CreateTask />
      <RemovalRequests handleRemoval={handleRemoval} list={requestList} />
      <AdminTaskListContainer />
    </div>
  );
}
