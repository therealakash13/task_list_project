import { getPriorityColor } from "../../utils/colorUtils";

export default function FailedTask({
  id,
  title,
  description,
  priority,
  date,
  category,
  handleRemoval,
  isRequested,
}) {
  return (
    <div className="relative flex justify-between  gap-7 flex-col h-full w-80 rounded shrink-0 px-7 py-8 bg-[#c60036]">
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

      <div className="flex items-center">
        {isRequested ? (
          <button className="flex items-center justify-center gap-3 w-full px-5 py-1 text-lg bg-rose-800 border-2 border-gray-700 rounded-2xl cursor-pointer font-medium text-gray-50">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 15 15"
              fill="#f9fafb"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.50009 0.877014C3.84241 0.877014 0.877258 3.84216 0.877258 7.49984C0.877258 11.1575 3.8424 14.1227 7.50009 14.1227C11.1578 14.1227 14.1229 11.1575 14.1229 7.49984C14.1229 3.84216 11.1577 0.877014 7.50009 0.877014ZM1.82726 7.49984C1.82726 4.36683 4.36708 1.82701 7.50009 1.82701C10.6331 1.82701 13.1729 4.36683 13.1729 7.49984C13.1729 10.6328 10.6331 13.1727 7.50009 13.1727C4.36708 13.1727 1.82726 10.6328 1.82726 7.49984ZM8 4.50001C8 4.22387 7.77614 4.00001 7.5 4.00001C7.22386 4.00001 7 4.22387 7 4.50001V7.50001C7 7.63262 7.05268 7.7598 7.14645 7.85357L9.14645 9.85357C9.34171 10.0488 9.65829 10.0488 9.85355 9.85357C10.0488 9.65831 10.0488 9.34172 9.85355 9.14646L8 7.29291V4.50001Z"
                fill="#f9fafb"
              />
            </svg>
            Requested
          </button>
        ) : (
          <button
            onClick={() => handleRemoval(id)}
            className="flex justify-center items-center gap-3 w-full px-5 py-1 text-lg bg-rose-800 border-2 border-gray-700 rounded-2xl cursor-pointer font-medium text-gray-50"
          >
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 1024 1024"
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#f9fafb"
                d="M352 480h320a32 32 0 110 64H352a32 32 0 010-64z"
              />
              <path
                fill="#f9fafb"
                d="M512 896a384 384 0 100-768 384 384 0 000 768zm0 64a448 448 0 110-896 448 448 0 010 896z"
              />
            </svg>
            Request Removal
          </button>
        )}
      </div>
    </div>
  );
}
