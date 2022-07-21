import hoyacarnosa from "./hoyacarnosa.jpg"
const HoyaCarnosa = () => {
    return ( 
        <div className="row plant">
            <img src={ hoyacarnosa } className="img"></img>
            <h3>Plant Name: Hoya Carnosa</h3>
            <h3>Plant Price: $29.99</h3>
            <p>Plant Origin: Eastern Asia and Australia</p>
            <p>Plant Care: Put in bright indirect light. They also appreciate a warm, humid environment. Water when the soil completely dries.</p>
        </div>
     );
}
 
export default HoyaCarnosa;