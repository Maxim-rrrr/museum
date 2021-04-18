import HeroesSection from "../../../components/HeroesSection"
import Dropzone from "../Dropzone"



const SectionImgImg = (props) => {
  return (
    <>
      <HeroesSection 
        name={`scr${props.index}`} 
        to={!props.last ? `scr${props.index + 1}` : false}
      >

        <div className="heroes__section__content">
          <Dropzone 
            setContent = { (value) => { props.setContent(props.index, "img1", value) }  }
          />
          <Dropzone 
            setContent = { (value) => { props.setContent(props.index, "img2", value) }  }
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

export default SectionImgImg