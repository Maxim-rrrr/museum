import React, {useEffect, useState} from 'react';



const Textarea = (props) => {
  const textareaStyle = {
    height: "50vh",
    width: props.full ? "80%" :"45%",
    border: "3px solid #D9DAD2",
    borderRadius: "5px",
    background: "transparent",
    resize: "none",
    color: "#D9DAD2",
    fontSize: "1.2rem"
  }

  if (props.full) {
    textareaStyle.margin = "0 auto"
  }

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    props.setContent(event.target.value) 
  }

  return (
    <textarea 
      style={ textareaStyle } 
      value = { value }
      onChange={ (event) => handleChange(event) }
      placeholder = "Текст"
    ></textarea>
  )
}

export default Textarea