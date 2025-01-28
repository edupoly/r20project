import {connect} from 'react-redux'
import axios from "axios"
import React,{useState,useEffect} from "react"
import * as _ from 'lodash';
import Bill from './Bill';
function ServiceBooking(props) {
  console.log(props)
  const [services, setServices] = useState({})
  const [selectedServices, setSelectedServices] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:4000/services").then((res)=>{
      var x = _.groupBy(res.data,'serviceType');
      setServices({...x})
    })
  },[])
  function updateCart(ev,st,s,c){
    var temp = {...selectedServices}
    if(temp[st]){
      if(ev.target.checked){
        temp={...temp,[st]:{...temp[st],[s.serviceTitle]:ev.target.value}}
      }
      else{
        delete temp[s.serviceType][s.serviceTitle]
        if(Object.keys(temp[st]).length===0){
          delete temp[st];
        }
      }
    }
    else{
      temp={...temp,[st]:{[s.serviceTitle]:ev.target.value}}

    }
    setSelectedServices({...temp})
  }
  return (
    <div className='container d-flex flex-wrap'>
      <div className='border w-50 p-2'>
        <h1>ServiceBooking</h1>
        {
          Object.keys(services).map((st,i)=>{
            return <li key={i}>
              <b>{st}</b>
              <br></br>
              <ol>
                {
                  services[st].map((s)=>{
                    return <>
                      {
                        props.user && (
                          <div>
                            <input type="checkbox" value={s.serviceCost[props.user.userDetails.selectedCarType]} onChange={(e)=>{updateCart(e,st,s,props.user.userDetails.selectedCarType)}}
                            name={props.user.userDetails.selectedCarType}/>:{s.serviceTitle}(Rs.{s.serviceCost[props.user.userDetails.selectedCarType]})
                          </div>
                        )
                      }
                    </>
                    
                  })
                }
              </ol>
              </li>
          })
        }
      </div>
      <div className='border w-50'>
        <Bill bill={selectedServices}></Bill>
      </div>
    </div>
  )
}
export default connect(store=>store)(ServiceBooking)