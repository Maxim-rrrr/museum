import "./main.sass";
import logo_ngpu from "../../img/main/logo_ngpu.png";
import arrow_down from "../../img/main/arrow_down.svg";

import React, { useState, useEffect } from 'react';

import { Link as LinkScroll, Element } from "react-scroll";
import { Link } from 'react-router-dom'

import { useHttp } from '../../hooks/http.hook'
import HeroesTable from "../components/HeroesTable";

const Main = () => {

  const { request, loading } = useHttp()

  const [pages, setPages] = useState([])

  const getPages = async () => {
    try {
      let data = await request('/api/hero/getPages', 'POST')
      let p = data.pages
      
      setPages(p.filter(page => page.status === "approved"))
    } catch (error) {
      console.log(error)
      getPages()
    }
  }

  useEffect(() => {
    getPages()
  }, [])

  return (
    <>
      <Element name="scr1">
        <section className="hero">
          <header className="hero__header">
            <div className="logo-box">
              <img src={logo_ngpu} alt="" className="logo" />
            </div>

            <h2 className="hero__title">НГПУ</h2>

            <div style={{ width: "calc(66rem / 14)" }} />
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
              <img src={arrow_down} alt="" className="arrow-down" />
            </LinkScroll>

            <div className="hero__info hero__info--hide">
              <h2>Семейные хроники</h2>
              <i>Великой Отечественной Войны</i>
            </div>
          </div>
        </section>
      </Element>

      <Element name="scr2">
        <section className="main-info">
          <h2 className="main-info__title"> Уважаемые посетители Музея славы! </h2>
          <div className="main-info__text">
            Данный сервис предназначен для сохранения памяти о наших дорогих
            защитниках, ветеранах Великой Отечественной войны.
            <br />
            <br />
            Каждый студент, преподаватель и сотрудник Набережночелнинского
            государственного педагогического университета может здесь
            опубликовать информацию о своих родных, принимавших участие в
            Великой Отечественной войне!
            <br />
            <br />
          </div>

          <Link to="/add-hero" className="main-info__btn-add-hero"> Увековечить память ветерана </Link>
          
          <LinkScroll
            activeClass="active"
            to="scr3"
            spy={true}
            smooth={true}
            duration={500}
          >
            <img src={arrow_down} alt="" className="arrow-down" />
          </LinkScroll>
        </section>
      </Element>

      <Element name="scr3">
        
        {
          loading ? <></> :
          <HeroesTable pages = { pages } />
        }
      </Element>
    </>
  );
};

export default Main;
