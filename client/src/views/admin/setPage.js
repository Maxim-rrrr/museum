import React from "react";

import { useHttp } from '../../hooks/http.hook'

const SetPage = () => {
  const { request } = useHttp()

  const id = document.location.pathname.split('/')[3]
  
  return (
    <>
      { id }
    </>
  )
}

export default SetPage