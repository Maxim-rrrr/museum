import React, {useEffect, useState} from 'react';

const textareaStyle = {
  height: "50vh",
  width: "45%",
  border: "3px solid #D9DAD2",
  borderRadius: "5px",
  background: "transparent",
  resize: "none",
  color: "#D9DAD2",
  fontSize: "1.2rem"
}

const Textarea = (props) => {
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
    ></textarea>
  )
}

export default Textarea