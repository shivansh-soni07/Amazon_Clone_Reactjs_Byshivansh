import React from 'react'
import './Subtotal.css'

function Subtotal() {
    return (
        <div className="subtotal">
            {/*react currency format not woorking*/}
            <p>Subtotal (0 items):<strong>0</strong></p>
            <small className='subtotal_gift'>
                <input type='checkbox' />This order contains gift 
            </small>
            <button>Proceed to checkout</button>
            
        </div>
    )
}

export default Subtotal
