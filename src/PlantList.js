const PlantList = ({ plants }) => {
    return (  
        <div className="PlantList">
            {plants.map((plant) => (
                <div className="card">
                    { plant.photo }
                    <h2>{ plant.title }</h2>
                    <h2>{ plant.price }</h2>
                </div>
            ))}
        </div>
    );
}
 
export default PlantList;