import React from "react";
import { taskList } from "../constants/taskList";
import { useHover } from "../hooks/useHover";
import styles from "./TaskColumn.module.css";

const TaskColumn = ({ taskColumn, tasks }) => {
  const [hoverRef, isHovering] = useHover();
  const {
    child,
    childHeader,
    addButton,
    cardNote,
    childTitle,
    childCount,
    cardNoteContainer,
    cardTitle,
    cardDescription,
  } = styles;
  const { title, standard, muted, superMuted, hover, border, type } =
    taskColumn;

  // todo implement with query
  // const columnTasks = taskList.filter((x) => x.status === type);

  return (
    <div key={title} className={`${child} ${superMuted}`}>
      <div className={childHeader}>
        <span className={`${childTitle} ${standard}`}>{title}</span>
        <span className={`${childCount} ${muted} ${standard}`}>
          {tasks.length}
        </span>
      </div>
      <button
        ref={hoverRef}
        className={`${addButton} ${standard} ${
          isHovering ? hover : muted
        } ${border}`}
      >
        +
      </button>
      <div className={`${cardNoteContainer} ${border}`}>
        {tasks.map((task) => (
          // key should be the id of the task
          <div key={task.title} className={`${cardNote}`}>
            <span className={`${cardTitle}`}>{task.title}</span>
            <span className={`${cardDescription}`}>{task.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
