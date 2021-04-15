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
          <Dropzone />
          <Dropzone />
        </div>

        <div/>
      </HeroesSection>
    </>
  )
}

export default SectionImgImg