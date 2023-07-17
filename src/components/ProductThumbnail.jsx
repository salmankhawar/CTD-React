import axios from 'axios'
import { useEffect } from 'react'


export default function ProductThumbnail({product, i, API_URL, getProducts}) {
  // send data and request to API when product is zero in stock
  
  // send count and request to API when quantity/count needs to be updated on submission of update button
  async function sendForm(e) {
    e.preventDefault()
    let updatedProduct = {
      count: e.target.count.value 
    }
    await axios.patch(`${API_URL}/${product._id}`, updatedProduct)
    // reload products with updated quantities
    getProducts()
  }
  async function sendEmail() { 
    if (product.count === 0) {
      try {
        await axios.post(`${API_URL}/email`, product)
        console.log('Email sent successfully!')
      } catch (error) {
        console.error('Error sending email:', error)
      }
    } else {
      console.log('Product count is not zero, no need to send email.')
    }
  }
  // trigger the sendEmail function which asks the backend to send out of stock email if needed
  useEffect (() => {sendEmail()},[product.count])
  return (
    <div className="card col-sm m-2"  key={i}>      
      <img  src={product.photo} className="card-img-top m-2 p-2 m-autos" alt="..."/>      
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-center">Available to buy: {product.count} {product.uom}</li>
        <li className="list-group-item text-center">Price: {product.currency} {product.price}/{product.uom}</li>
        <li className="list-group-item">
          <form className="d-grid gap-2 col-6 mx-auto" onSubmit={(e) => sendForm(e)}>
            <label className="text-center"><h5>Update Quantity:</h5></label>
            <input
              type="number"
              className="form-control text-center"
              name="count"
            />
            <button className="btn btn-primary">Update</button>
          </form>
        </li>
      </ul>
    </div>
  )
}