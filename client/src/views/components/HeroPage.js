import React, { useEffect, useState } from "react"

import SectionImgText from "./Sections/SectionImgText.js"
import SectionTextImg from "./Sections/SectionTextImg.js"
import SectionText from "./Sections/SectionText.js"
import SectionImg from "./Sections/SectionImg.js"
import SectionTextText from "./Sections/SectionTextText.js"
import SectionImgImg from "./Sections/SectionImgImg.js"

import { 
  typeSectionImgText, 
  typeSectionTextImg, 
  typeSectionText, 
  typeSectionImg, 
  typeSectionTextText, 
  typeSectionImgImg 
} from "../addHero"

const HeroPage = (props) => {
  const [width, setWedth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    window.addEventListener("resize", event => {
      setWedth(event.target.innerWidth)
      setHeight(event.target.innerHeight)
    });

    setTimeout(() => {
      console.log(window.innerWidth, window.innerHeight)
      setWedth(window.innerWidth)
      setHeight(window.innerHeight)
    }, 300)

  }, [])

  return (
    <main style = {{ position: "relative" }}>
      {
        props.whoWrote && props.byWhom && 
        <div className = "whoWrote-byWhom">
          <p className="whoWrote">{ props.whoWrote }</p>
          <p className="byWhom">{ props.byWhom }</p>
        </div>
      }

      {
        props.sections &&
        props.sections.map((section, index) => {
          if (section.type === typeSectionImgText) {
            return (
              <SectionImgText 
                index = { index } 
                last = { index === props.sections.length - 1 } 
                first = { index === 0 } 
                name = { props.name }
                width = { width }
                height = { height } 
                img = { section.content.img }
                img_sign = { section.content.img_sign }
                text = { section.content.text }
                title = { section.content.title }
                subtitle = { section.content.subtitle }
              />
            )
          } else if (section.type === typeSectionTextImg) {
            return (
              <SectionTextImg 
                index = { index } 
                last = { index === props.sections.length - 1 } 
                width = { width }
                height = { height }
                img = { section.content.img }
                img_sign = { section.content.img_sign }
                text = { section.content.text }
                title = { section.content.title }
                subtitle = { section.content.subtitle }
              />
            )
          } else if (section.type === typeSectionText) {
            return (
              <SectionText
                index = { index } 
                last = { index === props.sections.length - 1 } 
                text = { section.content.text }
                title = { section.content.title }
                subtitle = { section.content.subtitle }
              />
            )
          } else if (section.type === typeSectionImg) {
            return (
              <SectionImg 
                index = { index } 
                last = { index === props.sections.length - 1 }
                width = { width }
                height = { height }  
                img = { section.content.img }
                img_sign = { section.content.img_sign }
                title = { section.content.title }
                subtitle = { section.content.subtitle }
              />
            )
          } else if (section.type === typeSectionTextText) {
            return (
              <SectionTextText
                index = { index } 
                last = { index === props.sections.length - 1 } 
                text1 = { section.content.text1 }
                text2 = { section.content.text2 }
                title = { section.content.title }
                subtitle = { section.content.subtitle }
              />
            )
          } else if (section.type === typeSectionImgImg) {
            return (
              <SectionImgImg
                index = { index } 
                last = { index === props.sections.length - 1 }
                width = { width }
                height = { height }
                img1 = { section.content.img1 }
                img2 = { section.content.img2 }
                img_sign1 = { section.content.img_sign1 }
                img_sign2 = { section.content.img_sign2 }
                title = { section.content.title }
                subtitle = { section.content.subtitle }
              />
            )
          }
          return <></>
        })
      }
    </main>
  )
}

export default HeroPage