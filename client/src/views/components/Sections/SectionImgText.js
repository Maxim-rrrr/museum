import HeroesSection from "../HeroesSection";

const SectionImgText = (props) => {
  return (
    <>
      <HeroesSection
        name={`scr${props.index}`}
        to={!props.last ? `scr${props.index + 1}` : false}
      >
        {props.first && <h1 className="heroes__name"> {props.name} </h1>}

        <div className="heroes__section__content heroes__section__content--left">
          <img src={`/uploads/${props.img}`} alt="" />
          <p> {props.text} </p>
        </div>

      </HeroesSection>
    </>
  );
};

export default SectionImgText;
