import React, {Component, useContext} from 'react';
import PropTypes from 'prop-types';
import { OutlinedInput ,Hidden , InputAdornment , MenuItem, TextField} from '@material-ui/core';
import NumberFormat from 'react-number-format';
import MaskedInput from 'react-text-mask'
import { makeStyles } from '@material-ui/styles';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const styles = {
    li:{
        justifyContent: 'space-beetween',
        marginBottom: '2rem',
        marginRight: '4.3rem',
        //marginLeft: '4rem',
    },
}

class SecondForm extends Component{
    constructor(props){
        super(props)
        this.state ={
            fields:[
                {id:1, error: false ,placeholder: "Место рождения" ,  label: "Место рождения" ,title: "Место рождения" , fullWidth: true , value: '', format:"## ## ####", type: 'OutlinedInput'},
                {id:2, error: false, placeholder: "Серия" , label: "Серия",  title: "Серия" , value: '', fullWidth: false ,format: "####", type: 'NumberFormat'},
                {id:3, error: false,  placeholder: "Номер",label: "Номер",  title: "Номер" , value: '', fullWidth: false, format:"######" , type: 'NumberFormat'},
                {id:4, error: false,  placeholder: "Код подразделения" ,label: "Код подразделения",  title: "Код подразделения" , fullWidth: false,value: '', format:"######", type: 'NumberFormat'},
                {id:5, error: false,  placeholder: "Дата выдачи" ,label: "Дата выдачи",  title: "Дата Выдачи" , value: '', fullWidth: false, format:"## ## ####" , type: 'NumberFormat'},
                {id:6, error: false,  placeholder: "Кем выдан", label: "Кем выдан" ,title: "Кем выдан" , value: '',fullWidth: true , format:"## ## ####", type: 'OutlinedInput'},
            ]
        }
    }
    render() {

        return(
                <ul>
                    {this.state.fields.map((field, index) => {
                   return <TextField placeholder = {field.placeholder} variant="outlined" label = {field.label} fullWidth = {field.fullWidth} className={this.props.classes.li}/>
                })}
                </ul>
        )
    }
}
export default withStyles(styles)(SecondForm);
