import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
function Checkout() {

    const [{basket,user},dispatch] = useStateValue(); 
    return (
        <div className='checkout'>
            <div className='checkout_left'>

                <img src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'  className='checkout_ad'   />
              
            
            </div>
            <div>
                <h2 className="checkout_title" > Your Shopping Basket</h2>
                {/* basketitems */}
                {/* basketitems */}
                {/* basketitems */}
                {/* basketitems */}
                {/* basketitems */}
            </div>

            <div className='checkout_right'>
                {/* <h2>Your Subtotal will go here</h2> */}
                < Subtotal />
            </div>

            
        </div>
    )
}

export default Checkout
