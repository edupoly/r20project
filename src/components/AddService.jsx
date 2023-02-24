import axios from "axios"
import React,{useEffect, useState} from "react"
function AddService() {
  const [serviceTypes, setServiceTypes] = useState([])
  const [serviceTitle, setServiceTitle] = useState('')
  const [carTypes, setCarTypes] = useState([])

  const [newService, setNewService] = useState({
    "serviceType": "",
    "serviceTitle": "",
    "serviceCost": {
      "Hatchback": 0,
      "Sedan": 0,
      "CrossOver": 0,
      "SUV": 0
    }
  })
  useEffect(()=>{
    axios.get("http://localhost:4000/serviceTypes").then((res)=>{
      setServiceTypes([...res.data])
    })
    axios.get("http://localhost:4000/carTypes").then((res)=>{
      setCarTypes([...res.data])
    })
  },[])
  function addService(){
    axios({
      method: 'post',
      url: 'http://localhost:4000/services',
      data: newService
    }).then(()=>{
      alert("HI")
    })
  }
  return (
    <div>
      <h1>AddService</h1>
      Service Type:
      <select name="serviceType" onChange={(e)=>{setNewService({...newService,serviceType:e.target.value})}}>
        <option value={null} selected disabled>Please select Service Type</option>
        {
          serviceTypes && serviceTypes.map((st)=>{
            return <option value={st.type}>{st.type}</option>
          })
        }
      </select>
      <br></br>
      Service Title:<input type="text" onChange={(e)=>{setNewService({...newService,serviceTitle:e.target.value})}}></input>
      <br />
      <h5>Enter Cost per car type:</h5>
      {
        carTypes.map((ct)=>{
          return <div>
            <b>{ct.type}</b>:
            <input type="text"  onChange={(e)=>{setNewService({...newService,serviceCost:{...newService.serviceCost,[ct.type]:e.target.value}})}}/>

            </div>
        })
      }
      <button onClick={addService}>Add Service</button>
    </div>
  )
}
export default AddService