import HeroesSection from "../../../components/HeroesSection";
import Textarea from "../Textarea";
import Input from "../Input"

const SectionTextText = (props) => {
  return (
    <>
      <HeroesSection
        name={`scr${props.index}`}
        to={!props.last ? `scr${props.index + 1}` : false}
      >
        <Input 
          setContent = { (value) => { props.setContent(props.index, "title", value) }  }
        />
        <div className="heroes__section__content">
          <Textarea
            setContent={(value) => {
              props.setContent(props.index, "text1", value);
            }}
          />
          <Textarea
            setContent={(value) => {
              props.setContent(props.index, "text2", value);
            }}
          />
        </div>
        <Input 
          setContent = { (value) => { props.setContent(props.index, "subtitle", value) }  }
        />

        <button 
          className="open-sidebar-btn"
          onClick = {() => props.delSection(props.index)}
        > - </button>
      </HeroesSection>
    </>
  );
};

export default SectionTextText;
