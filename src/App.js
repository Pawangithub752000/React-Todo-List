import React, {useState} from 'react';
import trashIcon from './trash.svg'



function App() {
  const [taskInput, updateTaskInput] = useState("") 
  const [toDoList, updateToDoList] = useState([]);

  const addNote = () => {
    toDoList.push({description: taskInput, isComplete: false})
    updateToDoList(toDoList)
    updateTaskInput("")
  }

  const deleteTask = (index) => {
    const newList=toDoList.filter((item,i)=> i!==index);
    updateToDoList(newList)
  }

  const markComplete = (index) => {
    const list = [...toDoList]; // copy all toDolist in list
    list[index].isComplete = true; // hard code
    
    updateToDoList(list)
  }

  return (
    <div className="app-background">
      <p className="heading-text">React To Do List 🔥</p>
      <div className="task-container">
        <div>
          <input className="text-input" value={taskInput} 
          onChange={(event)=>updateTaskInput(event.target.value)} />
          <button className="add-button" onClick={addNote}>ADD</button>
        </div>
       {toDoList?.length? toDoList.map((toDoObject,index)=>
       <ListItem index={index} itemData={toDoObject} 
       deleteTask={deleteTask} markComplete={markComplete}/>) :

       <p className="no-item-text">No Task Added !</p>}
       
      </div>
      <p className="footer-text">Pawan Prajapati</p>
    </div>
  );

}

function ListItem(props) {
  return (
    <div className="list-item row jc-space-between">
      <span className={props.itemData.isComplete?"task-complete":""}
      onClick={() =>props.markComplete(props.index)}>
        {props.itemData.description}
        </span>
      <img src={trashIcon} className="delete-icon"
      onClick={()=> props.deleteTask(props.index)}/>
    </div>
 )
}

export default App;   

