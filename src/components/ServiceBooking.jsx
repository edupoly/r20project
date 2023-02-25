import {connect} from 'react-redux'
import axios from "axios"
import React,{useState,useEffect} from "react"
import * as _ from 'lodash'
function ServiceBooking(props) {
  console.log(props)
  const [services, setServices] = useState({})
  useEffect(()=>{
    axios.get("http://localhost:4000/services").then((res)=>{
      var x = _.groupBy(res.data,'serviceType');
      setServices({...x})
    })
   
  },[])
  
  return (
    <div>
      <h1>ServiceBooking</h1>
      {
        Object.keys(services).map((st)=>{
          return <li>
            {st}
            <br></br>
            <ol>
              {
                services[st].map((s)=>{
                  return <li>
                    <h3>{s.serviceTitle}</h3>
                    <ol>
                      <b>{props.user && props.user.userDetails.selectedCarType}:{s.serviceCost[props.user.userDetails.selectedCarType]}</b>
                   
                    </ol>
                  </li>
                  
                })
              }
            </ol>
            </li>
        })
      }
    </div>
  )
}
export default connect(store=>store)(ServiceBooking)