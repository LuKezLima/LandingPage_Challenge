import React from 'react'
import './ClientReview.css'


export default ({ClientPhoto, ClientReview, ClientName, ClientCharge}) => {
    return(
        <div className='Testimonial-Item'>
            <img src={ClientPhoto} alt="ClientPhoto" />
            <p id='clientReview' style={{color:'#ffffff'}}>{ClientReview}</p>

            <div className="infoPerson">
                <h3 style={{color:'#fff'}}>{ClientName}</h3>
            </div>
         
       
        </div>
    )
}