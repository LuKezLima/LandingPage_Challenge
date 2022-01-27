import React from 'react'
import './ClientReview.css'


export default ({ClientPhoto, ClientReview, ClientName, ClientCharge}) => {
    return(
        <div className='Testimonial-Item'>
            <img src={ClientPhoto} alt="ClientPhoto" />
            <p>{ClientReview}</p>

            <div className="infoPerson">
                <h3>{ClientName}</h3>
                <p>{ClientCharge}</p>
            </div>
         
       
        </div>
    )
}