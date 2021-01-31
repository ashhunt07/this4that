// React Slider imports
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// icons
import { FaStar } from "react-icons/fa";
// import { useEffect } from 'react';

// review info
// import reviews from "./reviews";
let array = [];


const ReviewSlide = (props) => {
    console.log(props.reviews)

    array=props.reviews;
    console.log(array)

        return (
        <div className="revSlide">
            <Carousel autoplay={ false } infiniteLoop={true} showArrows={true} showStatus={false} showThumbs={false}>
                
            {props.reviews.map((text, id) => (
                <div key={id} className={id}>
                    <div className="reviewCard align-middle">
                        <p className="mx-auto mt-2 reviewText"> 
                            {text}
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

export default ReviewSlide;

ReviewSlide.defaultProps = {
    reviews: ["There's nothing here! Leave a review!"]
}


