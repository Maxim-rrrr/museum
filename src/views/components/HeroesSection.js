import { Link as LinkScroll, Element } from "react-scroll";
import arrow_down from "../../img/arrow-down.svg";

const HeroesSection = (props) => {
  return (
    <div className="heroes__section__bg">
      <Element name={ props.name }>
        <div className="container">
          <section className="heroes__section">
            { props.children }

            {
              props.to && 
              <LinkScroll
                activeClass="active"
                to={ props.to }
                spy={true}
                smooth={true}
                duration={500}
              >
                <div className="heroes__arrow-down-box">
                  <img src={arrow_down} alt="" className="heroes__arrow-down" />
                </div>
              </LinkScroll>
            }
          </section>
        </div>
      </Element>
    </div>
  );
};

export default HeroesSection
