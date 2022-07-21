import philodendronmelanochrysum from './philodendronmelanochrysum.jpg';
import philodendrongloriosum from './philodendrongloriosum.jpg';
import philodendronpinkprincess from './philodendronpinkprincess.jpg';
import philodendronbirkin from './philodendronbirkin.jpg';
const Hoya = () => {
    return ( 
        <div className="home">
        <div className="row">
            <div className="column">
                <a href='/philodendronmelanochrysum'>
                <div className="card">
                    <img src={philodendronmelanochrysum} width='80%'></img>
                    <h3>Philodendron Melanochrysum</h3>
                    <h3>$34.99</h3>
                </div>
                </a>
            </div>
            <div className="column">
                <a href='/philodendrongloriosum'>
                <div className="card">
                    <img src={philodendrongloriosum} width='80%'></img>
                    <h3>Philodendron Gloriosum</h3>
                    <h3>$34.99</h3>
                </div>
                </a>
            </div>
        </div>
        <div className="row">
            <div className="column">
                <a href='/philodendronpinkprincess'>
                <div className="card">
                    <img src={philodendronpinkprincess} width='80%'></img>
                    <h3>Philodendron Pink Princess</h3>
                    <h3>$44.99</h3>
                </div>
                </a>
            </div>
            <div className="column">
                <a href='/philodendronbirkin'>
                <div className="card">
                    <img src={philodendronbirkin} width='80%'></img>
                    <h3>Philodendron Birkin</h3>
                    <h3>$29.99</h3>
                </div>
                </a>
            </div>
        </div>
    </div>
     );
}
 
export default Hoya;