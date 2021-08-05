import React, { useEffect, useState, useRef } from "react"
import tape from "../../img/tape.png"

const Img = (props) => {
  const imgRef = useRef(null)

  const [style, setStyle] = useState({
    ...props.style,
    display: "block",
    height: "65vh"
  })

  function setSize(heightPage, widthPage) {
    const img = imgRef.current
    
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

    if (imgHeight && imgWidth) {
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
      return true
    } else {
      return false
    }
  }

  useEffect(() => {
    if (!setSize(props.height, props.width)) {
      let timer = setInterval(() => {
        if (setSize(window.innerHeight, window.innerWidth)) {
          clearInterval(timer)
        }
      }, 100)
    }
  }, [props.height, props.width])

  return (
    <div style = { {...style, position: "relative"} } className = { props.tape ? "tape-box" : "" }>
      <img 
        ref = { imgRef }
        src = { props.src }
        className = { props.className }
        style = { {...style, margin: "auto"} }
        alt = { props.alt }
      />
      {
        props.tape && 
        <img 
          src = { tape } 
          alt = ""
          style = {{ width: style.width, position: "absolute", bottom: "-17%" }}
        />
      }
    </div>
  )
}

export default Img