import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { SliderImage } from './SliderImage';

export const Slides = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <SliderImage id={1} />
                <Carousel.Caption>
                    <h3>Pizza</h3>
                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <SliderImage id={2} />
                <Carousel.Caption>
                    <h3>Burger</h3>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <SliderImage id={3} />
                <Carousel.Caption>
                    <h3>Salad</h3>
                    {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
