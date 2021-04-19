import HeroesSection from "../HeroesSection";

const SectionImgImg = (props) => {
  return (
    <>
      <HeroesSection
        name={`scr${props.index}`}
        to={!props.last ? `scr${props.index + 1}` : false}
      >
        {props.first && <h1 className="heroes__name"> {props.name} </h1>}

        <div className="heroes__section__content heroes__section__content--left">
          {/* <img src={`/uploads/${props.img1}`} alt="" />
          <img src={`/uploads/${props.img2}`} alt="" /> */}
          <div className="heroes__section__content__img" style = {{ background: `url(/uploads/${props.img1}) center / cover no-repeat ` }}></div>
          <div className="heroes__section__content__img" style = {{ background: `url(/uploads/${props.img2}) center / cover no-repeat ` }}></div>
        </div>

      </HeroesSection>
    </>
  );
};

export default SectionImgImg;
