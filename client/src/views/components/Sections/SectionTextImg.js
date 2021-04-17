import HeroesSection from "../HeroesSection";

const SectionTextImg = (props) => {
  return (
    <>
      <HeroesSection
        name={`scr${props.index}`}
        to={!props.last ? `scr${props.index + 1}` : false}
      >
        <div className="heroes__section__content heroes__section__content--right" >
          <img src={`/uploads/${props.img}`} alt="" />
          <p> {props.text} </p>
          
        </div>
      </HeroesSection>
    </>
  );
};

export default SectionTextImg;
