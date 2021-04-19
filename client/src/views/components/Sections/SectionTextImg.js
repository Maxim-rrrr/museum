import HeroesSection from "../HeroesSection";

const SectionTextImg = (props) => {
  return (
    <>
      <HeroesSection
        name={`scr${props.index}`}
        to={!props.last ? `scr${props.index + 1}` : false}
      >
        <div className="heroes__section__content heroes__section__content--right" >
        <div className="heroes__section__content__img" style = {{ background: `url(/uploads/${props.img}) center / cover no-repeat ` }}></div>
          <p> {props.text} </p>
          
        </div>
      </HeroesSection>
    </>
  );
};

export default SectionTextImg;
