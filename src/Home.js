import monstera from './plantstore/monstera.jpg'
import hoya from './plantstore/hoya.png'
import philodendron from './plantstore/philodendron.jpg'
import pothos from './plantstore/pothos.jpg'
import { useEffect, useState } from 'react'
const Home = () => {

     return ( 
        <div className="home">
            <div class="row">
                <div class="column">
                    <a href='/monstera'>
                    <div class="card">
                        <img src={monstera} width='80%'></img>
                        <h3>Monstera</h3>
                    </div>
                    </a>
                </div>
                <div class="column">
                    <a href='/hoya'>
                    <div class="card">
                        <img src={hoya} width='80%'></img>
                        <h3>Hoya</h3>
                    </div>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <a href='/philodendron'>
                    <div class="card">
                        <img src={philodendron} width='80%'></img>
                        <h3>Philodendron</h3>
                    </div>
                    </a>
                </div>
                <div class="column">
                    <a href='/pothos'>
                    <div class="card">
                        <img src={pothos} width='80%'></img>
                        <h3>Pothos</h3>
                    </div>
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default Home;