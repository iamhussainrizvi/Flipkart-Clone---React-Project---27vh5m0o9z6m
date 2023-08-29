import React from 'react'

function Description({productDescription}) {
  return (
    <>
        <div className="product_description">
            <p className='description'>
              {productDescription}
            </p>
          </div>
    </>
  )
}

export default Description