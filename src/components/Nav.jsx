import { Link } from 'react-router-dom'

export default function Nav() {
  return (
  // create container for the Navigation bar
    <div className="container text-center">
      {/* Add Home Button */}
      <Link to="/"><button className="btn btn-primary col-2 m-4">Home</button>
      </Link>
      {/* Add Create Product Button */}
      <Link to="/createproduct"><button className="btn btn-primary col-2 m-4">Create Product</button>
      </Link>
      {/* Add Walkhthrouh Button */}
      <Link to="/walkthrough"><button className="btn btn-primary col-2 m-4">Walkthrough</button></Link>
    </div>
  )
}