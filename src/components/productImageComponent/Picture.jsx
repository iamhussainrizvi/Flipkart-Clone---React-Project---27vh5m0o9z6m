import React from 'react'

function Picture({imageSrc}) {
  return (
    <>
        <div className="product_image_holder">
            <img src={imageSrc} alt="productImage" />
          </div>
    </>
  )
}

export default Picture