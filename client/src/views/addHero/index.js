import React from 'react';
import Header from "./components/Header"
import Container from "@material-ui/core/Container";

import { Link } from "react-router-dom";

import SectionImgText from "./components/Sections/SectionImgText"
import SectionTextImg from "./components/Sections/SectionTextImg"
import SectionText from "./components/Sections/SectionText"
import SectionImg from "./components/Sections/SectionImg"
import SectionImgImg from "./components/Sections/SectionImgImg"
import SectionTextText from "./components/Sections/SectionTextText"


import "./addHero.sass"

export const typeSectionImgText = 1
export const typeSectionTextImg = 2
export const typeSectionText = 3
export const typeSectionImg = 4
export const typeSectionTextText = 5
export const typeSectionImgImg = 6



const AddHero = () => {
  const [sideBar, setSideBar] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    
    setSideBar({ ...sideBar, [anchor]: open });
  };

  const [sections, setSections] = React.useState([
    {
      type: typeSectionImgText,
      content: { img: "", text: "" },
      additionallyTop: [],
      additionallyBottom: [],
    }
  ])

  const setContent = (index, key, value) => {
    let s = sections
    s[index].content[key] = value
    setSections(s)
    console.log(s)
  }

  const addSection = (type) => {
    let section = {
      type,
      content: {},
      additionallyTop: [],
      additionallyBottom: [],
    }

    if (type === typeSectionImgText || type === typeSectionTextImg) {
      section.content = { img: "", text: "" }
    } else if (type === typeSectionText) {
      section.content = { text: "" }
    } else if (type === typeSectionImg) {
      section.content = { img: "" }
    } else if (type === typeSectionTextText) {
      section.content = { text1: "", text2: "" }
    } else if (type === typeSectionImgImg) {
      section.content = { img1: "", img2: "" }
    }

    setSections([...sections, section])

    console.log(sections)
  }

  return (
    <>
      <Header 
        title="Увековечить память ветерана"
        state={ sideBar }
        toggleDrawer={ toggleDrawer }
        addSection = { addSection }
      />

      <Container>
        {
          sections.map((section, index) => {
            if (section.type === typeSectionImgText) {
              return (
                <SectionImgText 
                  index = { index } 
                  last = { index === sections.length - 1 } 
                  first = { index === 0 } 
                  name = ""
                  setContent = {setContent}
                />
              )
            } else if (section.type === typeSectionTextImg) {
              return (
                <SectionTextImg 
                  index = { index } 
                  last = { index === sections.length - 1 } 
                  first = { index === 0 } 
                  setContent = {setContent}
                />
              )
            } else if (section.type === typeSectionText) {
              return (
                <SectionText
                  index = { index } 
                  last = { index === sections.length - 1 } 
                  first = { index === 0 } 
                  setContent = {setContent}
                />
              )
            } else if (section.type === typeSectionImg) {
              return (
                <SectionImg
                  index = { index } 
                  last = { index === sections.length - 1 } 
                  first = { index === 0 } 
                  setContent = {setContent}
                />
              )
            } else if (section.type === typeSectionImgImg) {
              return (
                <SectionImgImg
                  index = { index } 
                  last = { index === sections.length - 1 } 
                  first = { index === 0 } 
                  setContent = {setContent}
                />
              )
            } else if (section.type === typeSectionTextText) {
              return (
                <SectionTextText
                  index = { index } 
                  last = { index === sections.length - 1 } 
                  first = { index === 0 } 
                  setContent = {setContent}
                />
              )
            }
          })
        }

      
        <button 
          className="open-sidebar-btn"
          onClick = { toggleDrawer('right', true) }
        >
          +
        </button>
      </Container>
      

    </>
  )
}

export default AddHero