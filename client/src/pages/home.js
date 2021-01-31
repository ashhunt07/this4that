import React from "react";

import ReviewSlideLogin from "../components/review-slider-login";

//Bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

//buttons
import LoginButton from "../components/login-button";
import SignupButton from "../components/signup-button";

export default function Home () {
        return(
        <div>
                <Jumbotron fluid className="jumbotron" lg="5" alt="Photo by Adonyi Gábor from Pexels">
                        <Container >
                                <img
                                        src="https://github.com/xtasherx/project3/blob/main/client/public/this2that-logo.png?raw=true"
                                        width="300"
                                        className="d-inline-block align-middle mb-3"
                                        alt="this4that logo"
                                />

                                <h4>
                                An easy and fun way to SAVE MONEY while still obtaining any services you require!  
                                </h4>
                                <p className="my-5">Join the barter community and trade talents and services, in any combination.
                                this4that offers a way for you to get value out of your many talents while exploring the fantastic abilities of others in your community.  You will also have fun searching, making deals, and will likely meet a few awesome people along the way!
                                </p>
                                <LoginButton className/> &emsp;<SignupButton />
                        </Container>
                </Jumbotron>
                <Container>
                        <ReviewSlideLogin />  
                </Container>
        </div>
        )
}
