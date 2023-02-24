import { Link } from "react-router-dom"

function Details() {
  return (
    <div>
      <h1>Details</h1>
      <div className="btn btn-info">
        <Link to="/booking/serviceBooking">Next</Link>
      </div>
    </div>
  )
}
export default Details