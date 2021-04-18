import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./views/Main/index"
import AdminRouter from "./views/admin/router"
import AddHero from "./views/addHero"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/admin" component={ AdminRouter } />
        <Route exact path="/admin/*" component={ AdminRouter } />

        <Route path="/add-hero" component={ AddHero } />

        <Route path="/" component={ Main } />
      </Switch>
    </Router>
  )
}

export default App