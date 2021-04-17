import React, { useState, useEffect } from "react";

import { useHttp } from '../../hooks/http.hook'

import HeroPage from "../components/HeroPage"


const SetPage = () => {
  const { request, loading } = useHttp()
  const [page, setPage] = useState({})

  const id = document.location.pathname.split('/')[3]
  
  const getPage = async () => {
    try {
      let data = await request('/api/hero/getPage', 'POST', { id })
      setPage(data.page)
      console.dir(data.page)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPage()
  }, [])

  if (loading) {
    return (
      <p>Загрузка</p>
    )
  } else {
    return (
      <>
        <HeroPage 
          sections = {page.sections}
          name = {`${page.surnameHero} ${page.nameHero} ${page.patronymicHero}`}
        />
      </>
    )
  }
}

export default SetPage