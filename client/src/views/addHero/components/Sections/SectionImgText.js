import HeroesSection from "../../../components/HeroesSection"
import Dropzone from "../Dropzone"
import Textarea from "../Textarea"
import Input from "../Input"


const SectionImgText = (props) => {
  return (
    <>
      <HeroesSection 
        name={`scr${props.index}`} 
        to={!props.last ? `scr${props.index + 1}` : false}
      >

        {
          props.first ?
          <h1 className="heroes__name">
            {
              props.name ? 
              props.name :
              "Имя Фамилия Отчество (Будет подставлено из формы снизу)"
            }
          </h1> : 
          <Input 
            setContent = { (value) => { props.setContent(props.index, "title", value) }  }
          />
        }

        <div className="heroes__section__content heroes__section__content--left">
          <div style = {{ width: "45%" }}>
            <Dropzone 
              setContent = { (value) => { props.setContent(props.index, "img", value) }  }
            />
            {
              !props.first &&
              <Input 
                setContent = { (value) => { props.setContent(props.index, "img_sign", value) }  }
              />
            }
          </div>
          <Textarea 
            setContent = { (value) => { props.setContent(props.index, "text", value) }  }
          />
        </div>

        <Input 
          setContent = { (value) => { props.setContent(props.index, "subtitle", value) }  }
        />

        {
          !props.first ?
          <button 
            className="open-sidebar-btn"
            onClick = {() => props.delSection(props.index)}
          > - </button> : <div />
        }
        
      </HeroesSection>
    </>
  )
}

export default SectionImgText