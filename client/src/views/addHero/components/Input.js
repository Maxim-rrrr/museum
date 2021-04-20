import React, { useState, useEffect } from 'react';
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { withStyles, makeStyles } from '@material-ui/core/styles';

const CssTextField = withStyles({
  root: {
    marginTop: "2rem",
    '& input': {
      color: '#C4C4C4',
    },
    '& label': {
      color: '#C4C4C4',
    },
    '& label.Mui-focused': {
      color: '#C4C4C4',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#C4C4C4',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#C4C4C4',
      },
      '&:hover fieldset': {
        borderColor: '#C4C4C4',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#C4C4C4',
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  input: {
    width: "100%"
  }
}));

const Input = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState("")

  const handleChange = (event) => {
    setValue(event.target.value);
    
  };

  useEffect(() => {
    props.setContent(value) 
  }, [value]);

  return (
    <CssTextField 
      className={classes.input} 
      variant="outlined" 
      label="Подпись (Необязательно)" 
      value = { value }
      onChange = { event => { handleChange(event) } }
      required = { props.required }
    />
  )
}

export default Input
