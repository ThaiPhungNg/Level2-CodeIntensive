import React from 'react'

const TaskItem = ({task}) => {
  return (
    <li className="items">
        <div className="items-text">
            <input type='checkbox'/>
            <p>{task.taskName}</p>
        </div>
    </li>
  )
}

export default TaskItem