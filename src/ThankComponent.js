import React, { useContext } from 'react'
import RatingContext from './RatingContext';
import thankIMG from "/images/illustration-thank-you.svg"

const ThankComponent = () => {
  const {rating} = useContext(RatingContext)
  
  return (
  
    <section className="thank-card card">
      <img src={thankIMG} alt="thank you" />
      <div className="rating-summary">
         You selected <span>{rating}</span> out of 5
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