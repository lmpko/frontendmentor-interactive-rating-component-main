import React , { useState }from 'react'
import RatingsComponent from './RatingsComponent'
import ThankComponent from './ThankComponent'

import RatingContext from './RatingContext'

const AppLayout = () => {
  const [ratingValue, setRatingValue] = useState(null);
  return (
    <>
     <RatingContext.Provider value={{ rating: ratingValue, setRatingValue }}>
      {ratingValue !== null ? <ThankComponent /> : <RatingsComponent />}
    </RatingContext.Provider>
    </>
  )
}

export default AppLayout