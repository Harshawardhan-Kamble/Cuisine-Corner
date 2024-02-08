import React from 'react'
import { Link } from "react-router-dom";
const Cancel = () => {
  return (
    <div className='payment-failure'>

      <div class="payment-failure-container">
        
        <div class="payment-failure-message">
          <p><strong>Oops! Payment Failed</strong></p>
          <p>We're sorry, but we couldn't process your payment.</p>
        </div>
        {/* <div class="payment-failure-suggestions">
          <p>Here are a few suggestions:</p>
          <ul>
            <li>Double-check your payment information for accuracy.</li>
            <li>Ensure your account has sufficient funds or try another payment method.</li>
            <li>If the issue persists, contact your bank or financial institution.</li>
          </ul>
        </div> */}
        <div class="payment-failure-contact">
            
            
              <Link to="/contactus">
                
          <button>Contact Support Team
            
          </button>
              </Link>
        </div>
      </div>


    </div>
  )
}

export default Cancel  