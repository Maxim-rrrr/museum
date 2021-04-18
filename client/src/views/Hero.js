import React, { useState, useEffect } from "react";

import { useHttp } from "../hooks/http.hook";

import HeroPage from "./components/HeroPage";

import { Link as LinkScroll, Element } from "react-scroll";
import arrow_down from "../img/arrow-down.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  const { request, loading } = useHttp();
  const [page, setPage] = useState({});

  const id = document.location.pathname.split("/")[2];

  const getPage = async () => {
    try {
      let data = await request("/api/hero/getPage", "POST", { id });
      setPage(data.page);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPage();
  }, []);

  if (loading) {
    return <></>;
  } else {
    return (
      <>
        <LinkScroll activeClass="active" to="scr2" spy={true} offset={0}>
          <Link to="/">
            <div className="heroes__back-to-main">
              <img src={arrow_down} alt="" />
            </div>
          </Link>
        </LinkScroll>
        <HeroPage
          sections={page.sections}
          name={`${page.surnameHero} ${page.nameHero} ${page.patronymicHero}`}
        />
      </>
    );
  }
};

export default Hero;
