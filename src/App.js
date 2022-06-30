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
            <Route exact path="/plantstore">
              <Home />
            </Route>
            <Route path="/plantstore/monstera">
              <Monstera />
            </Route>
            <Route path="/plantstore/hoya">
              <Hoya />
            </Route>
            <Route path="/plantstore/philodendron">
              <Philodendron />
            </Route>
            <Route path="/plantstore/Pothos">
              <Pothos />
            </Route>
            <Route path="/plantstore/AboutUs">
              <AboutUs />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
