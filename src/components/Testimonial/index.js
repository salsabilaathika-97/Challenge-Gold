import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CardTesti from '../CardTesti'

const Testimonial = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
        <div style={{padding: 40}}>
            <Carousel  activeIndex={index} onSelect={handleSelect} indicators={true} variant="dark">
                <Carousel.Item>
                    <CardTesti />
                </Carousel.Item>
                <Carousel.Item>
                    <CardTesti />
                </Carousel.Item>
                <Carousel.Item>
                    <CardTesti />
                </Carousel.Item>
            </Carousel>
        </div>
        </>
    )
}

export default Testimonial;
