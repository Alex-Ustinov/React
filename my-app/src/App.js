import React from 'react';
import TodoList from "./Todo/TodoList";
import './App.css'
import Context from './context'
import AddTodo from "./Todo/AddTodo";
import {Checkbox, FormControlLabel, TextField} from '@material-ui/core/'
import AutoCompleteText from './AutoCompleteText'
import Credit from "./Credit";
import NumberFormat from 'react-number-format';
import InputMask from "react-input-mask";

function App() {
    const [todos,setTodos] = React.useState([
        {id:1,add:false, type: "text", error: false, label:"ФИО", title: "ФИО" , value: '', thousandSeparator:false},
        {id:2,add:false, type: "text", error: false, label: "Дата рождения" ,title: "Дата рождения" , value: '', format:"## ## ####", thousandSeparator:false },
        {id:3,add:false, type: "text", error: false, label: "Ежемесячный доход",  title: "0" , value: '', format: "### ### ### ###", thousandSeparator:true },
        {id:4,add:false, type: "text", error: false, label: "Телефон",  title: "+7(000)000-00-00" , value: '', format:"+7 (###) ###-####" , thousandSeparator:false },
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

        setTodos(todos.concat([{

        }]))
    }


    return (

            <Context.Provider value = {{removeTodo: removeTodo}}>
                <Credit/>
                    <div className='wrapper'>
                        <h2>Заявка на получение кредита</h2>
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
export default App;