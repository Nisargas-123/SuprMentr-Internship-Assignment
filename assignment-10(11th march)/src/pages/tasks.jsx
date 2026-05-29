import { useState } from "react";

function Tasks() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div>
      <h1>Task List</h1>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;