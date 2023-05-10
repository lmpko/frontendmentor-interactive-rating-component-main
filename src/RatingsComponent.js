import React from 'react'
import startIMG from "/images/icon-star.svg"

const RatingsComponent = () => {
  return (
    <section class="rating-card card">
      <img src={startIMG} alt="star"/>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!
      </p>
      <div class="rating">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <button>Submit</button>
    </section>
  )
}

export default RatingsComponent