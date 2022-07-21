import marblequeenpothos from "./marblequeenpothos.jpg"
const MarbleQueenPothos = () => {
    return ( 
        <div className="row plant">
            <img src={ marblequeenpothos } className="img"></img>
            <h3>Plant Name: Marble Queen Pothos</h3>
            <h3>Plant Price: $14.99</h3>
            <p>Plant Origin: French Polynesia</p>
            <p>Plant Care: Put in bright indirect light. They also appreciate a warm, humid environment. Water when the top 1-2 inches of soil are dry.</p>
        </div>
     );
}
 
export default MarbleQueenPothos;