import HeroesSection from "../../../components/HeroesSection"
import Dropzone from "../Dropzone"
import Textarea from "../Textarea"
import Input from "../Input"


const SectionTextImg = (props) => {
  return (
    <>
      <HeroesSection 
        name={`scr${props.index}`} 
        to={!props.last ? `scr${props.index + 1}` : false}
      >

        <div className="heroes__section__content heroes__section__content--right">
          <div style = {{ width: "45%" }}>
            <Dropzone 
              setContent = { (value) => { props.setContent(props.index, "img", value) }  }
            />
            <Input 
              setContent = { (value) => { props.setContent(props.index, "img_sign", value) }  }
            />
          </div>
          <Textarea 
            setContent = { (value) => { props.setContent(props.index, "text", value) }  }
          />
        </div>

        <button 
          className="open-sidebar-btn"
          onClick = {() => props.delSection(props.index)}
        > - </button>
      </HeroesSection>
    </>
  )
}

export default SectionTextImg