import monstera from './monstera.jpg';
import hoya from './hoya.png';
import philodendron from './philodendron.jpg';
import pothos from './pothos.jpg';
import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react'
const Home = () => {

     return ( 
        <div className="home">
            <div className="row">
                <div className="column">
                    <Link to='/plantstore/monstera'>
                    <div className="card">
                        <img src={monstera} width='80%'></img>
                        <h3>Monstera</h3>
                    </div>
                    </Link>
                </div>
                <div className="column">
                    <Link to='/plantstore/hoya'>
                    <div className="card">
                        <img src={hoya} width='80%'></img>
                        <h3>Hoya</h3>
                    </div>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <Link to='/plantstore/philodendron'>
                    <div className="card">
                        <img src={philodendron} width='80%'></img>
                        <h3>Philodendron</h3>
                    </div>
                    </Link>
                </div>
                <div className="column">
                    <Link to='/plantstore/pothos'>
                    <div className="card">
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