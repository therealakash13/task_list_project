import Header from "../Misc/Header";
import TaskCounter from "../Misc/TaskCounter";
import TaskContainer from "../Misc/TaskContainer";
import Sorter from "../Misc/Sorter";

export default function EmployeeDashboard() {
  return (
    <div className="flex flex-col justify-between h-full gap-20">
      <div className="flex flex-col gap-10">
        <Header />
        <TaskCounter />
        <Sorter />
      </div>
      <TaskContainer />
    </div>
  );
}
