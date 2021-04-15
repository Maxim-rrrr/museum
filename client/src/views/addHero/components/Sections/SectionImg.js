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

        <div/>
      </HeroesSection>
    </>
  )
}

export default SectionImg