import goldenpothos from "./goldenpothos.jpg"
const GoldenPothos = () => {
    return ( 
        <div className="row plant">
            <img src={ goldenpothos } className="img"></img>
            <h3>Plant Name: Golden Pothos</h3>
            <h3>Plant Price: $14.99</h3>
            <p>Plant Origin: Southeast Asia</p>
            <p>Plant Care: Put in low-medium indirect light. They also appreciate a warm, humid environment. Water when the top 1-2 inches of soil are dry.</p>
        </div>
     );
}
 
export default GoldenPothos;