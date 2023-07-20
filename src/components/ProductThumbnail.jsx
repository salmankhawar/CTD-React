import axios from 'axios'
import { useState, useEffect } from 'react'



export default function ProductThumbnail({ product, i, API_URL, getProducts, conversion }) {
  const [errorMessage, setErrorMessage] = useState('')

  // send count and request to API when quantity/count needs to be updated on submission of update button
  async function sendForm(e) {
    e.preventDefault()
    let updatedProduct = {
      count: e.target.count.value,
    }
    let post = await axios.patch(`${API_URL}/${product._id}`, updatedProduct)
    // reload products with updated quantities
    setErrorMessage(post.data)
    // Reset the form after submission
    e.target.reset()
  }

  useEffect(() =>{getProducts()}, [errorMessage] )

  return (
    <div className="card col-12 col-sm-6 col-md-4 col-lg-3 m-2 jutify-content-center" key={i}>
      <img src={product.photo} className="card-img p-2" alt="..." id="product-thumbnail"/>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description.length > 250 ? `${product.description.substring(0, 250)}...` : product.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-center">Available to buy: {product.count} {product.uom}</li>
        <li className="list-group-item text-center">Price: $ {product.currency === 'GBP' ? Math.round(product.price / conversion * 100) / 100 : product.price}/{product.uom}</li>
        <li className="list-group-item">
          <form className="d-grid gap-2 col-6 mx-auto" onSubmit={(e) => sendForm(e)}>
            <label className="text-center"><h5>Update Quantity:</h5></label>
            <input
              type="number"
              className="form-control text-center"
              name="count"
              min="0"

            />
            <span className="text-success text-center">{errorMessage}</span>
            <button className="btn btn-primary">Update</button>
          </form>
        </li>
      </ul>
    </div>
  )
}