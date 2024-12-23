import React from "react";
import { useState } from "react";

function Todo(props) {
  const { task } = props;
  const [isEditing, setIsEditing]=useState(false);
  const [editedTaskText, setEditedTaskText]=useState(props.task.text);

  const handleChange=(event)=>{
    setEditedTaskText(event.target.value)
  }
  const handleEdit=()=>{
    setIsEditing(true)
  }
  const handleSave=()=>{
    props.editTask(task.id, editedTaskText);
    setIsEditing(false);
  }
  
  const handleDelete =()=>{
    props.deleteTask(task.id)
  }
  return (
    <div>
      <li>
        {isEditing?(
          <div>
            <input type="text" value={editedTaskText} onChange={handleChange}/>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        ):(
          <div>
            {task.text}
            <button onClick={handleEdit}>Edit </button>
            <button onClick={handleDelete}>Delete </button>
          </div>
        )
        }
      </li>
    </div>
  );
}

export default Todo;
