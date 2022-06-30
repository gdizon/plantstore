import marblequeenpothos from './marblequeenpothos.jpg';
import manjulapothos from './manjulapothos.jpg';
import goldenpothos from './goldenpothos.jpg';
const Pothos = () => {
    return ( 
        <div className="home">
        <div class="row">
            <div class="column">
                <a href='/marblequeenpothos'>
                <div class="card">
                    <img src={marblequeenpothos} width='80%'></img>
                    <h3>Marble Queen Pothos</h3>
                    <h3>$14.99</h3>
                </div>
                </a>
            </div>
            <div class="column">
                <a href='/manjulapothos'>
                <div class="card">
                    <img src={manjulapothos} width='80%'></img>
                    <h3>Manjula Pothos</h3>
                    <h3>$34.99</h3>
                </div>
                </a>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <a href='/goldenpothos'>
                <div class="card">
                    <img src={goldenpothos} width='80%'></img>
                    <h3>Golden Pothos</h3>
                    <h3>$14.99</h3>
                </div>
                </a>
            </div>
        </div>
    </div>
     );
}
 
export default Pothos;