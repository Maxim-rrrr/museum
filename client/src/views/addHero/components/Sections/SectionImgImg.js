import HeroesSection from "../../../components/HeroesSection"
import Dropzone from "../Dropzone"
import Input from "../Input"



const SectionImgImg = (props) => {
  return (
    <>
      <HeroesSection 
        name={`scr${props.index}`} 
        to={!props.last ? `scr${props.index + 1}` : false}
      >
        <Input 
          setContent = { (value) => { props.setContent(props.index, "title", value) }  }
        />
        <div className="heroes__section__content">
          <div style = {{ width: "45%" }}>
            <Dropzone 
              setContent = { (value) => { props.setContent(props.index, "img1", value) }  }
            />
            <Input 
              setContent = { (value) => { props.setContent(props.index, "img_sign1", value) }  }
            />
          </div>
          <div style = {{ width: "45%" }}>
            <Dropzone 
              setContent = { (value) => { props.setContent(props.index, "img2", value) }  }
            />
            <Input 
              setContent = { (value) => { props.setContent(props.index, "img_sign2", value) }  }
            />
          </div>
        </div>
        <Input 
          setContent = { (value) => { props.setContent(props.index, "subtitle", value) }  }
        />
        <button 
          className="open-sidebar-btn"
          onClick = {() => props.delSection(props.index)}
        > - </button>
      </HeroesSection>
    </>
  )
}

export default SectionImgImg