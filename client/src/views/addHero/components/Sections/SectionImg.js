import HeroesSection from "../../../components/HeroesSection"
import Dropzone from "../Dropzone"

const SectionImg = (props) => {
  return (
    <>
      <HeroesSection 
        name={`scr${props.index}`} 
        to={!props.last ? `scr${props.index + 1}` : false}
      >

        <div className="heroes__section__content">
          <Dropzone 
            full = { true }
            setContent = { (value) => { props.setContent(props.index, "img", value) }  }
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

export default SectionImg