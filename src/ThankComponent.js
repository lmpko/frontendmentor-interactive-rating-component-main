import React from 'react'
import thankIMG from "/images/illustration-thank-you.svg"

const ThankComponent = () => {
  return (
    <section class="thank-card card">
      <img src={thankIMG} alt="thank you" />
      <div class="rating-summary">
         You selected <span>5</span> out of 5
      </div>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!
      </p>
    </section>
  )
}

export default ThankComponent