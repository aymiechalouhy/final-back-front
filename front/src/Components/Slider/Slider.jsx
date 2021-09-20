import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import sl2 from '../../image/sl2.jpg'
import sl6 from '../../image/sl6.jpg'
import sl81 from '../../image/sl81.jpg'
import './Slider.css'
export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop autoPlay showArrows={false} showStatus={false} showThumbs={false} >
                <div className="item">
                    <img src={sl2} alt="laptop"/>
                </div>

                <div>
                    <img src={sl6} alt="calm" />
                </div>
                <div>
                    <img src={sl81} alt="inpire" />
                </div>
            </Carousel>

        </div>
    );
}