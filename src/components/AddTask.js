import React from 'react';
import { useState } from "react";

function AddTask(props) {
    const [newTask, setnewTask]=useState('')
   const handleChange =(event)=>{
    setnewTask(event.target.value)
   }  
   const handleSubmit =(event)=>{
    event.preventDefault()
    props.addTask({ id: Date.now(), text: newTask })
    setnewTask("")
   }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTask} onChange={handleChange} placeholder='Enter a task'/>
      <button type="submit">Add a task</button>
    </form>
  )
}

export default AddTask
