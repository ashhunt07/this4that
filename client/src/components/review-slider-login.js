import React, { Component } from 'react';

// React Slider imports
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// review info
import reviews from "./reviews";

// icons
import { FaStar } from "react-icons/fa";

class ReviewSlideLogin extends Component {
    render() {
        return (
        <div className="revSlide">
            <Carousel autoplay={ false } infiniteLoop={true} showArrows={true} showStatus={false} showThumbs={false}>
                
            {reviews.map((text, id) => (
                <div key={id} className={id}>
                    <div className="reviewCard align-middle">
                        <p className="mx-auto mt-2 reviewText"> 
                            {text.review}
                        </p>

                        <div className="setStar">
                            {[...Array(5)].map((star, i) => {
                                return ( 
                                    <FaStar />
                                );
                            })}
                        </div>
                    </div>
                </div>
            ))}


            </Carousel>
        </div>
        );
    }
}

export default ReviewSlideLogin;