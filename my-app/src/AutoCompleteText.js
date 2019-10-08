import React from 'react'
import { ListItem ,OutlinedInput ,Hidden , InputAdornment , MenuItem, TextField} from '@material-ui/core';
export default class AutoCompleteText extends React.Component{
    constructor (props){
        super(props)

        this.items = [
            'Московская область',
            'Саратовская область',
            'Ростовская область',
        ];

        this.towns = {
            'Московская область':['Москва','Балашиха','Химки'],
            'Саратовская область':['Саратов','Балаково','Петровск'],

        }

        this.state = {
            suggestions: [],
            text: '',
            textTown:'',
            suggestionsTown: [],
            statusFieldTown: false,
        }
    }

    onTextChanged = (e) => {
        const value = e.target.value
        console.log(value)
        /*
        let suggestions =[]
        if(value.length > 0 ){
            const regex = new RegExp(`^{value}`,'i')
            //console.log(regex)
            suggestions = this.items.sort().filter((v) => {regex.test(v)
                console.log(regex.test(v))})
                //console.log(suggestions)
        }
        //console.log(suggestions)
        this.setState(()=>({suggestions}))
        */
        if(value.length === 0){
            this.setState(()=>({
                suggestions: [],
                text:value,
                statusFieldTown: !this.state.statusFieldTown
            }))
        }else{
            const regex = new RegExp(`^${value}`,'i')
            const suggestions = this.items.sort().filter(v=>regex.test(v))
            this.setState(()=>({suggestions:suggestions,text:value}))
        }

    }

    suggestionSelected(value){
        this.setState(()=>({
            text: value,
            suggestions: [],
            statusFieldTown: !this.state.statusFieldTown
        }))
    }


    renderSuggestion () {
        const {suggestions} = this.state
        if(suggestions.length === 0){
            return null
        }
        return (
            <ul>
                {suggestions.map((item) => <ListItem onClick={()=>(this.suggestionSelected(item))}>{item}</ListItem>)}
            </ul>
        )
    }


    onTextChangedTown = (event) => {
        const value = event.target.value
        const district = this.state.text

        console.log('Wait '+value)

        if(value.length === 0){
            this.setState(()=>({
                suggestionsTown: [],
                textTown:value,
            }))
        }else{
            const regex = new RegExp(`^${value}`,'i')
            const town = this.towns
            var textTown = ''
            var suggestionsTown = []
            for(var k in town){
                if(district == k){
                    //const suggestionsTown = town[k].sort().filter(v=>regex.test(v))
                    suggestionsTown = town[k].sort().filter(v=>regex.test(v))
                }
            }
            this.setState(()=>({suggestionsTown:suggestionsTown,textTown:value}))
        }

    }

    renderSuggestionTown () {
        const suggestionsTown = this.state.suggestionsTown
        if(suggestionsTown.length === 0){
            return null
        }
        return (
            <ul>
                {suggestionsTown.map((item) => <ListItem onClick={()=>(this.suggestionSelectedTown(item))}>{item}</ListItem>)}
            </ul>
        )
    }

    suggestionSelectedTown(value){
        this.setState(()=>({
            textTown: value,
            suggestionsTown: [],

        }))
    }

    render() {
        const text = this.state.text
        const textTown = this.state.textTown
        var stateFieldTown = (this.state.statusFieldTown) ? "text" : "hidden"

        return (
            <div>
                <OutlinedInput key = "1" fullWidth = "true"  placeholder="Регион проживания" value={text} onChange={this.onTextChanged} type="text"/>
                {this.renderSuggestion()}
                <OutlinedInput key = "2" fullWidth = "true"  placeholder="Город проживания" value={textTown} onChange={this.onTextChangedTown} type={stateFieldTown}/>
                {this.renderSuggestionTown()}
            </div>
        )
    }
}