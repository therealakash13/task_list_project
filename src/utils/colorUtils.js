export const getPriorityColor = (priority) => {
  if (priority.toLowerCase() === "high") return "bg-orange-600";
  else if (priority.toLowerCase() === "low") return "bg-amber-500";
};