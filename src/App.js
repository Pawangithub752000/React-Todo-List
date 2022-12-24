import React from 'react';
import trashIcon from './trash.svg'

function ListItem(props) {
  return (
    <div className="list-item row jc-space-between">
      <span>List Item</span>
      <img src={trashIcon} className="delete-icon"/>
    </div>

  )
}

function App() {
  return (
    <div className="app-background">
      <p className="heading-text">React To Do List 🔥</p>
      <div className="task-container">
        <div>
          <input className="text-input" />
          <button className="add-button">ADD</button>
        </div>
        <p className="no-item-text">No Task Added !</p>
        <ListItem />
      </div>
      <p className="footer-text">The Pawan Prajapati</p>
    </div>
  );

}

export default App;

