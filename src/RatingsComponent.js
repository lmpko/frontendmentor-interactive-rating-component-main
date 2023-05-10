import React, {useState, useContext } from 'react'
import startIMG from "/images/icon-star.svg"
import RatingContext from './RatingContext';


const RatingsComponent = () => {
  const { setRatingValue } = useContext(RatingContext);
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingClick = (value) => {
    setSelectedRating(value);
  };

  const handleSubmit = () => {
    setRatingValue(selectedRating);
  };

  return (
    <section className="rating-card card">
      <img src={startIMG} alt="star"/>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!
      </p>
      <div className="rating">
        <div className={selectedRating === 1 ? 'selected' : '' } onClick={() => handleRatingClick(1)}>1</div>
        <div className={selectedRating === 2 ? 'selected' : '' } onClick={() => handleRatingClick(2)}>2</div>
        <div className={selectedRating === 3 ? 'selected' : '' } onClick={() => handleRatingClick(3)}>3</div>
        <div className={selectedRating === 4 ? 'selected' : '' } onClick={() => handleRatingClick(4)}>4</div>
        <div className={selectedRating === 5 ? 'selected' : '' } onClick={() => handleRatingClick(5)}>5</div>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </section>
  )
}

export default RatingsComponent