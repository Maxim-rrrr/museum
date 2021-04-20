import HeroesSection from "../HeroesSection";

const SectionImg = (props) => {
  return (
    <>
      <HeroesSection
        name={`scr${props.index}`}
        to={!props.last ? `scr${props.index + 1}` : false}
      >
        <div className="heroes__section__content heroes__section__content--center">
          <div className="heroes__section__content__img-box--full">
            <div className="heroes__section__content__img" style = {{ background: `url(/uploads/${props.img}) center / cover no-repeat ` }}></div>
            <p className="heroes__section__content__img-sign"> { props.img_sign } </p>
          </div>
        </div>
      </HeroesSection>
    </>
  );
};

export default SectionImg;