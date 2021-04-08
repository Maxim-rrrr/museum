import "./main.sass";
import logo_ngpu from "../../img/main/logo_ngpu.png"
import logo_archeo from "../../img/main/logo_archeo.png"
import arrow_down from "../../img/main/arrow_down.svg"

import { Link as LinkScroll, Element } from "react-scroll";

import HeroesTable from "../components/HeroesTable"

const Main = () => {
  return (
    <>
      <Element name="scr1">
        <section className="hero">
          <header className="hero__header">
            <div className="logo-box">
              <img src={ logo_ngpu } alt="" className="logo" />
              <img src={ logo_archeo } alt="" className="logo" />
            </div>

            <h2 className="hero__title">НГПУ</h2>

            <div style={{ width: "calc(132rem / 14)" }}/>
          </header>

          <h1 className="title">Музей славы</h1>

          <div className="hero__bottom">
            <div className="hero__info">
              <h2>Семейные хроники</h2>
              <i>Великой Отечественной Войны</i>
            </div>

            
            <LinkScroll
              activeClass="active"
              to="scr2"
              spy={true}
              smooth={true}
              duration={500}
            >
              <img src={arrow_down} alt="" className="arrow-down"/>
            </LinkScroll>

            <div className="hero__info hero__info--hide">
              <h2>Семейные хроники</h2>
              <i>Великой Отечественной Войны</i>
            </div>

          </div>
        </section>
      </Element>

      <Element name="scr2">
        <HeroesTable />
      </Element>
    </>
  );
};

export default Main;
