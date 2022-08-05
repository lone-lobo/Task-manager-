import Task from './task'

const Tasks =  ({tasks, onDelete, onToggle, onEdit, onAddtask}) => {
    return (
        <div >
            {tasks.map((task) => (
            <Task key = { task.id } 
            task= {task}
            onDelete = {onDelete}
            onToggle =  {onToggle}
            onEdit = {onEdit}
            onAddtask = {onAddtask}/>
            ))}
        
        </div>
    )
}

export default Tasks