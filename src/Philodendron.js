import philodendronmelanochrysum from './philodendronmelanochrysum.jpg';
import philodendrongloriosum from './philodendrongloriosum.jpg';
import philodendronpinkprincess from './philodendronpinkprincess.jpg';
import philodendronbirkin from './philodendronbirkin.jpg';
const Hoya = () => {
    return ( 
        <div className="home">
        <div class="row">
            <div class="column">
                <a href='/philodendronmelanochrysum'>
                <div class="card">
                    <img src={philodendronmelanochrysum} width='80%'></img>
                    <h3>Philodendron Melanochrysum</h3>
                    <h3>$34.99</h3>
                </div>
                </a>
            </div>
            <div class="column">
                <a href='/philodendrongloriosum'>
                <div class="card">
                    <img src={philodendrongloriosum} width='80%'></img>
                    <h3>Philodendron Gloriosum</h3>
                    <h3>$34.99</h3>
                </div>
                </a>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <a href='/philodendronpinkprincess'>
                <div class="card">
                    <img src={philodendronpinkprincess} width='80%'></img>
                    <h3>Philodendron Pink Princess</h3>
                    <h3>$44.99</h3>
                </div>
                </a>
            </div>
            <div class="column">
                <a href='/philodendronbirkin'>
                <div class="card">
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