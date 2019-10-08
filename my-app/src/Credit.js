import React, {Component,PureComponent,useState} from 'react';
import './Credit.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import {Checkbox, FormControlLabel, TextField ,OutlinedInput , Button} from '@material-ui/core/'


class Credit extends PureComponent{

    constructor(props){

        super(props)
        this.state = {
            creditValue: 500000,
            procent: 11.9,
            countMonth: 60,
            activeIndex: null,
        }
        const inProcent = this.state.procent / 10000
        const defMonth = (this.state.creditValue * (inProcent + (inProcent / (1+inProcent) * (this.state.countMonth-1)))).toFixed(3)
        this.state.monthPay = defMonth
        this.getPeriod = getPeriod.bind(this)
    }


    render() {
        const dataButton= [
            {id:1, completed:false, value:12},
            {id:2, completed:false, value:24},
            {id:3, completed:false, value:36},
            {id:4, completed:false, value:48},
            {id:5, completed:false, value:60},
        ]
        //<Slider id="amountCredit" onChange={this.sentAmountCredit}  max="1000000" min="75000" defaultValue={this.state.creditValue}/>
        return (

                <div className="main_bloc">
                    <div className='wrapper'>
                        <h2>Рассчитайте кредит</h2>
                        <OutlinedInput type="number" fullWidth="true" value={ this.state.creditValue} onChange={this.sentAmountCredit}/>
                        <input type="range" id="amountCredit" onChange={this.sentAmountCredit} className="App-input__range" min="75000" max="1000000" value={this.state.creditValue}/>


                        <div className="radio_buttons__div">
                            { dataButton.map((function(clickable, i) {
                                return <div key={ clickable.id }
                                            value={ clickable.value }
                                            index={ clickable.id }
                                            className={this.state.activeIndex == clickable.id ? "radio_buttons_push" : "radio_buttons"}
                                            onClick={ this.getPeriod }
                                >{ clickable.value }</div>
                            }).bind(this))
                            }
                        </div>
                    </div>



                    <div className="div_information">

                            <h2>{this.state.monthPay}</h2>
                            <p>Ежемесячный платёж</p>


                            <h2>{this.state.procent}</h2>
                            <p>Процентная ставка</p>


                            <h2>{this.state.creditValue}</h2>
                            <p>Сумма кредита</p>

                        <Button size = "large" variant="contained" color="secondary">Оформить заявку</Button>

                    </div>
                </div>
        )
    }
    sentAmountCredit = (e) => {

        var value = e.target.value

        const countMonth = this.state.countMonth

        const inProcent =  this.state.procent / 10000

        const period = countMonth-1

        const res = (this.state.creditValue*(inProcent + (inProcent / (1+inProcent)*period))).toFixed(3)

        this.setState({
            creditValue: value,
            monthPay: res,
        })
    }
}

function getPeriod (eve) {
    //eve.target.className="radio_buttons_push"
    const countMonth = eve.target.getAttribute('value')
    const isActive = eve.target.getAttribute('index')

    const inProcent =  this.state.procent / 10000

    const period = countMonth-1

    const res = (this.state.creditValue*(inProcent + (inProcent / (1+inProcent)*period))).toFixed(3)

    this.setState({
        countMonth: countMonth,
        monthPay: res,
        activeIndex: isActive
    })
}

export default Credit;
