import monsterasiltepecana from "./monsterasiltepecana.jpeg"
const MonsteraSiltepecana = () => {
    return ( 
        <div className="row plant">
            <img src={ monsterasiltepecana } className="img"></img>
            <h3>Plant Name: Monstera Siltepecana</h3>
            <h3>Plant Price: $29.99</h3>
            <p>Plant Origin: Mexico and many parts of Central America</p>
            <p>Plant Care: Put in bright indirect light. They also appreciate a warm, humid environment. Water when the top inch or so of the soil dries</p>
        </div>
     );
}
 
export default MonsteraSiltepecana;