import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./views/Main/index"
import Bayramgulov from "./views/Bayramgulov"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/heroes/0" component={ Bayramgulov } />

        <Route path="/" component={ Main } />
      </Switch>
    </Router>
  )
}

export default App