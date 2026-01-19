export const taskSorter = (tasks = [], basis) => {
  const STATUS_ORDER = Object.freeze({
    new: 1,
    active: 2,
    completed: 3,
    failed: 4,
  });

  const PRIORITY_ORDER = Object.freeze({
    high: 1,
    low: 2,
  });

  switch (basis) {
    case "priority":
      return [...tasks].sort(
        (a, b) =>
          PRIORITY_ORDER[a.taskPriority?.toLowerCase()] -
          PRIORITY_ORDER[b.taskPriority?.toLowerCase()],
      );

    case "type":
      return [...tasks].sort(
        (a, b) => STATUS_ORDER[a.status] - STATUS_ORDER[b.status],
      );

    case "default":
      return [...tasks];

    case "dueDate":
      return [...tasks].sort(
        (a, b) => Date.parse(a.dueDate) - Date.parse(b.dueDate),
      );

    default:
      return [...tasks];
  }
};
