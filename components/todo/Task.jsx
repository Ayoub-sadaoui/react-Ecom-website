const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`}>
      <div>
        <h3>
          <input
            type="checkbox"
            checked={task.reminder}
            onClick={() => onToggle(task.id)}
          />
          {task.text}
        </h3>
        <div
          className="btn"
          style={{ backgroundColor: "red" }}
          onClick={() => onDelete(task.id)}
        >
          del
        </div>
      </div>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
