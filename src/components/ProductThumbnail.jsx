export default function ProductThumbnail({product, i}) {
    return (
        <div className="card col-sm m-2"  key={i}>
            
                <img  src={product.photo} className="card-img-top m-2 p-2 m-autos" alt="..."/>
            
              <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item text-center">Available to buy: {product.count} {product.uom}</li>
              <li className="list-group-item text-center">Price: {product.currency}{product.price}/{product.uom}</li>
              <li className="list-group-item">
                <form className="d-grid gap-2 col-6 mx-auto" >
                  <label className="text-center">Update Quantity</label>
                  <input
                    type="number"
                    className="form-control"
                    name="quantity"
                  />
                    <button type="button" className="btn btn-primary">Update</button>
                </form>
              </li>
            </ul>
           </div>
    )
}