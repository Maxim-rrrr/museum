import React from 'react';
import { Link as LinkScroll } from "react-scroll";
import { Link } from 'react-router-dom'

import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { withStyles, makeStyles } from '@material-ui/core/styles';

const CssTextField = withStyles({
  root: {
    '& input': {
      color: '#fff',
    },
    '& label': {
      color: '#fff',
    },
    '& label.Mui-focused': {
      color: '#fff',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#fff',
      },
      '&:hover fieldset': {
        borderColor: '#fff',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#fff',
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  input: {
    width: "100%"
  }
}));

const HeroesTable = (props) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    search: ""
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  let cards = []

  if (props.pages) {
    props.pages.forEach((page) => {
      let name = `${page.surnameHero} ${page.nameHero[0]}. ${page.patronymicHero ? page.patronymicHero[0] + ".": ""}`

      let card = {
        name,
        photo: page.sections[0].content.img,
        id: page._id
      } 

      if (!values.search) {
        cards.push(card)
      } else {
        let index = name.toLowerCase().indexOf(values.search.toLowerCase())
        if (index >= 0) {
          card.name = <>
          { name.slice(0, index) }
          <span>{ name.slice(index, index + values.search.length) }</span>
          { name.slice(index + values.search.length) }
          </>
          cards.push(card)
        }
      }


    })
  }

  return (
    <section  className="photos">
      <h2 className="photos__title"> Наши герои </h2>

      <Container maxWidth="md">
        <CssTextField 
          className={classes.input} 
          variant="outlined" 
          label="Поиск" 
          value={values.search}
          onChange={handleChange("search")}
        />
      </Container>
      
      {
        cards.length > 0 ?
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
        </div> : 
        <p 
          style = {{ 
            textAlign: "center", 
            color: "#D9DAD2", 
            fontSize: "2rem", 
            margin: "4rem 0" 
          }}
        > Нет результатов </p>
      }
    </section>
  )
}

export default HeroesTable