import hoyacarnosa from './hoyacarnosa.jpg';
import hoyakerrii from './hoyakerrii.jpg';
import hoyabella from './hoyabella.jpg';
import hoyacurtisii from './hoyacurtisii.jpeg';
const Hoya = () => {
    return ( 
        <div className="home">
        <div className="row">
            <div className="column">
                <a href='/hoyacarnosa'>
                <div className="card">
                    <img src={hoyacarnosa} width='80%'></img>
                    <h3>Hoya Carnosa</h3>
                    <h3>$29.99</h3>
                </div>
                </a>
            </div>
            <div className="column">
                <a href='/hoyakerrii'>
                <div className="card">
                    <img src={hoyakerrii} width='80%'></img>
                    <h3>Hoya Kerrii</h3>
                    <h3>$9.99</h3>
                </div>
                </a>
            </div>
        </div>
        <div className="row">
            <div className="column">
                <a href='/hoyabella'>
                <div className="card">
                    <img src={hoyabella} width='80%'></img>
                    <h3>Hoya Bella</h3>
                    <h3>$24.99</h3>
                </div>
                </a>
            </div>
            <div className="column">
                <a href='/hoyacurtisii'>
                <div className="card">
                    <img src={hoyacurtisii} width='80%'></img>
                    <h3>Hoya Curtisii</h3>
                    <h3>$14.99</h3>
                </div>
                </a>
            </div>
        </div>
    </div>
     );
}
 
export default Hoya;