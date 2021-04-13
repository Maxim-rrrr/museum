import React, { useState, useEffect } from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login"
import Сheck from "./Сheck"
import Published from "./Published"

import { useHttp } from '../../hooks/http.hook'

const AdminRouter = () => {
  const [isAdmin, setIsAdmin] = useState(false)
  const { request } = useHttp()
  
  const checkToken = async () => {
    try {
      const data = await request('/api/admin/is-admin', 'POST', { token: localStorage.getItem('admin_token') })

      if (data.status === 200) {
        setIsAdmin(true)
      } else {
        localStorage.removeItem('token')
      }

    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (localStorage.getItem('admin_token')) {
      checkToken()
    }
  }, [])

  if (isAdmin) {
    return (
      <Router>
        <Switch>
            <Route exact path="/admin" component={ Сheck } />
            <Route exact path="/admin/check" component={ Сheck } />

            <Route exact path="/admin/published" component={ Published } />

            <Route exact path="/admin/*" component={ Сheck } />
        </Switch>
      </Router>
    )
  } else {
    return (
      <Router>
        <Switch>
          <Route exact path="/admin" component={Login} />

          <Route exact path="/admin/*" component={Login} />
        </Switch>
      </Router>
    )
  }
  
};

export default AdminRouter;
