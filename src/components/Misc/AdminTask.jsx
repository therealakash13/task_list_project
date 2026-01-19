export default function AdminTask({ employee, taskCount }) {
  return (
    <div className="grid grid-cols-5 text-center text-lg font-normal">
      <p className="bg-gray-700 py-3 px-2 border-t">{employee}</p>
      <p className="bg-cyan-800 py-3 px-2 border-t">{taskCount.new}</p>
      <p className="bg-green-700 py-3 px-2 border-t">{taskCount.completed}</p>
      <p className="bg-gray-100 text-gray-700 py-3 px-2 border-t">{taskCount.active}</p>
      <p className="bg-rose-700 py-3 px-2 border-t">{taskCount.failed}</p>
    </div>
  );
}
