import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, settext] = useState("");
  const [day, setday] = useState("");
  const [reminder, setreminder] = useState(false);

  const onsubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("please enter a task");
      return;
    }
    onAdd({ text, day, reminder });

    settext("");
    setday("");
    setreminder(false);
  };

  return (
    <form className="add-form" onSubmit={onsubmit}>
      <div className="form-control">
        <label> Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => {
            settext(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label> Day & day</label>
        <input
          type="text"
          placeholder="Add day & time"
          value={day}
          onChange={(e) => {
            setday(e.target.value);
          }}
        />
      </div>
      <div className="form-control form-control-check">
        <label> check reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          onChange={(e) => {
            setreminder(e.target.checked);
          }}
        />
      </div>
      <input type="submit" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
