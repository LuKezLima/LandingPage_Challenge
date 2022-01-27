import React from 'react'
import './CardBottom.css'

export default ({bgImage, Title, Paragraph}) => {
    return(
        <div className='CardBottom' style={{
            backgroundImage: `url(${bgImage})`
        }}>

            <div className='contentCardBottom'>
            <h3>{Title}</h3>
            <p>{Paragraph}</p>
            </div>
           

        </div>
    )
}