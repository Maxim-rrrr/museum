import React, { useState, useEffect } from "react";

import { useHttp } from "../../hooks/http.hook";

import HeroPage from "../components/HeroPage";
import Header from "./components/Header";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const SetPage = () => {
  const { request, loading } = useHttp();
  const [page, setPage] = useState({});

  const id = document.location.pathname.split("/")[3];

  const setStatusPage = async (status) => {
    try {
      let data = await request("/api/hero/setStatus", "POST", { id, status })
      if (data.status === 200) {
        await getPage();
      }
    } catch (error) {
      console.log(error)
    }
  }

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
    return <p>Загрузка</p>;
  } else {
    return (
      <>
        <Header
          title={`${page.surnameHero} ${page.nameHero} ${page.patronymicHero}`}
        >
          {page.status === "verification" && 
            <>
              <Button
                variant="contained"
                style={{
                  background: "#4caf50",
                  margin: "0 1rem",
                }}
                onClick = { () => {setStatusPage("approved")} }
              >
                Опубликовать
              </Button>

              <Button
                variant="contained"
                style={{
                  background: "#e53935",
                  margin: "0 1rem",
                }}
                onClick = { () => {setStatusPage("rejected")} }
              >
                Отклонить
              </Button>
            </>
          }

          {page.status === "approved" && 
            <>
              <Button
                variant="contained"
                style={{
                  background: "#e53935",
                  margin: "0 1rem",
                }}
                onClick = { () => {setStatusPage("rejected")} }
              >
                Отклонить публикацию
              </Button>
              <Button
                variant="contained"
                style={{
                  background: "#ffd54f",
                  margin: "0 1rem",
                }}
                onClick = { () => {setStatusPage("verification")} }
              >
                Вернуть на проверку
              </Button>
            </>
          }

          {page.status === "rejected" && 
            <>
              <Button
                variant="contained"
                style={{
                  background: "#4caf50",
                  margin: "0 1rem",
                }}
                onClick = { () => {setStatusPage("approved")} }
              >
                Опубликовать
              </Button>
              <Button
                variant="contained"
                style={{
                  background: "#ffd54f",
                  margin: "0 1rem",
                }}
                onClick = { () => {setStatusPage("verification")} }
              >
                Вернуть на проверку
              </Button>
            </>
          }
        </Header>

        <HeroPage
          sections={page.sections}
          name={`${page.surnameHero} ${page.nameHero} ${page.patronymicHero}`}
        />
      </>
    );
  }
};

export default SetPage;
