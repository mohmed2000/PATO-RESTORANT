import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import About from "./pages/About";
import Contact from "./pages/Contact";
/* libraries */
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div>
      <Button>mohmed</Button>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Menu">
            <Menu />
          </Route>
          <Route exact path="/Reservation">
            <Reservation />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
