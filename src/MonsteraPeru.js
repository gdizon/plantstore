import monsteraperu from "./monsteraperu.jpg"
const MonsteraPeru = () => {
    return ( 
        <div className="row plant">
            <img src={ monsteraperu } className="img"></img>
            <h3>Plant Name: Monstera Peru</h3>
            <h3>Plant Price: $34.99</h3>
            <p>Plant Origin: Peru and Venezuela</p>
            <p>Plant Care: Put in bright indirect light. They also appreciate a warm, humid environment. Water when the soil completely dries.</p>
        </div>
     );
}
 
export default MonsteraPeru;