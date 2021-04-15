import HeroesSection from "../../../components/HeroesSection"

import Textarea from "../Textarea"



const SectionText = (props) => {
  return (
    <>
      <HeroesSection 
        name={`scr${props.index}`} 
        to={!props.last ? `scr${props.index + 1}` : false}
      >

        <div className="heroes__section__content">
          <Textarea 
            full = { true }
            setContent = { (value) => { props.setContent(props.index, "text", value) }  }
          />
        </div>

        <div/>
      </HeroesSection>
    </>
  )
}

export default SectionText