import { Link as LinkScroll } from "react-scroll";
import { Link } from 'react-router-dom'


const HeroesTable = (props) => {
  let cards = []

  if (props.pages) {
    props.pages.forEach((page) => {
      cards.push({
        name: `${page.surnameHero} ${page.nameHero[0]}. ${page.patronymicHero[0]}.`,
        photo: page.sections[0].content.img,
        id: page._id
      })
    })
  }

  console.log(props.pages)
  console.log(cards)

  return (
    <section  className="photos">
      <h2 className="photos__title"> Наши герои </h2>

      <div className="cards">
        {
          cards.map((card) => {
            return (
              <LinkScroll
                activeClass="active"
                to="scr1"
                spy={true}
                offset={0}
              >
                <Link to={"/hero/" + card.id} className="card">
                  <div className="photos__img">
                    <img src= { `/uploads/${card.photo}` } alt=""/>
                  </div>
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