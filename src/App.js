import Header from './component/headers'
import Tasks from './component/tasks'
import Addtask from './component/addtask'
import Edittask from './component/edittask'
import {useState, useEffect} from 'react'

function App() {

  const [EnableAddTask, setEnableAddTask] = useState(false)
  const [EditTask, setEditTask] = useState(false)
  const [tasks, setTasks]  = useState([])
    
  const  fetchTasks = async ()=> {
    const res = await fetch ( 'http://localhost:5000/tasks/')
    const data = await res.json()
    console.log(data)
    return data
  }

  const  fetchTask = async (id)=> {
    const res = await fetch ( `http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    console.log(data)
    return data
  }

  useEffect(() => {
    const getTasks = async () => {
    const tasks = await fetchTasks()
    setTasks(tasks)
  }
    getTasks()
  },[])
   
    const add_task = async (task) => {
    console.log('task', task)
    // const id_new = Math.floor(Math.random() * 100)
    // const newtask = {id_new, ...task}
    const res =    await fetch(`http://localhost:5000/tasks/`, { method:'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body : JSON.stringify(task)
  })
   const data = await res.json()
   setTasks([...tasks, data])
  }

  const edit_task = async (id) => {
    console.log("edit", id)
    const tasktoedit = await fetchTask(id)
    console.log('tasktoedit', tasktoedit)
    setEditTask(!EditTask)
  }

  const delete_task = async (id) => {
    console.log('delete' , id)
    await fetch(`http://localhost:5000/tasks/${id}`, {method:'DELETE'})
    setTasks(tasks.filter((task)=> task.id !== id ))
  }

  const toggle_reminder = async (id) => {
    const tasktotoggle = await fetchTask(id)
    const updatedtask = {...tasktotoggle, reminder: !tasktotoggle.reminder}
    const res =  await fetch(`http://localhost:5000/tasks/${id}`, { method:'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body : JSON.stringify(updatedtask)
  })
   const data = await res.json()
    console.log('id and data' , id,data)
    setTasks(tasks.map((task)=> (task.id === id ? {...task ,reminder : data.reminder} : task)))
  }

  return (
    <div className='container'>
      <Header onEnableAddTask={() => setEnableAddTask(!EnableAddTask)}
      EnableAddTask = {EnableAddTask}
      />
      {EnableAddTask && <Addtask onAddtask = {add_task}/> }
      {EditTask && <Edittask 
        onEdittask={() => setEditTask(!EditTask)}
        // onEdittask = {edit_task}
        Edittask = {EditTask} 
        task_for_edit = {{task: 'am i working', time : '2022-04-29'}} /> } 
      {tasks.length > 0 ?
      <Tasks tasks= {tasks} 
        onDelete = {delete_task} 
        onToggle = {toggle_reminder}
        onEdit = {edit_task}
        onAddtask = {add_task} /> 
          : 'NO Tasks to Show!' }
    </div>
  );
}

export default App;
