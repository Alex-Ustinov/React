import React from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types'


const styless = {
    ul:{
        listStyle: 'none',
        margin: 0,
        padding: 0,
    }
}

function TodoList(props){

    return (
        <ul style={styless.ul}>
            {props.todos.map((todo,index) => {
                return <TodoItem todo={ todo } key={ todo.id} ind = {index} onChange={props.onToggle} />
            })}
        </ul>
    )
}

TodoList.protoTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList