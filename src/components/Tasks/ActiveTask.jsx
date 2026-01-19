import { getPriorityColor } from "../../utils/colorUtils";

export default function ActiveTask({
  id,
  title,
  description,
  priority,
  date,
  category,
  handleStatus,
}) {
  return (
    <div className="relative flex justify-between gap-7 flex-col h-full w-80 rounded shrink-0 px-7 py-8 bg-[#f3f4f6] text-[#364153]">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between w-full items-center gap-2">
          <span
            className={`${getPriorityColor(priority)} px-5 py-2 text-sm rounded font-semibold text-white`}
          >
            {priority}
          </span>
          <span className="text-lg font-semibold">
            {new Date(date).toLocaleDateString("en-IN")}
          </span>
        </div>
        <h2 className="text-3xl font-bold  mt-4 truncate hover:whitespace-normal hover:overflow-visible">
          {title}
        </h2>
        <p className="text-lg font-medium text-gray-600 bg-gray-400 px-5 py-3 rounded-2xl">
          {description}
        </p>
        <p className="absolute bottom-2 right-3 text-sm font-semibold truncate">
          #{category}
        </p>
      </div>

      <div className="flex justify-around items-center">
        <button
          onClick={() => handleStatus(id, "completed")}
          className="w-1/2 px-5 py-1 text-lg bg-green-800 opacity-95 border-2 border-gray-700 rounded-l-2xl cursor-pointer font-medium text-gray-50"
        >
          Completed
        </button>
        <button
          onClick={() => handleStatus(id, "failed")}
          className="w-1/2 px-5 py-1 text-lg bg-rose-800 opacity-95 border-2 border-gray-700 rounded-r-2xl cursor-pointer font-medium text-gray-50"
        >
          Failed
        </button>
      </div>
    </div>
  );
}
