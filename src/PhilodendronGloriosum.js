import philodendrongloriosum from "./philodendrongloriosum.jpg"
const PhilodendronGloriosum = () => {
    return ( 
        <div className="row plant">
            <img src={ philodendrongloriosum } className="img"></img>
            <h3>Plant Name: Philodendron Gloriosum</h3>
            <h3>Plant Price: $34.99</h3>
            <p>Plant Origin: Colombia</p>
            <p>Plant Care: Put in bright indirect light. They also appreciate a warm, humid environment. Water when the top 1-2 inches of soil are dry.</p>
        </div>
     );
}
 
export default PhilodendronGloriosum;