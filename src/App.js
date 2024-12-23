import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (newTask) => {
    setTasks((prevState) => [...prevState, newTask]);
  };
  const deleteTask=(taskId)=>{
    setTasks((prevState)=> prevState.filter((task)=> task.id !==taskId))
  }
  const editTask=(taskId,newText)=>{
    setTasks((prevState)=>
      prevState.map((task)=>{
        return task.id===taskId ?{ ...task, text: newText}:task;
      })
    )
  }
  return (
    <div className="App">
      <h1>To do list</h1>
      <AddTask addTask={addTask}/>
      <TodoList tasks={tasks} deleteTask={deleteTask} editTask={editTask}/>
    </div>
  );
}

export default App;
