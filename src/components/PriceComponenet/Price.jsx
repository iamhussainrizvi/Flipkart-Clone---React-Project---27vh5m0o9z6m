import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


function Price({price}) {
  return (
    <>
        <div className='price_wrapper'>
              <h1>
                <CurrencyRupeeIcon/>
                {Number(price)*75}
              </h1> 
            </div>
    </>
  )
}

export default Price