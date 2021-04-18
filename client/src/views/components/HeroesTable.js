import { Link as LinkScroll } from "react-scroll";
import { Link } from 'react-router-dom'


const HeroesTable = () => {
  return (
    <section  className="photos">
      <h2 className="photos__title"> Наши герои </h2>

      <div className="cards">
        {/* {
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
        } */}
      </div>
    </section>
  )
}

export default HeroesTable