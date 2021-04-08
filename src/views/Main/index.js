import "./main.sass";
import logo_ngpu from "../../img/main/logo_ngpu.png"
import logo_archeo from "../../img/main/logo_archeo.png"
import arrow_down from "../../img/main/arrow_down.svg"

import { Link as LinkScroll, Element } from "react-scroll";

import photo_1 from "../../img/photos/Байрамгулов.png"
import photo_2 from "../../img/photos/Акиров.png"
import photo_3 from "../../img/photos/Гирфанов.png"
import photo_4 from "../../img/photos/Сафин.png"
import photo_5 from "../../img/photos/Шунулина.png"
import photo_6 from "../../img/photos/Талипов.png"
import photo_7 from "../../img/photos/Тареев.png"
import photo_8 from "../../img/photos/Кочуров.png"
import photo_9 from "../../img/photos/Сагдиев.png"
import photo_10 from "../../img/photos/Аглямов.png"

import { Link } from 'react-router-dom'

const cards = [
  {
    photo: photo_1,
    name: "Байрамгулов Г. Х."
  },
  {
    photo: photo_2,
    name: "Акиров Р. А."
  },
  {
    photo: photo_3,
    name: "Гирфанов Ф. Б."
  },
  {
    photo: photo_4,
    name: "Сафин К. С."
  },
  {
    photo: photo_5,
    name: "Шунулина М. П."
  },
  {
    photo: photo_6,
    name: "Талипов Н. Т."
  },
  {
    photo: photo_7,
    name: "Тареев С. Н."
  },
  {
    photo: photo_8,
    name: "Кочуров И. В."
  },
  {
    photo: photo_9,
    name: "Сагдиев С. Ш."
  },
  {
    photo: photo_10,
    name: "Алгямов З. А."
  }
]

const Main = () => {
  return (
    <>
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

      <Element name="scr2" className="photos">
        <h2 className="photos__title"> Наши герои </h2>

        <div className="cards">
          {
            cards.map((card, index) => {
              return (
                <Link to={"/heroes/" + index} className="card">
                  <img src= { card.photo } alt=""/>
                  <strong> { card.name } </strong>
                </Link>
              )
            })
          }
        </div>
      </Element>
    </>
  );
};

export default Main;
