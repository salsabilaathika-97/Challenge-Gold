import React from "react";
import { Testi } from "../../asset";
import Carousel from 'react-bootstrap/Carousel';

const Testimonial = () => {
    return (
        <>
        <Carousel variant = "dark">
            <Carousel.Item>
                <img
                className="d-block"
                src={Testi}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block"
                src={Testi}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block"
                src={Testi}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </>
    )
}

export default Testimonial;