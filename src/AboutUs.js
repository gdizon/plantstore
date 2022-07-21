import family from "./family.jpg"
const AboutUs = () => {
    return ( 
        <div className="row aboutus">
            <img src={ family } className="img"></img>
            <p>Plant Store was created 5 years ago, family owned business</p>
        </div>
     );
}
 
export default AboutUs;