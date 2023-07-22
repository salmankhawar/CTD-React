import { Link } from 'react-router-dom'

export default function Nav() {
  return (
  // create container for the Navigation bar
    <div className="container col-8">
      <div className='row m-2'>
        <div className= "text-center">
          {/* Add Home Button */}
          <Link to="/"><button className="btn btn-primary col-10 col-sm-4 col-md-3 m-2">Home</button>
          </Link>
          {/* Add Create Product Button */}
          <Link to="/createproduct"><button className="btn btn-primary col-10 col-sm-5 col-md-4 m-2">Create Product</button>
          </Link>
          {/* Add Walkhthrough Button */}
          <Link to="/walkthrough"><button className="btn btn-primary col-10 col-sm-4 col-md-3 m-2">Walkthrough</button></Link>
        </div>
      </div>
    </div>

  )
}