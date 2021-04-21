import HeroesSection from "../HeroesSection";
import Img from "../Img"

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
            <Img 
              src={ `/uploads/${props.img1}` } 
              width = { props.width }
              height = { props.height }
            />
            <p className="heroes__section__content__img-sign"> { props.img_sign1 } </p>
          </div>
          <div className="heroes__section__content__img-box">
            <Img 
              src={ `/uploads/${props.img2}` } 
              width = { props.width }
              height = { props.height }
            />
            <p className="heroes__section__content__img-sign"> { props.img_sign2 } </p>
          </div>
        </div>

        <h2 className="heroes__section__content__subtitle"> {props.subtitle} </h2>
      </HeroesSection>
    </>
  );
};

export default SectionImgImg;
