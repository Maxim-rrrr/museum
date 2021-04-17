import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";

const setPage = () => {
  // let location = useLocation();

  return (
    <>
      {/* { location.pathname } */}
      { document.location.pathname }
    </>
  )
}

export default setPage