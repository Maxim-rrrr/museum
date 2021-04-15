import HeroesSection from "../../../components/HeroesSection"
import Dropzone from "../Dropzone"
import Textarea from "../Textarea"


const SectionImgText = (props) => {
  return (
    <>
      <HeroesSection 
        name={`scr${props.index}`} 
        to={!props.last ? `scr${props.index + 1}` : false}
      >

        <div className="heroes__section__content heroes__section__content--left">
          <Dropzone />
          <Textarea 
            setContent = { (value) => { props.setContent(props.index, "text", value) }  }
          />
        </div>

        <div/>
      </HeroesSection>
    </>
  )
}

export default SectionImgText