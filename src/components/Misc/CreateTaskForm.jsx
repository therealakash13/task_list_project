import { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";

export default function CreateTaskForm() {
  const { addTask } = useContext(TaskContext);
  const [assignTo, setAssignTo] = useState("");
  const [taskDetails, setTaskDetails] = useState({
    taskTitle: "",
    taskDescription: "",
    taskPriority: "",
    category: "",
    dueDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskDetails, assignTo);
    setTaskDetails({
      taskTitle: "",
      taskDescription: "",
      taskPriority: "",
      category: "",
      dueDate: "",
    });
    setAssignTo("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex w-full justify-between py-7 px-2"
    >
      <div className="flex flex-col w-1/2 px-6 gap-3">
        <div className="flex flex-col gap-2">
          <h3 className="text-gray-300 font-medium">Task Title</h3>
          <input
            type="text"
            name="taskTitle"
            placeholder="Design a website"
            className="border px-3 py-1 rounded outline-none text-xl w-4/5"
            value={taskDetails.taskTitle}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-gray-300 font-medium">Due Date</h3>
          <input
            type="date"
            name="dueDate"
            className="border px-3 py-1 rounded outline-none text-xl w-4/5"
            value={taskDetails.dueDate}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-gray-300 font-medium">Assign to</h3>
          <input
            type="text"
            name="assignTo"
            placeholder="Employee name"
            className="border px-3 py-1 rounded outline-none text-xl w-4/5"
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-gray-300 font-medium">Category</h3>
          <input
            type="text"
            name="category"
            placeholder="design, dev, etc"
            className="border px-3 py-1 rounded outline-none text-xl w-4/5"
            value={taskDetails.category}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className=" flex flex-col w-1/2 px-6 justify-between gap-2">
        <div className="flex gap-2 flex-col">
          <h3 className="text-gray-300 font-medium">Description</h3>
          <textarea
            name="taskDescription"
            rows={6}
            cols={60}
            className="border rounded px-4 py-2 text-xl outline-none"
            placeholder="Task description..."
            value={taskDetails.taskDescription}
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
        <div className="flex justify-start gap-8 items-center">
          <h3 className="text-gray-300 font-medium">Priority</h3>
          <div className="flex items-center gap-2 bg-red-600 px-5 py-0.5 rounded-2xl">
            <input
              type="radio"
              id="high_prior"
              name="taskPriority"
              className="accent-red-600 w-4 h-4 cursor-pointer"
              value="High"
              onChange={(e) => handleChange(e)}
            />
            <label
              htmlFor="high_prior"
              className="text-lg font-semibold cursor-pointer"
            >
              High
            </label>
          </div>
          <div className="flex items-center gap-2 bg-green-600 px-5 py-0.5 rounded-2xl">
            <input
              type="radio"
              id="low_prior"
              name="taskPriority"
              className="accent-green-600 w-4 h-4 cursor-pointer"
              value="Low"
              onChange={(e) => handleChange(e)}
            />
            <label
              htmlFor="low_prior"
              className="text-lg font-semibold cursor-pointer"
            >
              Low
            </label>
          </div>
        </div>
        <button className="bg-green-800 py-2 rounded font-semibold cursor-pointer">
          Create Task
        </button>
      </div>
    </form>
  );
}
