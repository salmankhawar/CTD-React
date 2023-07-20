import ProductThumbnail from '../components/ProductThumbnail'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from '../components/Nav'
const API_URL = process.env.REACT_APP_API_URL
const EAPI_KEY = process.env.REACT_APP_EAPI_KEY

export default function Products() {
// define state for updating the variable 
  const [products, setProducts] = useState ([])
  const [conversion, setConversion] =useState(0)

  

  // setup external API to convert GBP into USD
  async function getRates() {
    try {let currencyRates = await axios.get(`http://apilayer.net/api/live?access_key=${EAPI_KEY}`)
      setConversion(currencyRates.data.quotes.USDGBP)
    } catch(err) {
      console.log(err)
    }
  }

  // define function to import data from the API
  async function getProducts() {
    if (conversion > 0) {
      try { let productsData = await axios.get(`${API_URL}`)
        setProducts(productsData.data)
      } catch(err){
        console.log(err)
      }
    } else {
      console.log('Awaiting Exchange Rate')
    }
  }
  
  useEffect(() => {getRates()})
  useEffect(() => {getProducts()},[conversion])


  return (
    <>
      <Nav />
      {/* Make container for filter bar */}
      <div className="container bg-light p-4 col-8 ">
        <div className="row col-12 col-sm-6 col-md-4 col-lg-2 justify-content-center ms-4">
          <div className="col-12 m-2">
            
          </div>
        </div>
      </div>
      {/* Make a conditional statement to see if the any products exist */}
      {Array.isArray(products) && products.length > 0 ?
        // {/*  Make a container for the product cards grid */}
        (<div className="container ">
          {/* Define row for the product cards grid */}
          <div className="row justify-content-center">
            {/* Map the array of products to each card to represent each product */}
            {products.map((product, i) =>
            // Display a card for each product. Render the Product Thumbnail component, pass props
              <ProductThumbnail product={product} key={i} API_URL={API_URL} getProducts={getProducts} conversion={conversion} />
            )}
          </div>
        </div> ) : (<h1 className="center-text">There are no Products Listed</h1>)}
    </>  
  )
}