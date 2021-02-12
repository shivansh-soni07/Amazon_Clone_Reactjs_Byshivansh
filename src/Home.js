import React from 'react'
import Product from './Product'
import './Home.css'
function Home() {
    return (
        <div className='home'>
            {/* <p>HEY THIS IS A HOME PAGE</p> */}
            <div className='home_container'>

                <img className='home_image' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg" /> {/*use original image*/}
                
            </div>

            <div className='home_row'>
                < Product title='The Lean Startup' price={29.99} rating={5}      
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"  />
                < Product title='The Lean Startup' price={29.99} rating={5}      
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"  />
                < Product title='The Lean Startup' price={29.99} rating={5}      
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"  />
                
                
            </div>
            <div className='home_row'>
            < Product title='The Lean Startup' price={29.99} rating={5}      
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"  />
                
                < Product title='The Lean Startup' price={29.99} rating={5}      
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"  />
                
            
                
            </div>
            <div className='home_row'>
            < Product title='The Lean Startup' price={29.99} rating={5}      
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"  />
                
                
                
            </div>
            
        </div>
    )
}

export default Home
