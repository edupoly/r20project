import axios from "axios";
import { useEffect,useState } from "react"
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom"

function Details(props) {
  var navigate = useNavigate()
  const [carTypes, setCarTypes] = useState([]);
  const [user,setUser] = useState({});
  useEffect(()=>{
    setUser(props.user.userDetails)
  },[props.user.userDetails])
 
  useEffect(()=>{
    axios.get("http://localhost:4000/carTypes").then((res)=>{
      setCarTypes([...res.data])
    })
  },[]);
  function updateUser(){
    console.log(user)
    props.dispatch({type:'UPDATEUSER',payload:user})
    navigate("/booking/serviceBooking")
  }
  return (
    <div className="w-75 mx-auto border">
      <h1>Details</h1>
      <div className="d-flex flex-wrap border p-4">
        <div className="w-50 p-2">
          <label htmlFor="" className="form-label">Full Name</label>
          <input type="text" className="form-control" onChange={(e)=>{setUser({...user,fullname:e.target.value})}}/>
        </div>
        <div className="w-50 p-2">
          <label htmlFor="" className="form-label">Mobile</label>
          <input type="text" className="form-control" onChange={(e)=>{setUser({...user,mobile:e.target.value})}} />
        </div>
        <div className="w-50 p-2">
          <label htmlFor="" className="form-label">Car Reg Number</label>
          <input type="text" className="form-control" onChange={(e)=>{setUser({...user,carreg:e.target.value})}} />
        </div>
        <div className="w-50 p-2">
          <label htmlFor="" className="form-label">Car Type</label>
          <div>
            {
              carTypes && carTypes.map((ct)=>{
                return (
                  <><input type="radio" name="carType" value={ct.type} className="form-check-input p-2 " 
                  onChange={(e)=>{setUser({...user,selectedCarType:e.target.value})}} />
                  :<span className="p-2">{ct.type}</span></>
                )
              })
            }
          </div>
        </div>
      </div>


      <div className="btn btn-info">
        <button className="btn btn-success" onClick={updateUser}>Next</button>
      </div>
    </div>
  )
}
export default connect(store=>store)(Details)