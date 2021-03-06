import HeroesSection from "../HeroesSection";

const SectionTextText = (props) => {

  return (
    <>
      <HeroesSection
        name={`scr${props.index}`}
        to={!props.last ? `scr${props.index + 1}` : false}
      >
        
        <h2 className="heroes__name"> {props.title} </h2>

        <div className="heroes__section__content">
          <p className="heroes__section__content__text--left"> {props.text1} </p>
          <p className="heroes__section__content__text--right"> {props.text2} </p>
        </div>
        
        <h2 className="heroes__section__content__subtitle"> {props.subtitle} </h2>

      </HeroesSection>
    </>
  );
};

export default SectionTextText;
