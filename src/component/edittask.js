import Addtask from './addtask'
import { useState } from 'react'

const Edittask = ({ onEdittask, Edittask , task_for_edit }) => {
    const [task ,setTask] = useState('')
    const [time ,setTime] = useState('')
    const [reminder ,setReminder] = useState(false)

    return (
        <><form className='edit-form'>
            <div className='form-control'>
                <label> TASK </label>
                <input type='text' placeholder={" Add  task "}
                    value={task} onChange={(e) => setTask(e.target.value)} />
            </div>
            <div className='form-control'>
                <label> Day and Time </label>
                <input type='datetime-local' placeholder={"Add timing"}
                    value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
            <div className='form-control-check'>
                <label> Reminder </label>
                <input type='checkbox'
                    value={reminder} // onChange = {(e)=> setReminder(e.target.value === 'false')}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                    checked={reminder} />
            </div>
            <input type='submit' value='Save task'
                className='btn btn-block' />
        </form>
        
        {/* <Addtask onClick={onEdittask}
            Edittask={Edittask}
            task_for_edit={task_for_edit} />
         */}
         
        </> 
 )
}

export default Edittask