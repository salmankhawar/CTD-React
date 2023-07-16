import ProductThumbnail from '../components/ProductThumbnail'
import { Link } from 'react-router-dom';

export default function Products() {
    // Define temporary data
  let products = [{
    name: "Banana",
    description: "",
    count: 5,
    photo: "https://cdn.pixabay.com/photo/2018/09/24/20/12/bananas-3700718_1280.jpg",
    price: 2.99,
    uom: "Dozen",
    currency: "USD"
},
{
    name: "Mango ",
    description: "",
    count: 10,
    photo: "https://cdn.pixabay.com/photo/2016/07/22/02/58/mango-1534061_1280.jpg",
    price: 3.99,
    uom: "KG",
    currency: "GBP"
}]
return (
    <>
    {/* Make a container for the create product button */}
    <div className='container-fluid '>
        {/* Add Create Product Button */}
            <Link className="row justify-content-center" to="/createproduct"><button className="btn btn-primary col-4 m-4">Create Product</button>
            </Link>
        </div>
    {/*  Make a container for the product cards grid */}
    <div className="container-fluid ">
      {/* Define row for the product cards grid */}
      <div className="row">
          {/* Map the array of products to each card to represent each product */}
          {products.map((product, i) =>
          // Display a card for each product. Render the Product Thumbnail component, pass props
          <ProductThumbnail product={product} key={i} />
          )}
      </div>
    </div>
    </>  
  );
}
