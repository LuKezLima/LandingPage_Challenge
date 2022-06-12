import React from 'react'
import './CardBottom.css'

export default ({bgImage, Title, Paragraph}) => {
    return(
        <div className='CardBottom' style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>

            <div className='contentCardBottom'>
            <h3>{Title}</h3>
            <p>{Paragraph}</p>
            </div>
           

        </div>
    )
}