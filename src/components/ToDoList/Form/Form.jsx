import React from "react";
import {useState} from "react";
import {useEffect} from "react";
import { Task } from "../../../models/objectTask/objectTask";

const Form = (props)=>{
    const [description, setDescription] = useState("")
    const [priorityType, setPriority] = useState("")
    const [buttonStatus, isDisabled] = useState(true)

    const newTask = () =>{
       let order = 0;
       switch (priorityType){
         case 'prioridad-alta':
           order = 100
           break;
         case 'prioridad-media':
           order = 50
           break;
         default:
           order = 0
           break;
        }
        props.eventButton(new Task(description, priorityType, new Date(), false, order, localStorage.getItem('userId')))
        setDescription("")
        setPriority("")
    }

    useEffect(()=>{
      if(props.toEdit){
        setDescription(props.toEdit.description)
        setPriority(props.toEdit.priority_type)
      }
    },[props.toEdit])

    useEffect(() => {
      isDisabled(isEmptyForm())
    },[description, priorityType])

    function isEmptyForm(){
      return (description === "" || priorityType === "")
    }
    
    return(
      <>
      <div className="formListContainer">
            <input id="task" type="text" name="tarea" value={description} placeholder="Task Description" onChange={(e) => setDescription(e.target.value)} />
            <select name="priority" value={priorityType} id="priority" onChange={(e) => setPriority(e.target.value)}>
              <option value="" disabled>Priority</option>
              <option value="prioridad-baja">Low</option>
              <option value="prioridad-media">Medium</option>
              <option value="prioridad-alta">High</option>
            </select>
            <button className='addButton' id="add" type="button" onClick={newTask} disabled={buttonStatus}>Add!</button>
      </div>
        
      </>
    )
}
export default Form;




