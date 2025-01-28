import axios from "axios"
import React,{useState,useEffect} from "react"
import * as _ from 'lodash'
function ServiceCatelog() {
  const [services, setServices] = useState({})
  useEffect(()=>{
    axios.get("http://localhost:4000/services").then((res)=>{
      var x = _.groupBy(res.data,'serviceType');
      setServices({...x})
    })
   
  },[])
  return (
    <div>
      <h1>ServiceCatelog</h1>
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
                    {
                      Object.keys(s.serviceCost).map((sc)=>{
                        return <li>{sc}:{s.serviceCost[sc]}</li>
                      })
                    }
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
export default ServiceCatelog