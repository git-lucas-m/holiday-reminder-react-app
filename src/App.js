import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"
import AddTask from './components/AddTask'


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState (
    [
      {
          id: 1,
          text: "Holiday 1",
          day: "month, day at time",
          reminder: true,
      },
      {
          id: 2,
          text: "Holiday 2",
          day: "month, day at time",
          reminder: true,
      },
      {
          id: 3,
          text: "Holiday 3",
          day: "month, day at time",
          reminder: true,
      },
      ]
  )

// add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
const newTask = {id,...task}
setTasks([...tasks, newTask])

}



// Delete Task 

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder

const toggleReminder = (id) => {
setTasks(tasks.map((task) => task.id === id ?{ ...task, reminder: !task.reminder } : task))
}

  return (
    <div className="container"> 
      <Header onAdd={() =>  
      setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} 
      onDelete={deleteTask} 
      onToggle={toggleReminder} /> ) : ( 'No holiday to show'
      )
      }
    </div>
  )
}

export default App;
