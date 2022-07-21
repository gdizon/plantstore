import hoyabella from "./hoyabella.jpg"
const HoyaBella = () => {
    return ( 
        <div className="row plant">
            <img src={ hoyabella } className="img"></img>
            <h3>Plant Name: Hoya Bella</h3>
            <h3>Plant Price: $24.99</h3>
            <p>Plant Origin: Myanmar and Northeast India</p>
            <p>Plant Care: Put in medium indirect light. They also appreciate a warm, humid environment. Water when the top 2 inches of soil is dry.</p>
        </div>
     );
}
 
export default HoyaBella;