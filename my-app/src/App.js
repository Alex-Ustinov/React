import React, {useState} from 'react';
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
import SecondForm from "./Todo/SecondForm";

const styles = {
    li:{
        justifyContent: 'space-beetween',
        marginBottom: '.5rem'
    },
    div:{
        visibility:'hidden',
    }
}

function App(props) {
    const [todos,setTodos] = React.useState([
        {id:2, error: false, label: "Дата рождения" ,title: "Дата рождения" , value: '', format:"## ## ####", thousandSeparator:false },
        {id:3, error: false, label: "Ежемесячный доход",  title: "0" , value: '', format: "### ### ### ###", thousandSeparator:true },
        {id:4, error: false, label: "Телефон",  title: "+7(000)000-00-00" , value: '', format:"+7 (###) ###-####" , thousandSeparator:false },
    ])

    const [dataFio, setFio] = useState('')
    const [seconForm , getSecondForm] = useState(false)
    const [checkBox , setCheckBox] = useState(false)

    function toggleTodo (id, eventValue) {
        setTodos(
            todos.map(todo => {
                if((!eventValue) && (Number(id )=== Number(todo.id))){
                    todo.error = !todo.error
                }else if((eventValue) && (Number(id )=== Number(todo.id))){
                    todo.value = eventValue
                }
                return todo
            })
        )
    }
    let destination = []

    function updateData (value) {
        destination.length = 0
        destination.push(value)
        return destination
    }

    function setFioPeople (e){
        setFio([
            {value: e.target.value}
        ])
    }

    let namePeople = ''
    function getFio(e){
        namePeople = e.target.value
    }

    function vefificationFerstForm (answer){
        if(checkBox){
            getSecondForm(answer)
        }
    }

    const { classes } = props;
    return (

            <Context.Provider value = {{todos: todos}}>
                <Credit/>
                    <div id="information" className='wrapper_bloc'>
                        <div className={seconForm ? 'wrapper_bloc_hide' : 'wrapper_bloc'}>
                            <h2>Заявка на получение кредита</h2>
                            <TextField variant="outlined" label="ФИО" fullWidth = "true"  placeholder="ФИО" className = {classes.li} onChange = {setFioPeople}/>
                            <TodoList todos={ todos } onToggle = {toggleTodo}/>
                            <AutoCompleteText getStatePlase = {updateData}/>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value={checkBox}
                                        color="primary"
                                        onChange={(e)=>{setCheckBox(true) }}
                                    />
                                }
                                label="Даю согласие на обработку своих персональных данных в соответствии с"
                            />
                            <AddTodo dataDestination = {destination} fio = {dataFio} response = {vefificationFerstForm}/>
                        </div>
                        {seconForm &&  <SecondForm/>}
                    </div>

            </Context.Provider>

    )
}
//export default App;
export default withStyles(styles)(App);
