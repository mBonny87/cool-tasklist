import { taskStatus } from "../types/taskStatus";

const lists = [
  {
    title: "To do",
    tasks: 1,
    standard: "text-blue-500",
    muted: "bg-blue-200",
    superMuted: "bg-blue-100",
    hover: "bg-blue-300",
    border: "border-blue-500",
    type: taskStatus.toDo,
  },
  {
    title: "In progress",
    tasks: 2,
    standard: "text-sky-500",
    muted: "bg-sky-200",
    superMuted: "bg-sky-100",
    hover: "bg-sky-300",
    border: "border-sky-500",
    type: taskStatus.inProgress,
  },
  {
    title: "Completed",
    tasks: 3,
    standard: "text-emerald-500",
    muted: "bg-emerald-200",
    superMuted: "bg-emerald-100",
    hover: "bg-emerald-300",
    border: "border-emerald-500",
    type: taskStatus.completed,
  },
];

export { lists };
