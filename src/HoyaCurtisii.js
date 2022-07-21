import hoyacurtisii from "./hoyacurtisii.jpeg"
const HoyaCarnosa = () => {
    return ( 
        <div className="row plant">
            <img src={ hoyacurtisii } className="img"></img>
            <h3>Plant Name: Hoya Curtisii</h3>
            <h3>Plant Price: $14.99</h3>
            <p>Plant Origin: Southeast Asia</p>
            <p>Plant Care: Put in bright indirect light. They also appreciate a warm, humid environment. Water when the soil is mostly dry.</p>
        </div>
     );
}
 
export default HoyaCarnosa;