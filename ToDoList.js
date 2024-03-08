import { useState, useEffect } from "react";
import Header from "./components/todo/Header";
import Tasks from "./components/todo/Tasks";
import AddTask from "./components/todo/AddTask";

function ToDoList() {
  const [btn, setbtn] = useState(false);
  const toggle = () => {
    setbtn(!btn);
  };
  const [tasks, setTasks] = useState([]);

  // fetch the tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    };
    getTasks();
  }, []);

  // Add task function
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    console.log(data);
    console.log(tasks);

    setTasks([...tasks, data]);

    // console.log(task);
    // const id = Math.floor(Math.random() * 999) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  // Delete task function
  const deleteTask = async (id) => {
    alert("do you want to delete this task");
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
    console.log("delete", id);
  };

  // Toggle task reminder function
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });
    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        title="Todo List"
        btnTitle={btn ? "Close" : "Add"}
        toggle={toggle}
      />
      {btn && <AddTask onAdd={addTask} />}
      {tasks.length ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <h3>No task to show</h3>
      )}
    </div>
  );
}

export default ToDoList;
