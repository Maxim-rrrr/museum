import HeroesSection from "../HeroesSection";

const SectionText = (props) => {
  return (
    <>
      <HeroesSection
        name={`scr${props.index}`}
        to={!props.last ? `scr${props.index + 1}` : false}
      >
        <div className="heroes__section__content heroes__section__content--center">
          <p style = {{textAlign: "center"}}> {props.text} </p>
        </div>
      </HeroesSection>
    </>
  );
};

export default SectionText;