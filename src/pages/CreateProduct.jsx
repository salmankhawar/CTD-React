import axios from 'axios'
import validator from 'validator'
import { Link } from 'react-router-dom'
import { useState } from 'react'
// define environment variable
const API_URL = process.env.REACT_APP_API_URL





export default function CreateProduct() {
  const [urlErrorMessage, setUrlErrorMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  async function sendForm(e) {
    e.preventDefault()
    let product = {
      title: e.target.title.value,
      description: e.target.description.value,
      photo: e.target.photo.value,
      price: e.target.price.value,
      uom: e.target.uom.value,
      currency: e.target.currency.value,
      count: e.target.count.value,
    }
    
    if (validator.isURL(e.target.photo.value)) {
      try{
        let post = await axios.post(`${API_URL}`, product)
        setErrorMessage(post.data)
      } catch(err) {
        console.log(err)
      }
    } else {
      setUrlErrorMessage('Please enter a valid URL!')
    }
  }
    
  return (
    <>
      <div className="container ">
        <div className="row col-sm justify-content-md-center">
          <div className="input-group row">
            <h1 className="text-center">List A Product</h1>
            <form className="d-grid gap-2 col-6 mx-auto" onSubmit={(e) => sendForm(e)}>
              <label>Title:</label>
              <input required name="title" type="text" className="form-control"/>
              <label>Description:</label>
              <textarea required
                name="description"
                type="text"
                rows={5}
                className="form-control"
                defaultValue={''}
              />
              <label>Photo:</label>
              <input required name="photo" type="text" className="form-control" placeholder="http://..." />
              <span className="text-danger text-center">{urlErrorMessage}</span>
              <label>Quantity:</label>
              <input required name="count" type="number" className="form-control" min="0" />
              <label>Unit of Measure:</label>
              <select
                name="uom"
                className="form-control"
              >
                <option value="KG">KG</option>
                <option value="dozen">Dozen</option> 
              </select>
              <label>Currency:</label>
              <div>
                <div className="radio">
                  <label><input type="radio" name="currency" value="USD" /> USD </label>
                </div>
                <div className="radio">
                  <label><input type="radio" name="currency" value="GBP" /> GBP </label>
                </div>
              </div>
              <label>Price:</label>
              <input required name="price" type="number" className="form-control" min="0" step="0.01"/>
              <span className="text-success text-center">{errorMessage}</span>
              <div className='text-center'>
                <button className="btn btn-success col-5 m-4">Submit</button>
              </div>
            </form>
            {/* Add Home Button */}
            <Link className="row justify-content-center" to="/"><button className="btn btn-primary col-2 m-4">Home</button>
            </Link>
          </div>
        </div>
      </div>
      {/* Make a container for the create product button */}
      <div className='container'>
        
      </div>
    </>
  )
}