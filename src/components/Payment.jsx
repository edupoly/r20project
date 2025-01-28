import { useParams } from "react-router-dom"

function Payment() {
  var {amount}=useParams();
  
  return (
    <div>
      <h1>Payment:{amount}</h1>
      <div>
      <div class="d-flex align-items-start">
        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" 
          aria-controls="v-pills-home" aria-selected="true">
            <i class="bi bi-credit-card-2-front"></i>Debit/Credit card
          </button>
          <div class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile"
           type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
            <i class="bi bi-bank2"></i>Net Banking</div>
          <div class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" 
          role="tab" aria-controls="v-pills-messages" aria-selected="false">
            <i class="bi bi-wallet-fill"></i>UPI
          </div>

        </div>
        <div class="tab-content" id="v-pills-tabContent">
          <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">111111</div>
          <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">22222</div>
          <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">33333</div>
          <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
        </div>
      </div>
      </div>
    </div>
  )
}
export default Payment