import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Sorter() {
  const { changeSort } = useContext(AuthContext);
  return (
    <div className="flex justify-end gap-5 items-center">
      <h2 className="text-2xl">Sort by</h2>
      <div className=" flex gap-3">
        <button
          onClick={() => changeSort("priority")}
          className="px-5 py-1 bg-gray-500 rounded-2xl text-lg cursor-pointer"
        >
          Priority
        </button>
        <button
          onClick={() => changeSort("type")}
          className="px-5 py-1 bg-gray-500 rounded-2xl text-lg cursor-pointer"
        >
          Type
        </button>
        <button
          onClick={() => changeSort("dueDate")}
          className="px-5 py-1 bg-gray-500 rounded-2xl text-lg cursor-pointer"
        >
          Due Date
        </button>
      </div>
    </div>
  );
}
