import monsterasiltepecana from './monsterasiltepecana.jpeg';
import monsteradeliciosa from './monsteradeliciosa.jpeg';
import monsteraadansonii from './monsteraadansonii.jpg';
import monsteraperu from './monsteraperu.jpg';
import useFetch from "./useFetch";
import PlantList from "./PlantList";
import { useState, useEffect } from "react";

const Monstera = () => {
    // const { plants } = useFetch('http://localhost:8000/Monstera')
    // const [plants, setPlants] = useState([null]);

    // useEffect(() => {
    //     fetch('http://localhost:8000/Plants')
    //         .then( res => {
    //             return res.json;
    //         })
    //         .then( data =>{
    //             console.log(data)
    //             setPlants(data.Monstera);
    //         })
    // }, [])

    return ( 
        // <div className="monstera">
        //     console.log(plants);
        //     {plants && <PlantList plants={ plants.Monstera } />}
        // </div>
        <div className="home">
        <div class="row">
            <div class="column">
                <a href='/monsteradeliciosa'>
                <div class="card">
                    <img src={monsteradeliciosa} width='80%'></img>
                    <h3>Monstera Deliciosa</h3>
                    <h3>$44.99</h3>
                </div>
                </a>
            </div>
            <div class="column">
                <a href='/monsterasiltepecana'>
                <div class="card">
                    <img src={monsterasiltepecana} width='80%'></img>
                    <h3>Monstera Siltepecana</h3>
                    <h3>$29.99</h3>
                </div>
                </a>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <a href='/monsteraperu'>
                <div class="card">
                    <img src={monsteraperu} width='80%'></img>
                    <h3>Monstera Peru</h3>
                    <h3>$34.99</h3>
                </div>
                </a>
            </div>
            <div class="column">
                <a href='/monsteraadansonii'>
                <div class="card">
                    <img src={monsteraadansonii} width='80%'></img>
                    <h3>Monstera Adansonii</h3>
                    <h3>$24.99</h3>
                </div>
                </a>
            </div>
        </div>
    </div>
     );
}
 
export default Monstera;