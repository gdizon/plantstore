import philodendronbirkin from "./philodendronbirkin.jpg"
const PhilodendronBirkin = () => {
    return ( 
        <div className="row plant">
            <img src={ philodendronbirkin } className="img"></img>
            <h3>Plant Name: Philodendron Birkin</h3>
            <h3>Plant Price: $44.99</h3>
            <p>Plant Origin: Cultivar originally mutated from Philodendron Rojo Congo</p>
            <p>Plant Care: Put in medium-bright indirect light. They also appreciate a warm, humid environment. Water when the top 1-2 inches of soil are dry.</p>
        </div>
     );
}
 
export default PhilodendronBirkin;