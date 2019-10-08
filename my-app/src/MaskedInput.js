import React from 'react'

export type Props = React.HTMLProps<HTMLInputElement> & {
    mask: strings;
    value: string;
    onChange: (value: string) => void;
}

export class MaskedInputed extends React.Components<Props> {
    handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { onChange } = this.props
        const { value } = e.currentTarget
        const cleanValue = value.replace(/[^\d]/g,'')
        onChange(cleanValue)
    }

    static format (value: string, mask: string): string{
        let i = 0;
        let lastReplasedIndex = -1
        const filledMask = mask.replace(/#/g, ()=>{
            if( i >= value.length){
                return '#';
            }
            lastReplasedIndex = j
            return value[i++]
        })
        return filledMask.substring(0,lastReplasedIndex + 1)
    }

    render(){
        const{value,mask ...otherProps} = this.props
        return (
            <input
                value = {value}
                onChange = { this.handelChange}
                {...othersProps}
                />
        )
    }
}