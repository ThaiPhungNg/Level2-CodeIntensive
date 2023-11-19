import { useState } from 'react'

import './App.css'
import TaskInput from './components/TaskInput'
import TaskItem from './components/TaskItem';

function App() {
  const [toDoList, setToDoList] = useState([])

  const addTask = (taskName) =>{
    const newTask = {taskName, checked : false};
    setToDoList([...toDoList, newTask])
  };

  return (
    <>
      <div className="container">

        <h1>To Do List</h1>
        <TaskInput addTask = {addTask}/> 

        <div className="toDoList">
          <span> TO DO</span>
          <ul className='list-items'>
            { toDoList.map((task,key) =>(
              <TaskItem task={task} key ={key}/>
            ))

            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
