import React from 'react'

function Rating({ratingCount}) {
  return (
    <>
        <div className='reviews_wrapper'>
            <h4> {(Number(ratingCount)*(3*25)).toFixed(0)} Ratings & {ratingCount} Reviews </h4>
        </div>
    </>
  )
}

export default Rating