import HeroesSection from "../../../components/HeroesSection"
import Dropzone from "../Dropzone"
import Input from "../Input"

const SectionImg = (props) => {
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
          <div style = {{ width: "90%", margin: "auto" }}>
            <Dropzone 
              setContent = { (value) => { props.setContent(props.index, "img", value) }  }
            />
            <Input 
              setContent = { (value) => { props.setContent(props.index, "img_sign", value) }  }
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

export default SectionImg