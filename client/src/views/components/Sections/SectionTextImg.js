import HeroesSection from "../HeroesSection";
import Img from "../Img"

const SectionTextImg = (props) => {
  return (
    <>
      <HeroesSection
        name={`scr${props.index}`}
        to={!props.last ? `scr${props.index + 1}` : false}
      >
        <h2 className="heroes__name"> {props.title} </h2>
        <div className="heroes__section__content heroes__section__content--right" >
          <div className="heroes__section__content__img-box">
            <Img 
              src={ `/uploads/${props.img}` } 
              width = { props.width }
              height = { props.height }
            />
            <p className="heroes__section__content__img-sign"> { props.img_sign } </p>
          </div>
          <p> {props.text} </p>
          
        </div>
        <h2 className="heroes__section__content__subtitle"> {props.subtitle} </h2>
      </HeroesSection>
    </>
  );
};

export default SectionTextImg;
