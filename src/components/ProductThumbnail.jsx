import axios from 'axios'
import { useState } from 'react'



export default function ProductThumbnail({ product, i, API_URL, getProducts, conversion }) {
  const [errorMessage, setErrorMessage] = useState('')
  const [countValue, setCountValue] = useState('')

  // send count and request to API when quantity/count needs to be updated on submission of update button
  async function sendForm(e) {
    e.preventDefault()
    let updatedProduct = {
      count: e.target.count.value,
    }

    // Make the API request here...
    try {
      let post = await axios.patch(`${API_URL}/${product._id}`, updatedProduct)
      setErrorMessage(post.data)
      getProducts()
      setCountValue('') // Reset the form after successful submission
    } catch (error) {
      setErrorMessage('Failed to update quantity.')
    }
  }

  return (
    <div className="card col-12 col-sm-6 col-md-4 col-lg-3 m-2 jutify-content-center" key={i}>
      <img src={product.photo} className="card-img p-2" alt="..." id="product-thumbnail" />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description.length > 250 ? `${product.description.substring(0, 250)}...` : product.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-center">Available to buy: {product.count} {product.uom}</li>
        <li className="list-group-item text-center">Price: $ {product.currency === 'GBP' ? Math.round(product.price / conversion * 100) / 100 : product.price}/{product.uom}</li>
        <li className="list-group-item">
          <form className="d-grid gap-2 col-6 mx-auto" onSubmit={sendForm}>
            <label className="text-center"><h5>Update Quantity:</h5></label>
            <input
              type="number"
              className="form-control text-center"
              name="count"
              min="0"
              value={countValue}
              onChange={(e) => setCountValue(e.target.value)} // Update countValue on input change
            />
            <span className="text-success text-center">{errorMessage}</span>
            <button className="btn btn-primary">Update</button>
          </form>
        </li>
      </ul>
    </div>
  )
}