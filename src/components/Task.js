import React from 'react'
import { FaTimes } from 'react-icons/fa'
// aqui ó: ontoggle(task.id) n ta virando

const Task = ({ task, onDelete, onToggle }) => {
  return ( <div className={`task ${task.reminder ?
    'reminder' : '' }`} onDoubleClick={() => 
    onToggle(task.id)}> 
     <h3>{task.text} <FaTimes style={{ color:'lightgreen',
     cursor: 'pointer' }}
     onClick={() => onDelete (task.id)}
      />
     </h3>
     <p>{task.day}</p>   
    </div>
  )
}

export default Task