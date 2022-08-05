const Button  = ( { text , colour, onClick }) => {
    return (
           <button 
           className = 'btn'
           style = {{ backgroundColor : colour}}
           onClick = {onClick}
            > 
           { text }
            </button>
        
    )
}

Button.defaultProps = {
text  : 'ADD',
colour : 'green'
}

export default Button