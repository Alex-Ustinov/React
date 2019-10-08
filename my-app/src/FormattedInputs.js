import React from 'react';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
//import { withStyles } from 'material-ui/styles';
import { TextField  } from '@material-ui/core';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        margin: theme.spacing.unit,
    },
});

const TextMaskCustom = (props) => {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={inputRef}
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
};

class FormattedInputs extends React.Component {
    state = {
        textmask: '(1  )    -    ',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <TextField
                    id="maskExample"
                    label="Mask Example"
                    className={classes.textField}
                    margin="normal"
                    InputProps={{
                        inputComponent: TextMaskCustom,
                        value:this.state.textmask,
                        onChange: this.handleChange('textmask'),
                    }}
                />
            </div>
        );
    }
}

FormattedInputs.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default FormattedInputs
//export default withStyles(styles)(FormattedInputs);