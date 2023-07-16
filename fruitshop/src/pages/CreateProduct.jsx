export default function CreateProduct() {
    return (
        <div className="container ">
            <div className="row col-sm justify-content-md-center">
                <div className="input-group row">
                    <h1 className="text-center">List A Product</h1>
                    <form className="d-grid gap-2 col-6 mx-auto">
                        <label>Name</label>
                        <input name="name" type="text" className="form-control"/>
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
                        <input name="quantity" type="number" className="form-control" />
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
    )
}