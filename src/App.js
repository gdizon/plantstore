import Navbar from "./Navbar";
import Home from "./Home";
import Monstera from "./Monstera";
import Hoya from './Hoya';
import Philodendron from './Philodendron';
import Pothos from './Pothos';
import AboutUs from './AboutUs';
import Cart from './Cart';
import MonsteraDeliciosa from './MonsteraDeliciosa';
import MonsteraSiltepecana from './MonsteraSiltepecana';
import MonsteraPeru from './MonsteraPeru';
import MonsteraAdansonii from './MonsteraAdansonii';
import HoyaCarnosa from './HoyaCarnosa';
import HoyaKerrii from './HoyaKerrii';
import HoyaBella from './HoyaBella';
import HoyaCurtisii from './HoyaCurtisii';
import PhilodendronMelanochrysum from './PhilodendronMelanochrysum';
import PhilodendronGloriosum from './PhilodendronGloriosum';
import PhilodendronPinkPrincess from './PhilodendronPinkPrincess';
import PhilodendronBirkin from './PhilodendronBirkin';
import MarbleQueenPothos from "./MarbleQueenPothos";
import ManjulaPothos from "./ManjulaPothos";
import GoldenPothos from "./GoldenPothos";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Plant Store</h1>
        <Navbar />
        <div className="content">
          <Home />
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
            <Route path="/plantstore/pothos">
              <Pothos />
            </Route>
            <Route path="/plantstore/AboutUs">
              <AboutUs />
            </Route>
            <Route path="/plantstore/Cart">
              <Cart />
            </Route>
            <Route exact path="/plantstore/monstera/monsteradeliciosa">
              <MonsteraDeliciosa />
            </Route>
            <Route path="/plantstore/monstera/monsterasiltepecana">
              <MonsteraSiltepecana />
            </Route>
            <Route path="/plantstore/monstera/monsteraperu">
              <MonsteraPeru />
            </Route>
            <Route path="/plantstore/monstera/monsteraadansonii">
              <MonsteraAdansonii />
            </Route>
            <Route path="/plantstore/monstera/hoyacarnosa">
              <HoyaCarnosa />
            </Route>
            <Route path="/plantstore/monstera/hoyakerrii">
              <HoyaKerrii />
            </Route>
            <Route path="/plantstore/monstera/hoyabella">
              <HoyaBella />
            </Route>
            <Route path="/plantstore/monstera/hoyacurtisii">
              <HoyaCurtisii />
            </Route>
            <Route path="/plantstore/monstera/philodendronmelanochrysum">
              <PhilodendronMelanochrysum />
            </Route>
            <Route path="/plantstore/monstera/philodendrongloriosum">
              <PhilodendronGloriosum />
            </Route>
            <Route path="/plantstore/monstera/philodendronpinkprincess">
              <PhilodendronPinkPrincess />
            </Route>
            <Route path="/plantstore/monstera/philodendronbirkin">
              <PhilodendronBirkin />
            </Route>
            <Route path="/plantstore/monstera/marblequeenpothos">
              <MarbleQueenPothos />
            </Route>
            <Route path="/plantstore/monstera/manjulapothos">
              <ManjulaPothos />
            </Route>
            <Route path="/plantstore/monstera/goldenpothos">
              <GoldenPothos />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
