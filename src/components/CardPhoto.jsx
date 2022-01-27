import React from 'react'
import './CardPhoto.css'


export default ({bgImage}) => {
    return(
        <div className='Gallery-item'
         style={{
             backgroundImage: `url(${bgImage})`
         }}>

        </div>
    )
}