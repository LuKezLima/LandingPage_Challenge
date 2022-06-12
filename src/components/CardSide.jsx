import React from 'react'
import './CardSide.css'

export default ({bgImage, Title, Paragraph, Orientation, Color}) => {
    return(
        <div className='CardSide' style={{
            flexDirection: `${Orientation}`
        }}>
            <div className="content">
                <div className="groupContent">
                    <h2>{Title}</h2>
                    <p>{Paragraph}</p>
                </div>

            </div>

            <div className="ImageCard"
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bgImage})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
            >

            </div>

        </div>
    )
}