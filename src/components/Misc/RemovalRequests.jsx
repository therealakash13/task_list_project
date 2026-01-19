export default function RemovalRequests({ list, handleRemoval }) {
  return (
    <div className="flex flex-col gap-2 bg-gray-700 px-5 py-3 rounded">
      <div className=" flex flex-col gap-5">
        <h2 className="text-2xl">Requests ({list.length}) </h2>

        <div className="grid grid-cols-4 text-center text-xl text-gray-300">
          <h3>Task Title</h3>
          <h3>Assigned To</h3>
          <h3>Requested At</h3>
          <h3>Actions</h3>
        </div>
      </div>

      {list.map((req) => (
        <div
          key={req.taskId}
          className="grid grid-cols-4 text-center text-lg border-t-2 pt-1.5 border-gray-300"
        >
          <h3>{req.taskTitle}</h3>
          <h3>{req.employeeName}</h3>
          <h3>{req.requestedAt}</h3>

          <div className="flex justify-around">
            <button
              onClick={() => handleRemoval(req.employeeEmail, req.taskId)}
              className="px-3 py-1 text-sm rounded-full bg-green-800 cursor-pointer"
            >
              Approve
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
