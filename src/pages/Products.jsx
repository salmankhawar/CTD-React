import ProductThumbnail from '../components/ProductThumbnail'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from '../components/Nav'
const API_URL = process.env.REACT_APP_API_URL
const EAPI_KEY = process.env.REACT_APP_EAPI_KEY

export default function Products() {
// define state for updating the variable 
  const [products, setProducts] = useState ([])

  

  // setup external API to convert GBP into USD
  async function getRates() {
    const timeout = 10000 // 10 seconds
    try {
      const currencyRates = await axios.get(
        'https://api.apilayer.com/currency_data/live?source=USD&currencies=GBP',
        {
          headers: {
            'apikey': EAPI_KEY,
          },
          timeout,
        }
      )
      let usdgbp = currencyRates.data.quotes.USDGBP
      getProducts(usdgbp)
    } catch (err) {
      if (err.response && err.response.status === 408) {
        console.log('Request timed out')
      } else {
        console.log(err)
      }
    }
  }

  // define function to import data from the API
  async function getProducts(usdgbp) {
    if (usdgbp > 0) {
      try { let productsData = await axios.get(`${API_URL}`) 
        if (productsData.data.length > 0) {
          productsData.data.map((product) => {
            product.price = product.currency == 'GBP' ? Math.round(product.price/usdgbp * 100)/100 : product.price
          })
          setProducts(productsData.data) 
        }
      } catch(err){
        console.log(err)
      }
    } else {
      console.log('Awaiting Exchange Rate')
    }
  }
  
  useEffect(() => {getRates()}, [])


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
              <ProductThumbnail product={product} key={i} API_URL={API_URL} getProducts={getProducts} />
            )}
          </div>
        </div> ) : (<h1 className="center-text">There are no Products Listed</h1>)}
    </>  
  )
}