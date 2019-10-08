import React , { useContext}from 'react';
import PropTypes from 'prop-types';
import Context from '../context';
import { OutlinedInput ,Hidden , InputAdornment , MenuItem, TextField} from '@material-ui/core';
import NumberFormat from 'react-number-format';
/*
const styles = theme => ({
    notchedOutline: {
        borderWidth: "1px",
        borderColor: "yellow !important"
    }
});*/

const styles ={
    li:{
        //display: 'flex',
        justifyContent: 'space-beetween',
        //aliginItems: 'center',
        //padding: '.5rem 1rem',
        //border: '1px solid #ccc',
        //borderRadius: '4px',
        marginBottom: '.5rem'
    },
}
/*
    input:{
        marginRight: '1rem',
        size: '150px',
    },
    rm: {
    background: 'red',
    borderRadius: "50%",
    collor: '#fff',
    border: "none",
    },
    done: {
        textDecoration: "line-through",
    }
}
*/
const suggestions = [
    { label: 'Саратов' },
    { label: 'Москва' },
    { label: 'Ростов-на-Дону' },
    { label: 'Санкт-Пкткрбург' },
];
function TodoItem({todo,ind, onChange}) {
    const {removeTodo} = useContext(Context)
    console.log(todo)
    const clases = []
    if(todo.completed){
        clases.push('done')
    }
    return(
        <li style={styles.li}>
            < NumberFormat  customInput = { TextField }  format = {todo.format} variant="outlined" label={todo.label} fullWidth = "true" required={todo.hiden} error={todo.error}  type= {todo.type} placeholder={todo.title} onChange = {(event)=>onChange(todo.id , event.target.value)} />
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    ind: PropTypes.number,
    onChange: PropTypes.func.isRequired,
}


export default TodoItem