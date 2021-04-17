import HeroesSection from "../HeroesSection";

const SectionTextText = (props) => {

  return (
    <>
      <HeroesSection
        name={`scr${props.index}`}
        to={!props.last ? `scr${props.index + 1}` : false}
      >
        {props.first && <h1 className="heroes__name"> {props.name} </h1>}

        <div className="heroes__section__content">
          <p style = {{ marginRight: "2rem" }}> {props.text1} </p>
          <p style = {{ marginLeft: "2rem" }}> {props.text2} </p>
        </div>

      </HeroesSection>
    </>
  );
};

export default SectionTextText;
