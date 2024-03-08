import ToDoList from "./ToDoList";
import Pomodoro from "./components/pomodorTimer/Pomodoro";

const App = () => {
  return (
    <div>
      <Pomodoro />
      <ToDoList />
    </div>
  );
};

export default App;
