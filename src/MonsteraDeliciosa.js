import monsteradeliciosa from "./monsteradeliciosa.jpeg"
const MonsteraDeliciosa = () => {
    return ( 
        <div className="row plant">
            <img src={ monsteradeliciosa } className="img"></img>
            <h3>Plant Name: Monstera Deliciosa</h3>
            <h3>Plant Price: $44.99</h3>
            <p>Plant Origin: South Mexico and Panama</p>
            <p>Plant Care: Put in medium to bright indirect light. They also appreciate a warm, humid environment. Water when the top 2-4 inches are dry</p>
        </div>
     );
}
 
export default MonsteraDeliciosa;