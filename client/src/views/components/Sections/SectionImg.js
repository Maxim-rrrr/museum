import HeroesSection from "../HeroesSection";

const SectionImg = (props) => {
  return (
    <>
      <HeroesSection
        name={`scr${props.index}`}
        to={!props.last ? `scr${props.index + 1}` : false}
      >
        <div className="heroes__section__content heroes__section__content--center">
            <img src={`/uploads/${props.img}`} alt=""  style = {{margin: "0 auto", maxWidth: "50vw", width: "50vw"}}/>
        </div>
      </HeroesSection>
    </>
  );
};

export default SectionImg;