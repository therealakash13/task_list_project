import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { TaskContext } from "../../context/TaskContext";

export default function TaskCounter() {
  const { user } = useContext(AuthContext);
  const { getTaskCount } = useContext(TaskContext);
  const taskCount = getTaskCount(user.email);

  return (
    <div className="grid grid-cols-4 gap-3 px-4">
      <div className="flex items-baseline-last justify-start py-7 px-14 bg-cyan-800 rounded gap-10 text-gray-300 font-semibold">
        <span className="text-8xl font-bold font-white">{taskCount?.new}</span>{" "}
        New <br /> Tasks
      </div>
      <div className="flex items-baseline-last justify-start py-7 px-14 bg-gray-100 rounded gap-10 text-gray-700 font-semibold">
        <span className="text-8xl font-bold font-white">
          {taskCount?.active}
        </span>{" "}
        Active <br /> Tasks
      </div>
      <div className="flex items-baseline-last justify-start py-7 px-14 bg-green-700 rounded gap-10 text-gray-300 font-semibold">
        <span className="text-8xl font-bold font-white">
          {taskCount?.completed}
        </span>{" "}
        Completed <br /> Tasks
      </div>
      <div className="flex items-baseline-last justify-start py-7 px-14 bg-rose-800 rounded gap-10 text-gray-300 font-semibold">
        <span className="text-8xl font-bold font-white">
          {taskCount?.failed}
        </span>{" "}
        Failed <br /> Tasks
      </div>
    </div>
  );
}
