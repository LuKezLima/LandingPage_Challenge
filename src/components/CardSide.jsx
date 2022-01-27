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

                    <a href="" style={{
                        boxShadow: `0px 8px 7px -7px ${Color} `
                    }}>LEARN MORE</a>
                </div>

            </div>

            <div className="ImageCard"
            style={{
                backgroundImage: `url(${bgImage})`
            }}
            >

            </div>

        </div>
    )
}