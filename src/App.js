import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Reservation from "./pages/Reservation/Reservation";
import Instagram from "./pages/Instagram/Instagram";
import Blog from "./pages/Blog/Blog";
import BlogDetail from "./pages/Blog/BlogDetail";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
/* libraries */
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <div>
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
          <Route exact path="/Instagram">
            <Instagram />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Blog">
            <Blog />
          </Route>
          <Route exact path="/BlogDetail">
            <BlogDetail />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
