import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
// define environment variable
const API_URL = process.env.REACT_APP_API_URL





export default function CreateProduct() {
  const navigate = useNavigate()
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
    try{
      let post = await axios.post(`${API_URL}`, product)
      console.log('Product Listed Successfully')
      navigate(`/`)
    } catch(err) {
      console.log(err)
    }
  }
  return (
    <>
      {/* Make a container for the create product button */}
      <div className='container-fluid '>
        {/* Add Home Button */}
        <Link className="row justify-content-center" to="/"><button className="btn btn-primary col-4 m-4">Home</button>
        </Link>
      </div>
      <div className="container ">
        <div className="row col-sm justify-content-md-center">
          <div className="input-group row">
            <h1 className="text-center">List A Product</h1>
            <form className="d-grid gap-2 col-6 mx-auto" onSubmit={(e) => sendForm(e)}>
              <label>Title</label>
              <input name="title" type="text" className="form-control"/>
              <label>Description</label>
              <textarea
                name="description"
                type="text"
                rows={10}
                className="form-control"
                defaultValue={''}
              />
              <label>Photo</label>
              <input name="photo" type="text" className="form-control" placeholder="http://..." />
              <label>Quantity</label>
              <input name="count" type="number" className="form-control" />
              <label>Unit of Measure</label>
              <select
                name="uom"
                className="form-control"
              >
                <option value="KG">KG</option>
                <option value="dozen">Dozen</option> 
              </select>
              <label>Currency</label>
              <div>
                <div className="radio">
                  <label><input type="radio" name="currency" value="USD" /> USD </label>
                </div>
                <div className="radio">
                  <label><input type="radio" name="currency" value="GBP" /> GBP </label>
                </div>
              </div>
              <label>Price</label>
              <input name="price" type="number" className="form-control" />
              <button className="btn btn-primary m-4">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}