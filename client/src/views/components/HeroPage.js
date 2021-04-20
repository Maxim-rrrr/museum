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
  return (
    <>
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
                img = { section.content.img }
                img_sign = { section.content.img_sign }
                text = { section.content.text }
              />
            )
          } else if (section.type === typeSectionTextImg) {
            return (
              <SectionTextImg 
                index = { index } 
                last = { index === props.sections.length - 1 } 
                img = { section.content.img }
                img_sign = { section.content.img_sign }
                text = { section.content.text }
              />
            )
          } else if (section.type === typeSectionText) {
            return (
              <SectionText
                index = { index } 
                last = { index === props.sections.length - 1 } 
                text = { section.content.text }
              />
            )
          } else if (section.type === typeSectionImg) {
            return (
              <SectionImg 
                index = { index } 
                last = { index === props.sections.length - 1 } 
                img = { section.content.img }
                img_sign = { section.content.img_sign }
              />
            )
          } else if (section.type === typeSectionTextText) {
            return (
              <SectionTextText
                index = { index } 
                last = { index === props.sections.length - 1 } 
                text1 = { section.content.text1 }
                text2 = { section.content.text2 }
              />
            )
          } else if (section.type === typeSectionImgImg) {
            return (
              <SectionImgImg
                index = { index } 
                last = { index === props.sections.length - 1 } 
                img1 = { section.content.img1 }
                img2 = { section.content.img2 }
                img_sign1 = { section.content.img_sign1 }
                img_sign2 = { section.content.img_sign2 }
              />
            )
          }
          return <></>
        })
      }
    </>
  )
}

export default HeroPage