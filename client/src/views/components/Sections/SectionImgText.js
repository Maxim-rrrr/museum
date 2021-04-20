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
          <div className="heroes__section__content__img-box">
            <div className="heroes__section__content__img" style = {{ background: `url(/uploads/${props.img}) center / cover no-repeat ` }}></div>
            <p className="heroes__section__content__img-sign"> { props.img_sign } </p>
          </div>
          <p> {props.text} </p>
        </div>

      </HeroesSection>
    </>
  );
};

export default SectionImgText;
