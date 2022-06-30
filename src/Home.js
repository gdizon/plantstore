import monstera from './monstera.jpg';
import hoya from './hoya.png';
import philodendron from './philodendron.jpg';
import pothos from './pothos.jpg';
import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react'
const Home = () => {

     return ( 
        <div className="home">
            <div class="row">
                <div class="column">
                    <Link to='/plantstore/monstera'>
                    <div class="card">
                        <img src={monstera} width='80%'></img>
                        <h3>Monstera</h3>
                    </div>
                    </Link>
                </div>
                <div class="column">
                    <Link to='/plantstore/hoya'>
                    <div class="card">
                        <img src={hoya} width='80%'></img>
                        <h3>Hoya</h3>
                    </div>
                    </Link>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <Link to='/plantstore/philodendron'>
                    <div class="card">
                        <img src={philodendron} width='80%'></img>
                        <h3>Philodendron</h3>
                    </div>
                    </Link>
                </div>
                <div class="column">
                    <Link to='/plantstore/pothos'>
                    <div class="card">
                        <img src={pothos} width='80%'></img>
                        <h3>Pothos</h3>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Home;