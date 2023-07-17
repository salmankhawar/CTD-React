import ProductThumbnail from '../components/ProductThumbnail'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL

export default function Products() {
// define state for updating the variable 
const [products, setProducts] = useState ([])
// define function to import data from the API
async function getProducts() {
  let productsData = await axios.get(`${API_URL}`)
  setProducts(productsData.data)
}
useEffect(() => {getProducts()}, [])
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
          <ProductThumbnail product={product} key={i} API_URL={API_URL} getProducts={getProducts} />
          )}
      </div>
    </div>
    </>  
  );
}
