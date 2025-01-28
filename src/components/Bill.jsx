import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom"
function Bill(props) {
  const [total, setTotal] = useState(0);
  var navigate=useNavigate()
  useEffect(()=>{
    var temp = 0
    for(var k in props.bill){
      for(var j in props.bill[k]){
        temp = temp+Number(props.bill[k][j])
      }
    }
    setTotal(temp)
  },[props.bill])
  return (
    <div className="p-2">
      <h1>Bill</h1>
      {
        Object.keys(props.bill).map((st)=>{
          return (<div className="p-2">
            <h4>{st}</h4>
            {
              props.bill && Object.keys(props.bill[st]).map((s)=>{
                return <div className="p-2">
                    <b>{s}:{props.bill[st][s]}</b>
                  </div>
              })
            }
          </div>)
        })
      }
      <h1>
        Total:{total}
        
      </h1>
      {
        total!=0 && <button onClick={()=>{navigate(`/booking/payment/${total}`)}}>Proceed to Pay</button>
      }
    </div>
  )
}
export default Bill