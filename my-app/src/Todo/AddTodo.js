import React , {useState , createRef ,useContext }from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Context from '../context'


function AddTodo(props){
    const getAllData = useContext(Context)
    let answer = false
    function submitHandler (event){

        event.preventDefault()
        getAllData.todos.concat(props.fio)
        for(var g = 0; g<getAllData.todos.length;g++){
            if(getAllData.todos[g].value != ''){
                answer = true
            }else{
                answer = false
                break
            }
        }
        if(!answer) return props.response(answer)
        for(var f = 0; f<props.dataDestination.length;f++){
            for (var k in props.dataDestination[f]){
                if(props.dataDestination[f]['text'] != '' && props.dataDestination[f]['textTown'] != ''){
                    answer = true
                }else{
                    answer = false
                    break
                }
            }
        }
        return props.response(answer)
    }

    return(
            <form onSubmit={submitHandler}>
                <Button size = "large" variant="contained" color="secondary" type="submit">Далее</Button>
            </form>
    )
}

export default AddTodo
