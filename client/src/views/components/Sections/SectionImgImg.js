import HeroesSection from "../HeroesSection";

const SectionImgImg = (props) => {
  return (
    <>
      <HeroesSection
        name={`scr${props.index}`}
        to={!props.last ? `scr${props.index + 1}` : false}
      >
        
        <h2 className="heroes__name"> {props.title} </h2>

        <div className="heroes__section__content heroes__section__content--left">
          <div className="heroes__section__content__img-box">
            <div className="heroes__section__content__img" style = {{ background: `url(/uploads/${props.img1}) center / cover no-repeat ` }}></div>
            <p className="heroes__section__content__img-sign"> { props.img_sign1 } </p>
          </div>
          <div className="heroes__section__content__img-box">
            <div className="heroes__section__content__img" style = {{ background: `url(/uploads/${props.img2}) center / cover no-repeat ` }}></div>
            <p className="heroes__section__content__img-sign"> { props.img_sign2 } </p>
          </div>
        </div>

        <h2 className="heroes__section__content__subtitle"> {props.subtitle} </h2>
      </HeroesSection>
    </>
  );
};

export default SectionImgImg;
