import React , {useState}from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';
import Card from '@material-ui/core/Card';


function AddTodo({onCreate}){

    const primary = purple;

    const [value, setValue] = React.useState('')

    function submitHandler (event){
        event.preventDefault()
        if(value.trim()){
            onCreate(value)
            setValue('')
        }
    }

    return(
        <Card >
            <form style = {{marginBottom: '1rem'}} onSubmit={submitHandler}>
                <Button size = "large" variant="contained" color="secondary" type="submit">Далее</Button>
            </form>
        </Card>
    )
}

AddTodo.propType = {
    onCreate: PropTypes.func.isRequired
}
export default AddTodo
