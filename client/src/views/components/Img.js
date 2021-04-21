import React, { useEffect, useState } from "react"

const Img = (props) => {

  const [style, setStyle] = useState({
    ...props.style,
    display: "block",
    margin: "auto",
    height: "65vh"
  })

  function setSize(heightPage, widthPage) {
    const img = document.getElementById(props.src)
    
    let imgHeight = img.naturalHeight
    let imgWidth = img.naturalWidth

    let boxHeight
    let boxWidth

    if (widthPage <= 860) {
      boxHeight = heightPage * 0.8
      boxWidth = widthPage * 0.9
    } else if (props.full) {
      boxHeight = heightPage * 0.65
      boxWidth = widthPage * 0.9
    } else {
      boxHeight = heightPage * 0.65
      boxWidth = widthPage * 0.45
    }


    let coefficientHeight = boxHeight / imgHeight
    let coefficientWidth = boxWidth / imgWidth

    if (coefficientHeight < coefficientWidth) {
      setStyle({
        ...style, 
        height: imgHeight * coefficientHeight,
        width: "auto"
      })
    } else {
      setStyle({
        ...style, 
        height: "auto",
        width: imgWidth * coefficientWidth
      })
    }
  }

  useEffect(() => {
    setSize(props.height, props.width)
  }, [props.height, props.width])

  useEffect(() => {
    setSize(window.innerHeight, window.innerWidth)
  }, [])

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