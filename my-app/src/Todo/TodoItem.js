import React , { useContext}from 'react';
import PropTypes from 'prop-types';
import Context from '../context';
import { OutlinedInput ,Hidden , InputAdornment , MenuItem, TextField} from '@material-ui/core';
import NumberFormat from 'react-number-format';


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

const suggestions = [
    { label: 'Саратов' },
    { label: 'Москва' },
    { label: 'Ростов-на-Дону' },
    { label: 'Санкт-Пкткрбург' },
];
function TodoItem({todo,ind, onChange}) {
    const {removeTodo} = useContext(Context)
    return(
        <li style={styles.li}>
            < NumberFormat  customInput = { TextField }  format = {todo.format} variant="outlined" label={todo.label} fullWidth = "true"  error={todo.error} placeholder={todo.title} onChange = {(event)=>onChange(todo.id , event.target.value)} />
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    ind: PropTypes.number,
    onChange: PropTypes.func.isRequired,
}


export default TodoItem
