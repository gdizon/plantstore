import hoyakerrii from "./hoyakerrii.jpg"
const HoyaKerrii = () => {
    return ( 
        <div className="row plant">
            <img src={ hoyakerrii } className="img"></img>
            <h3>Plant Name: Hoya Kerrii</h3>
            <h3>Plant Price: $9.99</h3>
            <p>Plant Origin: Tropical Asia</p>
            <p>Plant Care: Put in bright direct light. They also appreciate a warm, humid environment. Water when the soil completely dries.</p>
        </div>
     );
}
 
export default HoyaKerrii;