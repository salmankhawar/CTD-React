import logo from './logo.svg';
import './App.css';

function App() {
  // Define temporary data
  let fruits = [{
    name: "Banana",
    description: "",
    count: 5,
    photo: "https://cdn.pixabay.com/photo/2019/08/19/09/24/fruit-4415864_1280.jpg"
},
{
  name: "Banana",
  description: "",
  count: 5,
  photo: "https://cdn.pixabay.com/photo/2019/08/19/09/24/fruit-4415864_1280.jpg"
},
{
  name: "Banana",
  description: "",
  count: 5,
  photo: "https://cdn.pixabay.com/photo/2019/08/19/09/24/fruit-4415864_1280.jpg"
}]
  return (
    // Make a container for the product cards grid
    <div className="container-fluid ">
      {/* Define row for the product cards grid */}
      <div className="row">
          {/* Map the array of products to each card to represent each product */}
          {fruits.map((fruit, i) =>
          // Display a card for each product
          <div className="card col-sm m-2"  key={i}>
            <img src={fruit.photo} className="card-img-top" alt="..."/>
              <div className="card-body">
              <h5 className="card-title">{fruit.name}</h5>
              <p className="card-text">{fruit.description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Available to buy: {fruit.count}</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-body d-grid gap-2 col-8 mx-auto">
              <button type="button" className="btn btn-primary">View</button>
            </div>
          </div>
          )}
      </div>
    </div>  
  );
}

export default App;
