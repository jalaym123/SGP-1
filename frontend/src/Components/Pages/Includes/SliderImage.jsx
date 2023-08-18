import React from 'react'
import Image from 'react-bootstrap/Image';

export const SliderImage = ({ id }) => {
    return (
        <Image src={require(`../../Assets/s${id}.png`)} fluid />
    )
}