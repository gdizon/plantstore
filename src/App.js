import Navbar from "./Navbar";
import Home from "./Home";
import Monstera from "./Monstera";
import Hoya from './Hoya';
import Philodendron from './Philodendron';
import Pothos from './Pothos';
import AboutUs from './AboutUs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Plant Store</h1>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/monstera">
              <Monstera />
            </Route>
            <Route path="/hoya">
              <Hoya />
            </Route>
            <Route path="/philodendron">
              <Philodendron />
            </Route>
            <Route path="/Pothos">
              <Pothos />
            </Route>
            <Route path="/AboutUs">
              <AboutUs />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
