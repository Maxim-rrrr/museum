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

        {
          props.first && 
          <h1 className="heroes__name">
            {
              props.name ? 
              props.name :
              "Имя Фамилия Отчество (Будет подставлено из формы снизу)"
            }
          </h1>
        }

        <div className="heroes__section__content heroes__section__content--left">
          <Dropzone 
            setContent = { (value) => { props.setContent(props.index, "img", value) }  }
          />
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