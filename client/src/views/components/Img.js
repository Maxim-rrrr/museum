import React, { useEffect, useState } from "react"

const Img = (props) => {

  const [style, setStyle] = useState({
    ...props.style,
    display: "block",
    margin: "auto"
  })

  useEffect(() => {
    const img = document.getElementById(props.src)
    
    let imgHeight = img.naturalHeight
    let imgWidth = img.naturalWidth

    let boxHeight
    let boxWidth

    if (props.width <= 860) {
      boxHeight = props.height * 0.8
      boxWidth = props.width * 0.9
    } else if (props.full) {
      boxHeight = props.height * 0.65
      boxWidth = props.width * 0.9
    } else {
      boxHeight = props.height * 0.65
      boxWidth = props.width * 0.45
    }


    let coefficientHeight = boxHeight / imgHeight
    let coefficientWidth = boxWidth / imgWidth
    let coefficient = coefficientHeight < coefficientWidth ? coefficientHeight : coefficientWidth

    setStyle({
      ...style, 
      height: imgHeight * coefficient,
      width: imgWidth * coefficient
    })

    console.log(imgHeight * coefficient,
      imgWidth * coefficient)
    
  }, [props.height, props.width])

  return (
    <img 
      id = { props.src }
      src = { props.src }
      className = { props.className }
      style = { style }
      alt = { props.alt }
    />
  )
}

export default Img