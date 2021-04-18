import HeroesSection from "../../../components/HeroesSection"
import Dropzone from "../Dropzone"
import Textarea from "../Textarea"



const SectionTextImg = (props) => {
  return (
    <>
      <HeroesSection 
        name={`scr${props.index}`} 
        to={!props.last ? `scr${props.index + 1}` : false}
      >

        <div className="heroes__section__content heroes__section__content--right">
          <Dropzone 
            setContent = { (value) => { props.setContent(props.index, "img", value) }  }
          />
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