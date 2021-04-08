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

import { Link as LinkScroll } from "react-scroll";
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

const HeroesTable = () => {
  return (
    <section  className="photos">
      <h2 className="photos__title"> Наши герои </h2>

      <div className="cards">
        {
          cards.map((card, index) => {
            return (
              <LinkScroll
                activeClass="active"
                to="scr1"
                spy={true}
                offset={0}
              >
                <Link to={"/heroes/" + index} className="card">
                  <img src= { card.photo } alt=""/>
                  <strong> { card.name } </strong>
                </Link>
              </LinkScroll>
            )
          })
        }
      </div>
    </section>
  )
}

export default HeroesTable