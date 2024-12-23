import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  const { tasks } = props;
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Todo key={task.id} id={task.id} task={task} deleteTask={props.deleteTask} editTask={props.editTask}/>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
