import HeroesSection from "../../../components/HeroesSection";
import Textarea from "../Textarea";

const SectionTextText = (props) => {
  return (
    <>
      <HeroesSection
        name={`scr${props.index}`}
        to={!props.last ? `scr${props.index + 1}` : false}
      >
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

        <button 
          className="open-sidebar-btn"
          onClick = {() => props.delSection(props.index)}
        > - </button>
      </HeroesSection>
    </>
  );
};

export default SectionTextText;
