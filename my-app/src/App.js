import React from 'react';
import TodoList from "./Todo/TodoList";
import './App.css'
import Context from './context'
import AddTodo from "./Todo/AddTodo";
import {Checkbox, FormControlLabel, TextField, Typography } from '@material-ui/core/'
import { OutlinedInput ,Hidden , InputAdornment , MenuItem} from '@material-ui/core';
import AutoCompleteText from './AutoCompleteText'
import Credit from "./Credit";
import { withStyles } from "@material-ui/core/styles";
import InputMask from "react-input-mask";

const styles = {
    li:{
        justifyContent: 'space-beetween',
        marginBottom: '.5rem'
    },
}

function App(props) {
    const [todos,setTodos] = React.useState([
        {id:2, error: false, label: "Дата рождения" ,title: "Дата рождения" , value: '', format:"## ## ####", thousandSeparator:false },
        {id:3, error: false, label: "Ежемесячный доход",  title: "0" , value: '', format: "### ### ### ###", thousandSeparator:true },
        {id:4, error: false, label: "Телефон",  title: "+7(000)000-00-00" , value: '', format:"+7 (###) ###-####" , thousandSeparator:false },
    ])

    function toggleTodo (id, eventValue) {
        setTodos(
            todos.map(todo => {
                if(!eventValue && (Number(id )=== Number(todo.id))){
                    todo.error = !todo.error
                    todo.value = eventValue
                }

                return todo
            })
        )
    }

    function removeTodo(id){
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo (data){

    }
    const { classes } = props;

    return (

            <Context.Provider value = {{removeTodo: removeTodo}}>
                <Credit/>
                    <div id="information"className='wrapper_bloc'>
                        <h2>Заявка на получение кредита</h2>
                        <TextField variant="outlined" label="ФИО" fullWidth = "true"  placeholder="ФИО" className = {classes.li}/>
                        <TodoList todos={ todos } onToggle = {toggleTodo}/>
                        <AutoCompleteText/>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Даю согласие на обработку своих персональных данных в соответствии с"
                        />
                        <AddTodo onCreate = {addTodo}/>
                    </div>
            </Context.Provider>

    )
}
//export default App;
export default withStyles(styles)(App);
