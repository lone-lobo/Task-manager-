import { FaTimes } from 'react-icons/fa'
import { MdModeEditOutline } from 'react-icons/md'
import  { useState} from 'react'

const Task = ({ task, onDelete, onToggle, onEdit ,onAddtask , Edittask=false}) => {
    const [task_edit ,setTask_Edit] = useState('')
    const [time_edit ,setTime_Edit] = useState('')

    return (
        <div
            className={`task ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => onToggle(task.id)}
        >
        {/* <form  onSubmit={ onSubmit}>  */}
         < div className='container_task'>
            <div className='task' >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>{Edittask ?  <input type = 'text' placeholder= {task.task } 
                value = {task_edit} onChange = {(e)=> setTask_Edit(e.target.value)}/> : task.task}</h3>
                <div>
                    { !Edittask && <MdModeEditOutline 
                     onClick = {() => onEdit(task.id)}/>  }

                    { Edittask &&  <input type = 'submit' value = 'Update task'
                                 onClick = {onAddtask ( { task : task_edit , time : time_edit }) }        />}
                    <FaTimes
                        style={{
                            marginLeft:'10px',
                            color: 'red',
                            cursor: 'pointer',
                        }}
                        onClick={() => onDelete(task.id)}
                    />
                </div>
            </div>
            </div>
            <p>{Edittask ?  <input type = 'datetime-local' placeholder= {task.time} 
                value = {time_edit} onChange = {(e)=> setTime_Edit(e.target.value)}/> : (new Date(task.time)).toLocaleString()}
                
                 {/* {(new Date(task.time)).toLocaleString()} */}
            </p>
            </div>
            {/* </form> */}
        </div>
            
    )
}

export default Task