import monsteraadansonii from "./monsteraadansonii.jpg"
const MonsteraAdansonii = () => {
    return ( 
        <div className="row plant">
            <img src={ monsteraadansonii } className="img"></img>
            <h3>Plant Name: Monstera Adansonii</h3>
            <h3>Plant Price: $24.99</h3>
            <p>Plant Origin: South and Central America</p>
            <p>Plant Care: Put in any amount of light. They also appreciate a warm, humid environment. Water when the top 1-2 inches of soil is dry.</p>
        </div>
     );
}
 
export default MonsteraAdansonii;