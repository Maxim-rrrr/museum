import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./views/Main/index"
import AdminRouter from "./views/admin/router"
import AddHero from "./views/addHero"
import Hero from "./views/Hero"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/admin" component={ AdminRouter } />
        <Route exact path="/admin/*" component={ AdminRouter } />

        <Route path="/add-hero" component={ AddHero } />
        <Route path="/hero/*" component={ Hero } />

        <Route path="/*" component={ Main } />
      </Switch>
    </Router>
  )
}

export default App