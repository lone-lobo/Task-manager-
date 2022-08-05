import Button from './button'

const Header  = ( { title , onEnableAddTask, EnableAddTask}) => {
     return (
         <header className= 'header'>
            <h1>

             {title}
            </h1>
            <Button text =  {EnableAddTask ? 'Close': ' ADD'} 
            colour = {EnableAddTask ? 'red' : 'green'} 
            onClick = {onEnableAddTask}/>
         </header>
     )
}

Header.defaultProps = {
 title : 'Task tracker',
}
 
export default Header