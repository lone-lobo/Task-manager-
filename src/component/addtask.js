import  { useState} from 'react'

const Addtask = ( { onAddtask , Edittask , task_for_edit}) =>{
    const [task ,setTask] = useState('')
    const [time ,setTime] = useState('')
    const [reminder ,setReminder] = useState(false)
    
    const onSubmit = (e)=> {
        e.preventDefault()
        if ( !task) {
            alert ('add task before submiting')
            return
        }
        onAddtask ({task, time , reminder})
        setTask('')
        setTime('')
        setReminder(false)

    }

    return (
        <form className = 'add-form' onSubmit={ onSubmit}>
            <div className = 'form-control'>
                <label  > TASK </label>
                <input type = 'text' placeholder= {Edittask ? `${task_for_edit.task}` :  " Add  task " }
                value = {task} onChange = {(e)=> setTask(e.target.value)}/>
            </div>
            <div className = 'form-control'>
                <label > Day and Time </label>
                <input type = 'datetime-local' placeholder= {Edittask ? `${task_for_edit.time}` :  "Add timing" }
                value = {time} onChange = {(e)=> setTime(e.target.value)} />
            </div>
            <div className = 'form-control-check'>
                <label > Reminder </label>
                <input type = 'checkbox'
                value = {reminder}  // onChange = {(e)=> setReminder(e.target.value === 'false')}
                onChange = {(e)=> setReminder(e.currentTarget.checked)}
                checked = {reminder}
                // onClick = {(e)=> setReminder(e.target.value === 'true')} 
                />
            </div>
        <input type = 'submit' value = 'Save task'
         className = 'btn btn-block'
        //  onClick = {onAddtask}
         />
        </form>
    )

}

export default Addtask